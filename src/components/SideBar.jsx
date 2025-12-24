import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./styles/SideBar.module.css";
/* React Icons */
import { MdDashboard } from "react-icons/md";
import { FaSchool } from "react-icons/fa6";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { FaUniversity } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";


function Sidebar() {
  useEffect(() => {
    const isMobile = () => window.innerWidth <= 992;

    const closeSidebar = () => {
      document.body.classList.remove("sidebar-open");
      document.body.classList.add("sidebar-collapse");
      const overlay = document.querySelector(".sidebar-overlay");
      if (overlay) overlay.remove();
    };

    const handler = (e) => {
      try {
        if (!isMobile()) return;
        if (!document.body.classList.contains("sidebar-open")) return;

        // If click/touch is inside sidebar or on toggle, do nothing
        const clickedInsideSidebar =
          e.target.closest(".main-sidebar") ||
          e.target.closest(".brand-link") ||
          e.target.closest(".nav-sidebar") ||
          e.target.closest(".sidebar-toggle") ||
          e.target.closest("[data-widget='pushmenu']");

        if (!clickedInsideSidebar) {
          // click was outside -> close sidebar
          closeSidebar();
        }
      } catch (err) {
        // defensive: ignore errors
        console.error(err);
      }
    };

    document.addEventListener("click", handler);
    document.addEventListener("touchstart", handler);

    // Optional: ensure overlay clicks also close the sidebar if overlay is present
    const overlayClickHandler = (e) => {
      if (document.body.classList.contains("sidebar-open")) closeSidebar();
    };

    document.addEventListener("click", (e) => {
      if (
        e.target &&
        e.target.classList &&
        e.target.classList.contains("sidebar-overlay")
      ) {
        overlayClickHandler(e);
      }
    });

    return () => {
      document.removeEventListener("click", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, []);

  return (
    <aside className={`main-sidebar elevation-4 ${styles.mainSidebar}`}>
      <Link to="#" className="brand-link">
        System
      </Link>

      <div className="sidebar">
        {/* Search bar */}
        <div className="form-inline mt-2">
          <div className={`input-group ${styles.inputGroup}`}>
            <input
              className="form-control form-control-sidebar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div className="input-group-append">
              <button className="btn btn-sidebar">
                <FiSearch className={styles.searchIcon} />
              </button>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li className="nav-item menu-open">
              <Link to="#" className="nav-link">
                <IoSettingsOutline className="nav-icon" />
                <p>
                  CMS
                  <i className="right fas fa-angle-left" />
                </p>
              </Link>

              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <NavLink to="/dashboard" className="nav-link">
                    <MdDashboard className="nav-icon" />
                    <p>Dashboard</p>
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to="/manage-sessions" className="nav-link">
                    <FaCalendarAlt className="nav-icon" />
                    <p>Manage Sessions</p>
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to="/manage-boards" className="nav-link">
                    <FaUniversity className="nav-icon" />
                    <p>Manage Boards</p>
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to="/logout" className="nav-link">
                    <RiLogoutCircleRLine className="nav-icon" />
                    <p>Logout</p>
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
