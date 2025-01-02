import { Link } from "react-router-dom";

function NavMenu({ menuOpen, t }) {
  return (
    <div
      className={`header__menu__venor ${
        menuOpen ? "header__menu__venor--active" : ""
      }`}
    >
      <ul className="header__nav">
        <li className="header__nav-item">
          <Link className="header__nav-link" to="/">
            {t("Home")}
          </Link>
        </li>
        <li className="header__nav-item">
          <Link className="header__nav-link" to="/about-us">
            {t("About")}
          </Link>
        </li>
        <li className="header__nav-item">
          <Link className="header__nav-link" to="/portfolio">
            {t("Portfolio")}
          </Link>
        </li>
        <li className="header__nav-item">
          <Link className="header__nav-link" to="/pricing">
            {t("Pricing")}
          </Link>
        </li>
        <li className="header__nav-item">
          <Link className="header__nav-link" to="/contact">
            {t("Contact")}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavMenu;
