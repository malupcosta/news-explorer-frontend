import { Link } from "react-router-dom";

import Navigation from "../Navigation/Navigation";

function Header({ onLoginClick }) {
  return (
    <header className="header">
      <Link className="header__logo" to="/">
        NewsExplorer
      </Link>

      <Navigation onLoginClick={onLoginClick} />
    </header>
  );
}

export default Header;
