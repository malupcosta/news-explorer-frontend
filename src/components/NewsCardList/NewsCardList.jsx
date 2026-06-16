import NewsCard from "../NewsCard/NewsCard";
import placeholderImage from "../../assets/hero.png";

const ARTICLES = [
  {
    url: "https://example.com/article-1",
    urlToImage: placeholderImage,
    publishedAt: "2026-06-16",
    date: "16 de junho de 2026",
    title: "Parques nacionais guardam histórias incríveis",
    description:
      "Pesquisadores mostram como áreas naturais ajudam a preservar espécies e proteger o clima.",
    source: {
      name: "Natureza Hoje",
    },
  },
  {
    url: "https://example.com/article-2",
    urlToImage: placeholderImage,
    publishedAt: "2026-06-15",
    date: "15 de junho de 2026",
    title: "Tecnologia transforma a forma de consumir notícias",
    description:
      "Novas ferramentas digitais facilitam o acesso à informação em diferentes partes do mundo.",
    source: {
      name: "Tech Daily",
    },
  },
  {
    url: "https://example.com/article-3",
    urlToImage: placeholderImage,
    publishedAt: "2026-06-14",
    date: "14 de junho de 2026",
    title: "Cidades investem em soluções sustentáveis",
    description:
      "Projetos urbanos priorizam mobilidade, economia de energia e melhor qualidade de vida.",
    source: {
      name: "Mundo Atual",
    },
  },
];

function NewsCardList() {
  return (
    <section className="news-card-list" aria-labelledby="news-card-list-title">
      <div className="news-card-list__container">
        <h2 className="news-card-list__title" id="news-card-list-title">
          Resultado da busca
        </h2>

        <ul className="news-card-list__items">
          {ARTICLES.map((article) => (
            <li className="news-card-list__item" key={article.url}>
              <NewsCard article={article} />
            </li>
          ))}
        </ul>

        <button className="news-card-list__button" type="button">
          Mostrar mais
        </button>
      </div>
    </section>
  );
}

export default NewsCardList;
