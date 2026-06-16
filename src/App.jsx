import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

import "./blocks/header.css";
import "./blocks/main.css";
import "./blocks/search-form.css";
import "./blocks/about.css";
import "./blocks/footer.css";

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
