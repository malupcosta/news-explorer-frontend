import { useContext } from "react";

import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./SavedNewsHeader.css";

function getKeywordText(articles) {
  const keywords = [...new Set(articles.map((article) => article.keyword))];

  if (keywords.length === 0) {
    return "Nenhuma palavra-chave ainda";
  }

  if (keywords.length === 1) {
    return keywords[0];
  }

  if (keywords.length === 2) {
    return `${keywords[0]} e ${keywords[1]}`;
  }

  return `${keywords[0]}, ${keywords[1]} e ${keywords.length - 2} outra${
    keywords.length - 2 > 1 ? "s" : ""
  }`;
}

function SavedNewsHeader({ articles = [] }) {
  const currentUser = useContext(CurrentUserContext);
  const articleCount = articles.length;
  const articleText = articleCount === 1 ? "artigo salvo" : "artigos salvos";

  return (
    <section className="saved-news-header">
      <p className="saved-news-header__label">Artigos salvos</p>

      <h1 className="saved-news-header__title">
        {currentUser?.name || "Usuário"}, você tem {articleCount} {articleText}
      </h1>

      <p className="saved-news-header__keywords">
        Por palavras-chave:{" "}
        <span className="saved-news-header__keyword">
          {getKeywordText(articles)}
        </span>
      </p>
    </section>
  );
}

export default SavedNewsHeader;
