import saveIcon from "../../images/icons/save-icon.svg";
import saveIconActive from "../../images/icons/save-icon-active.svg";

import "./NewsCard.css";

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function NewsCard({
  article,
  isSavedPage = false,
  isSaved = false,
  onSaveArticle,
  onDeleteArticle,
  onLoginClick,
  loggedIn,
}) {
  const image = article.urlToImage || article.image;
  const title = article.title;
  const description = article.description || article.text;
  const date = article.publishedAt || article.date;
  const source =
    typeof article.source === "string" ? article.source : article.source.name;
  const link = article.url || article.link;

  function handleSaveClick() {
    if (!loggedIn) {
      onLoginClick();
      return;
    }

    if (isSaved && article.savedArticleId) {
      onDeleteArticle(article.savedArticleId);
      return;
    }

    onSaveArticle(article);
  }

  function handleDeleteClick() {
    onDeleteArticle(article._id);
  }

  return (
    <article className="news-card">
      <div className="news-card__image-wrapper">
        <a href={link} target="_blank" rel="noreferrer">
          <img className="news-card__image" src={image} alt={title} />
        </a>

        {isSavedPage && (
          <span className="news-card__keyword">{article.keyword}</span>
        )}

        {isSavedPage ? (
          <button
            className="news-card__delete-button"
            type="button"
            aria-label="Excluir artigo"
            onClick={handleDeleteClick}
          >
            ×
          </button>
        ) : (
          <>
            <button
              className="news-card__save-button"
              type="button"
              aria-label="Salvar artigo"
              onClick={handleSaveClick}
            >
              <img
                className="news-card__save-icon"
                src={isSaved ? saveIconActive : saveIcon}
                alt=""
                aria-hidden="true"
              />
            </button>

            {!loggedIn && (
              <span className="news-card__tooltip">
                Faça o login para salvar os artigos.
              </span>
            )}
          </>
        )}
      </div>

      <div className="news-card__content">
        <time className="news-card__date" dateTime={date}>
          {formatDate(date)}
        </time>

        <a
          className="news-card__title-link"
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          <h3 className="news-card__title">{title}</h3>
        </a>

        <p className="news-card__description">{description}</p>

        <p className="news-card__source">{source}</p>
      </div>
    </article>
  );
}

export default NewsCard;
