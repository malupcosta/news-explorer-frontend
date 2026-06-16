function Header() {
  return (
    <header className="header">
      <a className="header__logo" href="/">
        NewsExplorer
      </a>

      <nav className="header__nav" aria-label="Navegação principal">
        <a className="header__link header__link_active" href="/">
          Início
        </a>

        <button className="header__button" type="button">
          Entrar
        </button>
      </nav>
    </header>
  );
}

export default Header;
