import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header({ onLoginClick, onSignOut, loggedIn }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isSavedNewsPage = location.pathname === "/saved-news";
  const isLightTheme = isSavedNewsPage && !isMobileMenuOpen;

  function handleMenuButtonClick() {
    setIsMobileMenuOpen((currentValue) => !currentValue);
  }

  function handleCloseMenu() {
    setIsMobileMenuOpen(false);
  }

  function handleLoginClick() {
    onLoginClick();
    handleCloseMenu();
  }

  function handleSignOut() {
    onSignOut();
    handleCloseMenu();
  }

  return (
    <header
      className={`header ${isMobileMenuOpen ? "header_menu-open" : ""} ${
        isLightTheme ? "header_theme_light" : ""
      }`}
    >
      <Link className="header__logo" to="/" onClick={handleCloseMenu}>
        NewsExplorer
      </Link>

      <button
        className={`header__menu-button ${
          isMobileMenuOpen ? "header__menu-button_open" : ""
        }`}
        type="button"
        aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        onClick={handleMenuButtonClick}
      >
        <span className="header__menu-line" />
        <span className="header__menu-line" />
      </button>

      <Navigation
        isMobileMenuOpen={isMobileMenuOpen}
        isLightTheme={isLightTheme}
        onLoginClick={handleLoginClick}
        onSignOut={handleSignOut}
        onCloseMenu={handleCloseMenu}
        loggedIn={loggedIn}
      />
    </header>
  );
}

export default Header;
