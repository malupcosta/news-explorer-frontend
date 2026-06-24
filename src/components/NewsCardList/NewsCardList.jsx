import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";

function NewsCardList({
  articles,
  visibleCards,
  onShowMore,
  title = "Resultado da busca",
  isSavedPage = false,
  onSaveArticle,
  onDeleteArticle,
  savedArticles = [],
  loggedIn,
  onLoginClick,
}) {
  const visibleArticles = isSavedPage ? articles : articles.slice(0, visibleCards);
  const hasMoreCards = !isSavedPage && visibleCards < articles.length;

  function findSavedArticle(article) {
    return savedArticles.find((savedArticle) => savedArticle.link === article.url);
  }

  return (
    <section
      className="news-card-list news-card-list_visible"
      aria-labelledby="news-card-list-title"
    >
      <div className="news-card-list__container">
        <h2 className="news-card-list__title" id="news-card-list-title">
          {title}
        </h2>

        <ul className="news-card-list__items">
          {visibleArticles.map((article) => {
            const savedArticle = findSavedArticle(article);
            const preparedArticle = {
              ...article,
              savedArticleId: savedArticle?._id,
            };

            return (
              <li
                className="news-card-list__item"
                key={article.url || article.link || article._id}
              >
                <NewsCard
                  article={preparedArticle}
                  isSavedPage={isSavedPage}
                  isSaved={Boolean(savedArticle)}
                  onSaveArticle={onSaveArticle}
                  onDeleteArticle={onDeleteArticle}
                  loggedIn={loggedIn}
                  onLoginClick={onLoginClick}
                />
              </li>
            );
          })}
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
