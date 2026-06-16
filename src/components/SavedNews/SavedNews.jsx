import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCardList from "../NewsCardList/NewsCardList";

function SavedNews() {
  return (
    <main className="saved-news">
      <SavedNewsHeader />
      <NewsCardList />
    </main>
  );
}

export default SavedNews;
