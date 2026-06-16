import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({ articles, visibleCards, onShowMore }) {
  const visibleArticles = articles.slice(0, visibleCards);
  const hasMoreCards = visibleCards < articles.length;

  return (
    <section
      className="news-card-list news-card-list_visible"
      aria-labelledby="news-card-list-title"
    >
      <div className="news-card-list__container">
        <h2 className="news-card-list__title" id="news-card-list-title">
          Resultado da busca
        </h2>

        <ul className="news-card-list__items">
          {visibleArticles.map((article) => (
            <li className="news-card-list__item" key={article.url}>
              <NewsCard article={article} />
            </li>
          ))}
        </ul>

        {hasMoreCards && (
          <button
            className="news-card-list__button"
            type="button"
            onClick={onShowMore}
          >
            Mostrar mais
          </button>
        )}
      </div>
    </section>
  );
}

export default NewsCardList;
