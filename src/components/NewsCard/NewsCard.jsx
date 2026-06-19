import saveIcon from "../../images/icons/save-icon.svg";

import "./NewsCard.css";

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function NewsCard({ article }) {
  return (
    <article className="news-card">
      <div className="news-card__image-wrapper">
        <img
          className="news-card__image"
          src={article.urlToImage}
          alt={article.title}
        />

        <button
          className="news-card__save-button"
          type="button"
          aria-label="Salvar artigo"
        >
          <img
            className="news-card__save-icon"
            src={saveIcon}
            alt=""
            aria-hidden="true"
          />
        </button>

        <span className="news-card__tooltip">
          Faça o login para salvar os artigos.
        </span>
      </div>

      <div className="news-card__content">
        <time className="news-card__date" dateTime={article.publishedAt}>
          {formatDate(article.publishedAt)}
        </time>

        <h3 className="news-card__title">{article.title}</h3>

        <p className="news-card__description">{article.description}</p>

        <p className="news-card__source">{article.source.name}</p>
      </div>
    </article>
  );
}

export default NewsCard;
