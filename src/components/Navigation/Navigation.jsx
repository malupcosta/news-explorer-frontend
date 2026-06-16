import { NavLink } from "react-router-dom";

function Navigation({ onLoginClick }) {
  return (
    <nav className="navigation" aria-label="Navegação principal">
      <NavLink
        exact
        to="/"
        className="navigation__link"
        activeClassName="navigation__link_active"
      >
        Início
      </NavLink>

      <NavLink
        to="/saved-news"
        className="navigation__link"
        activeClassName="navigation__link_active"
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
