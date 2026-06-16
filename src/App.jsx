import { useEffect, useState } from "react";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import PopupWithForm from "./components/PopupWithForm/PopupWithForm";

import "./components/Header/Header.css";
import "./components/Navigation/Navigation.css";
import "./components/Main/Main.css";
import "./components/SearchForm/SearchForm.css";
import "./components/About/About.css";
import "./components/Footer/Footer.css";
import "./components/Preloader/Preloader.css";
import "./components/NewsCard/NewsCard.css";
import "./components/NewsCardList/NewsCardList.css";
import "./components/SavedNews/SavedNews.css";
import "./components/SavedNewsHeader/SavedNewsHeader.css";
import "./components/PopupWithForm/PopupWithForm.css";

function App() {
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);

  function handleLoginClick() {
    setIsLoginPopupOpen(true);
  }

  function closeAllPopups() {
    setIsLoginPopupOpen(false);
  }

  useEffect(() => {
    if (!isLoginPopupOpen) {
      return undefined;
    }

    function handleEscClose(event) {
      if (event.key === "Escape") {
        closeAllPopups();
      }
    }

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [isLoginPopupOpen]);

  return (
    <div className="page">
      <Header onLoginClick={handleLoginClick} />
      <Main />
      <About />
      <Footer />

      <PopupWithForm
        isOpen={isLoginPopupOpen}
        title="Entrar"
        name="login"
        buttonText="Entrar"
        onClose={closeAllPopups}
      >
        <label className="popup__field">
          <span className="popup__label">E-mail</span>
          <input
            className="popup__input"
            type="email"
            name="email"
            placeholder="Insira seu e-mail"
            required
          />
        </label>

        <label className="popup__field">
          <span className="popup__label">Senha</span>
          <input
            className="popup__input"
            type="password"
            name="password"
            placeholder="Insira sua senha"
            required
          />
        </label>
      </PopupWithForm>
    </div>
  );
}

export default App;
