import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import SavedNews from "./components/SavedNews/SavedNews";
import PopupWithForm from "./components/PopupWithForm/PopupWithForm";
import Preloader from "./components/Preloader/Preloader";
import NewsCardList from "./components/NewsCardList/NewsCardList";

import { searchNews } from "./utils/NewsApi";

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

const INITIAL_VISIBLE_CARDS = 3;
const CARDS_INCREMENT = 3;
const REQUEST_ERROR_MESSAGE =
  "Desculpe, algo deu errado durante a solicitação. Pode haver um problema de conexão ou o servidor pode estar inativo. Por favor, tente novamente mais tarde.";

function App() {
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [articles, setArticles] = useState([]);
  const [visibleCards, setVisibleCards] = useState(INITIAL_VISIBLE_CARDS);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [searchError, setSearchError] = useState("");

  function handleLoginClick() {
    setIsLoginPopupOpen(true);
  }

  function closeAllPopups() {
    setIsLoginPopupOpen(false);
  }

  function handleSearch(keyword) {
    setIsLoading(true);
    setHasSearched(true);
    setSearchError("");
    setArticles([]);
    setVisibleCards(INITIAL_VISIBLE_CARDS);

    searchNews(keyword)
      .then((data) => {
        const validArticles = data.articles.filter(
          (article) =>
            article.title &&
            article.description &&
            article.url &&
            article.urlToImage &&
            article.publishedAt &&
            article.source &&
            article.source.name,
        );

        setArticles(validArticles);
        localStorage.setItem(
          "newsExplorerArticles",
          JSON.stringify(validArticles),
        );
        localStorage.setItem("newsExplorerKeyword", keyword);
      })
      .catch(() => {
        setSearchError(REQUEST_ERROR_MESSAGE);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleShowMore() {
    setVisibleCards((currentValue) => currentValue + CARDS_INCREMENT);
  }

  useEffect(() => {
    const savedArticles = localStorage.getItem("newsExplorerArticles");

    if (savedArticles) {
      setArticles(JSON.parse(savedArticles));
      setHasSearched(true);
    }
  }, []);

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

      <Switch>
        <Route exact path="/">
          <Main onSearch={handleSearch} />

          {isLoading && <Preloader />}

          {!isLoading && searchError && (
            <section className="news-card-list news-card-list_visible">
              <div className="news-card-list__container">
                <p className="news-card-list__message">{searchError}</p>
              </div>
            </section>
          )}

          {!isLoading &&
            hasSearched &&
            !searchError &&
            articles.length === 0 && (
              <section className="news-card-list news-card-list_visible">
                <div className="news-card-list__container">
                  <h2 className="news-card-list__title">Nada encontrado</h2>
                  <p className="news-card-list__message">
                    Desculpe, mas nada corresponde aos seus termos de pesquisa.
                  </p>
                </div>
              </section>
            )}

          {!isLoading && articles.length > 0 && (
            <NewsCardList
              articles={articles}
              visibleCards={visibleCards}
              onShowMore={handleShowMore}
            />
          )}

          <About />
        </Route>

        <Route path="/saved-news">
          <SavedNews />
        </Route>
      </Switch>

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
