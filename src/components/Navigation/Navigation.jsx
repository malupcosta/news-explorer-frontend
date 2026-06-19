import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation({
  onLoginClick,
  isMobileMenuOpen,
  isLightTheme,
  onCloseMenu,
}) {
  return (
    <nav
      className={`navigation ${
        isMobileMenuOpen ? "navigation_mobile-open" : ""
      } ${isLightTheme ? "navigation_theme_light" : ""}`}
      aria-label="Navegação principal"
    >
      <NavLink
        exact
        to="/"
        className="navigation__link"
        activeClassName="navigation__link_active"
        onClick={onCloseMenu}
      >
        Início
      </NavLink>

      <NavLink
        to="/saved-news"
        className="navigation__link"
        activeClassName="navigation__link_active"
        onClick={onCloseMenu}
      >
        Artigos salvos
      </NavLink>

      <button
        className="navigation__button"
        type="button"
        onClick={onLoginClick}
      >
        Entrar
      </button>
    </nav>
  );
}

export default Navigation;
