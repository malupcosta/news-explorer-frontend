import { useContext } from "react";
import { NavLink } from "react-router-dom";

import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./Navigation.css";

function Navigation({
  onLoginClick,
  onSignOut,
  isMobileMenuOpen,
  isLightTheme,
  onCloseMenu,
  loggedIn,
}) {
  const currentUser = useContext(CurrentUserContext);

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

      {loggedIn && (
        <NavLink
          to="/saved-news"
          className="navigation__link"
          activeClassName="navigation__link_active"
          onClick={onCloseMenu}
        >
          Artigos salvos
        </NavLink>
      )}

      {loggedIn ? (
        <button
          className="navigation__button"
          type="button"
          onClick={onSignOut}
        >
          Sair {currentUser?.name}
        </button>
      ) : (
        <button
          className="navigation__button"
          type="button"
          onClick={onLoginClick}
        >
          Entrar
        </button>
      )}
    </nav>
  );
}

export default Navigation;
