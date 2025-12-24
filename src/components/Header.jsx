import { Link } from "react-router-dom";
import styles from "./styles/Header.module.css";

function Header() {
  return (
    <div>
      <div>
        <nav
          className={`main-header navbar navbar-expand navbar-light ${styles.headerNavbar}`}
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="#"
                className="nav-link"
                data-widget="pushmenu"
                role="button"
              >
                <i className={`fas fa-bars ${styles.headerIcon}`} />
              </Link>
            </li>

            <li className="nav-item d-none d-sm-inline-block">
              <Link to="#" className="nav-link">Home</Link>
            </li>

            <li className="nav-item d-none d-sm-inline-block">
              <Link to="#" className="nav-link">Contact</Link>
            </li>
          </ul>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                data-widget="fullscreen"
                href="#"
                role="button"
              >
                <i className={`fas fa-expand-arrows-alt ${styles.headerIcon}`} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
