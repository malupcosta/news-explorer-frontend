import "./SavedNewsHeader.css";

function SavedNewsHeader() {
  return (
    <section className="saved-news-header">
      <p className="saved-news-header__label">Artigos salvos</p>

      <h1 className="saved-news-header__title">
        Maria, você tem 3 artigos salvos
      </h1>

      <p className="saved-news-header__keywords">
        Por palavras-chave:{" "}
        <span className="saved-news-header__keyword">Natureza</span>,{" "}
        <span className="saved-news-header__keyword">Tecnologia</span> e{" "}
        <span className="saved-news-header__keyword">1 outra</span>
      </p>
    </section>
  );
}

export default SavedNewsHeader;
