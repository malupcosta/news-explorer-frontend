import Navigation from "../Navigation/Navigation";

function Header({ onLoginClick }) {
  return (
    <header className="header">
      <a className="header__logo" href="/">
        NewsExplorer
      </a>

      <Navigation onLoginClick={onLoginClick} />
    </header>
  );
}

export default Header;
