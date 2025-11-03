import { Link, NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <a href="#" className="brand-link" previewlistener="true">
        <img
          src="dist/img/AdminLTELogo.png"
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: ".8" }}
        />
        {/* <span className="brand-text font-weight-light"> ADMIN PANEL</span> */}
      </a>
      <div className="sidebar os-host os-theme-light os-host-overflow os-host-overflow-y os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-transition">
        <div className="os-resize-observer-host observed">
          <div
            className="os-resize-observer"
            style={{ left: 0, right: "auto" }}
          />
        </div>
        <div
          className="os-size-auto-observer observed"
          style={{ height: "calc(100% + 1px)", float: "left" }}
        >
          <div className="os-resize-observer" />
        </div>
        <div
          className="os-content-glue"
          style={{ margin: "0px -8px", width: 249, height: 206 }}
        />
        <div className="os-padding">
          <div
            className="os-viewport os-viewport-native-scrollbars-invisible"
            style={{ overflowY: "scroll" }}
          >
            <div
              className="os-content"
              style={{ padding: "0px 8px", height: "100%", width: "100%" }}
            >
              {/* <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                  <div className="image">
                    <img
                      src="dist/img/user2-160x160.jpg"
                      className="img-circle elevation-2"
                      alt="User Image"
                    />
                  </div>
                  <div className="info">
                    <a href="#" className="d-block">
                      Alexander Pierce
                    </a>
                  </div>
                </div> */}

              <div className="form-inline mt-2">
                <div className="input-group" data-widget="sidebar-search">
                  <input
                    className="form-control form-control-sidebar"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-sidebar">
                      <i className="fas fa-search fa-fw" />
                    </button>
                  </div>
                </div>
                <div className="sidebar-search-results">
                  <div className="list-group">
                    <a href="#" className="list-group-item">
                      <div className="search-title">
                        <strong className="text-light" />N
                        <strong className="text-light" />o
                        <strong className="text-light" />{" "}
                        <strong className="text-light" />e
                        <strong className="text-light" />l
                        <strong className="text-light" />e
                        <strong className="text-light" />m
                        <strong className="text-light" />e
                        <strong className="text-light" />n
                        <strong className="text-light" />t
                        <strong className="text-light" />{" "}
                        <strong className="text-light" />f
                        <strong className="text-light" />o
                        <strong className="text-light" />u
                        <strong className="text-light" />n
                        <strong className="text-light" />d
                        <strong className="text-light" />!
                        <strong className="text-light" />
                      </div>
                      <div className="search-path" />
                    </a>
                  </div>
                </div>
              </div>
              <nav className="mt-2">
                <ul
                  className="nav nav-pills nav-sidebar flex-column"
                  data-widget="treeview"
                  role="menu"
                  data-accordion="false"
                >
                  <li className="nav-item menu-open">
                    <Link to="#" className="nav-link">
                      <i className="nav-icon fas fa-tachometer-alt" />
                      <p>
                        CMS
                        <i className="right fas fa-angle-left" />
                      </p>
                    </Link>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <NavLink
                          to="/dashboard"
                          className="nav-link"
                          previewlistener="true"
                        >
                          <i className="far fa-circle nav-icon" />
                          <p>Dashboard</p>
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          to="/hero-banners"
                          className="nav-link"
                          previewlistener="true"
                        >
                          <i className="far fa-circle nav-icon" />
                          <p>Hero Banners</p>
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          to="/explore-banners"
                          className="nav-link"
                          previewlistener="true"
                        >
                          <i className="far fa-circle nav-icon" />
                          <p>Explore Banners</p>
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          to="/resource-list"
                          className="nav-link"
                          previewlistener="true"
                        >
                          <i className="far fa-circle nav-icon" />
                          <p>Resource List</p>
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          to="/logout"
                          className="nav-link"
                          previewlistener="true"
                        >
                          <i className="far fa-circle nav-icon" />
                          <p>Logout</p>
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="os-scrollbar os-scrollbar-horizontal os-scrollbar-unusable os-scrollbar-auto-hidden">
          <div className="os-scrollbar-track">
            <div
              className="os-scrollbar-handle"
              style={{ width: "100%", transform: "translate(0px, 0px)" }}
            />
          </div>
        </div>
        <div className="os-scrollbar os-scrollbar-vertical os-scrollbar-auto-hidden">
          <div className="os-scrollbar-track">
            <div
              className="os-scrollbar-handle"
              style={{ height: "15.2318%", transform: "translate(0px, 0px)" }}
            />
          </div>
        </div>
        <div className="os-scrollbar-corner" />
      </div>
    </aside>
  );
}

export default Sidebar;
