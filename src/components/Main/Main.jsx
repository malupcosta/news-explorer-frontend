import SearchForm from "../SearchForm/SearchForm";
import "./Main.css";

function Main({ onSearch }) {
  return (
    <main className="main">
      <section className="main__hero">
        <div className="main__content">
          <h1 className="main__title">O que está acontecendo no mundo?</h1>

          <p className="main__subtitle">
            Encontre as últimas notícias sobre qualquer tema e salve elas em sua
            conta pessoal.
          </p>

          <SearchForm onSearch={onSearch} />
        </div>
      </section>
    </main>
  );
}

export default Main;
