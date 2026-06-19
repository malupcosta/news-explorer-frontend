import { useState } from "react";

import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCardList from "../NewsCardList/NewsCardList";

import placeholderImage from "../../assets/hero.png";
import "./SavedNews.css";

const SAVED_ARTICLES = [
  {
    url: "https://example.com/saved-article-1",
    urlToImage: placeholderImage,
    publishedAt: "2026-06-16",
    title: "Todo mundo precisa de um lugar especial para sentar na natureza",
    description:
      "Desde que li um influente livro sobre natureza, a ideia de ter um lugar especial me pegou de jeito.",
    source: {
      name: "Treehugger",
    },
  },
  {
    url: "https://example.com/saved-article-2",
    urlToImage: placeholderImage,
    publishedAt: "2026-06-15",
    title: "A natureza faz de você uma pessoa melhor",
    description:
      "Todos nós sabemos como a natureza nos faz bem e como ela pode transformar nossa rotina.",
    source: {
      name: "National Geographic",
    },
  },
  {
    url: "https://example.com/saved-article-3",
    urlToImage: placeholderImage,
    publishedAt: "2026-06-14",
    title: "Grand Teton renova a histórica Crest Trail",
    description:
      "A ligação entre trilhas históricas e turismo sustentável ganha novos capítulos.",
    source: {
      name: "National Parks Traveler",
    },
  },
];

function SavedNews() {
  const [visibleCards, setVisibleCards] = useState(3);

  function handleShowMore() {
    setVisibleCards((currentValue) => currentValue + 3);
  }

  return (
    <main className="saved-news">
      <SavedNewsHeader />

      <NewsCardList
        articles={SAVED_ARTICLES}
        visibleCards={visibleCards}
        onShowMore={handleShowMore}
        title="Artigos salvos"
      />
    </main>
  );
}

export default SavedNews;
