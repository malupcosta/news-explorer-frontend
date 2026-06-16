import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

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

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <About />
      <Footer />
    </div>
  );
}

export default App;
