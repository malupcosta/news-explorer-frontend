import { useEffect, useState } from "react";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import SavedNews from "./components/SavedNews/SavedNews";
import Preloader from "./components/Preloader/Preloader";
import NewsCardList from "./components/NewsCardList/NewsCardList";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import CurrentUserContext from "./contexts/CurrentUserContext";

import { searchNews } from "./utils/NewsApi";
import * as mainApi from "./utils/MainApi";

const INITIAL_VISIBLE_CARDS = 3;
const CARDS_INCREMENT = 3;
const REQUEST_ERROR_MESSAGE =
  "Desculpe, algo deu errado durante a solicitação. Pode haver um problema de conexão ou o servidor pode estar inativo. Por favor, tente novamente mais tarde.";

function getStoredArticles() {
  const savedArticles = localStorage.getItem("newsExplorerArticles");

  if (!savedArticles) {
    return [];
  }

  try {
    return JSON.parse(savedArticles);
  } catch {
    return [];
  }
}

function getStoredKeyword() {
  return localStorage.getItem("newsExplorerKeyword") || "";
}

function App() {
  const history = useHistory();
  const location = useLocation();

  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(() =>
    Boolean(localStorage.getItem("jwt")),
  );
  const [loginError, setLoginError] = useState("");
  const [registerError, setRegisterError] = useState("");
  const [articles, setArticles] = useState(getStoredArticles);
  const [savedArticles, setSavedArticles] = useState([]);
  const [visibleCards, setVisibleCards] = useState(INITIAL_VISIBLE_CARDS);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(
    () => getStoredArticles().length > 0,
  );
  const [searchError, setSearchError] = useState("");
  const [currentKeyword, setCurrentKeyword] = useState(getStoredKeyword);

  function handleLoginClick() {
    setRegisterError("");
    setLoginError("");
    setIsRegisterPopupOpen(false);
    setIsLoginPopupOpen(true);
  }

  function handleRegisterClick() {
    setLoginError("");
    setRegisterError("");
    setIsLoginPopupOpen(false);
    setIsRegisterPopupOpen(true);
  }

  function closeAllPopups() {
    setIsLoginPopupOpen(false);
    setIsRegisterPopupOpen(false);
  }

  function handleSearch(keyword) {
    setIsLoading(true);
    setHasSearched(true);
    setSearchError("");
    setArticles([]);
    setVisibleCards(INITIAL_VISIBLE_CARDS);
    setCurrentKeyword(keyword);

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

  function handleLogin(values) {
    setLoginError("");

    mainApi
      .login(values)
      .then((data) => {
        localStorage.setItem("jwt", data.token);
        return mainApi.getCurrentUser();
      })
      .then((user) => {
        setCurrentUser(user);
        setLoggedIn(true);
        closeAllPopups();
      })
      .catch(() => {
        setLoginError("E-mail ou senha incorretos.");
      });
  }

  function handleRegister(values) {
    setRegisterError("");

    mainApi
      .register(values)
      .then(() =>
        mainApi.login({
          email: values.email,
          password: values.password,
        }),
      )
      .then((data) => {
        localStorage.setItem("jwt", data.token);
        return mainApi.getCurrentUser();
      })
      .then((user) => {
        setCurrentUser(user);
        setLoggedIn(true);
        closeAllPopups();
      })
      .catch((err) => {
        setRegisterError(err.message || "Não foi possível fazer o cadastro.");
      });
  }

  function handleSignOut() {
    localStorage.removeItem("jwt");
    setCurrentUser(null);
    setLoggedIn(false);
    setSavedArticles([]);
    history.push("/");
  }

  function handleSaveArticle(article) {
    if (!loggedIn) {
      handleLoginClick();
      return;
    }

    mainApi
      .saveArticle(article, currentKeyword)
      .then((newArticle) => {
        setSavedArticles((currentArticles) => [
          newArticle,
          ...currentArticles,
        ]);
      })
      .catch(() => {});
  }

  function handleDeleteArticle(articleId) {
    mainApi
      .deleteArticle(articleId)
      .then(() => {
        setSavedArticles((currentArticles) =>
          currentArticles.filter((article) => article._id !== articleId),
        );
      })
      .catch(() => {});
  }

  useEffect(() => {
    const token = localStorage.getItem("jwt");

    if (!token) {
      return;
    }

    mainApi
      .getCurrentUser()
      .then((user) => {
        setCurrentUser(user);
        setLoggedIn(true);
      })
      .catch((err) => {
        if (err.status === 401 || err.status === 403) {
          localStorage.removeItem("jwt");
        }
      })
      .finally(() => {
        setIsCheckingAuth(false);
      });
  }, []);

  useEffect(() => {
    if (!loggedIn) {
      return;
    }

    mainApi
      .getSavedArticles()
      .then((data) => {
        setSavedArticles(data);
      })
      .catch(() => {});
  }, [loggedIn]);

  useEffect(() => {
    if (!location.state?.openLoginPopup || isCheckingAuth || loggedIn) {
      return undefined;
    }

    const timerId = setTimeout(() => {
      handleLoginClick();
      history.replace("/");
    }, 0);

    return () => {
      clearTimeout(timerId);
    };
  }, [location.state, history, isCheckingAuth, loggedIn]);

  useEffect(() => {
    if (!isLoginPopupOpen && !isRegisterPopupOpen) {
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
  }, [isLoginPopupOpen, isRegisterPopupOpen]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header
          onLoginClick={handleLoginClick}
          onSignOut={handleSignOut}
          loggedIn={loggedIn}
        />

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
                onSaveArticle={handleSaveArticle}
                savedArticles={savedArticles}
                loggedIn={loggedIn}
                onLoginClick={handleLoginClick}
                onDeleteArticle={handleDeleteArticle}
              />
            )}

            <About />
          </Route>

          <ProtectedRoute
            path="/saved-news"
            component={SavedNews}
            loggedIn={loggedIn}
            isCheckingAuth={isCheckingAuth}
            articles={savedArticles}
            onDeleteArticle={handleDeleteArticle}
          />
        </Switch>

        <Footer />

        <Login
          isOpen={isLoginPopupOpen}
          onClose={closeAllPopups}
          onLogin={handleLogin}
          onRegisterClick={handleRegisterClick}
          errorMessage={loginError}
        />

        <Register
          isOpen={isRegisterPopupOpen}
          onClose={closeAllPopups}
          onRegister={handleRegister}
          onLoginClick={handleLoginClick}
          errorMessage={registerError}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
