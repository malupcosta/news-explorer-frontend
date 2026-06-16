function Navigation({ onLoginClick }) {
  return (
    <nav className="navigation" aria-label="Navegação principal">
      <a className="navigation__link navigation__link_active" href="/">
        Início
      </a>

      <a className="navigation__link" href="/saved-news">
        Artigos salvos
      </a>

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
