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
        />

        <span className="news-card__tooltip">
          Faça o login para salvar os artigos.
        </span>
      </div>

      <div className="news-card__content">
        <time className="news-card__date" dateTime={article.publishedAt}>
          {article.date}
        </time>

        <h3 className="news-card__title">{article.title}</h3>

        <p className="news-card__description">{article.description}</p>

        <p className="news-card__source">{article.source.name}</p>
      </div>
    </article>
  );
}

export default NewsCard;
