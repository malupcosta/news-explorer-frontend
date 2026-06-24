import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCardList from "../NewsCardList/NewsCardList";

import "./SavedNews.css";

function SavedNews({ articles = [], onDeleteArticle }) {
  return (
    <main className="saved-news">
      <SavedNewsHeader articles={articles} />

      <NewsCardList
        articles={articles}
        visibleCards={articles.length}
        title="Artigos salvos"
        isSavedPage
        onDeleteArticle={onDeleteArticle}
      />
    </main>
  );
}

export default SavedNews;
