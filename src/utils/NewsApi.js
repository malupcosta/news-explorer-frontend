const NEWS_API_BASE_URL = import.meta.env.PROD
  ? "https://nomoreparties.co/news/v2/everything"
  : "https://newsapi.org/v2/everything";

const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const PAGE_SIZE = 100;

function getCurrentDate() {
  return new Date().toISOString().split("T")[0];
}

function getPastDate() {
  const date = new Date();
  date.setDate(date.getDate() - 7);

  return date.toISOString().split("T")[0];
}

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(new Error(`Erro: ${res.status}`));
}

export function searchNews(keyword) {
  const url = new URL(NEWS_API_BASE_URL);

  url.searchParams.set("q", keyword);
  url.searchParams.set("apiKey", NEWS_API_KEY);
  url.searchParams.set("from", getPastDate());
  url.searchParams.set("to", getCurrentDate());
  url.searchParams.set("pageSize", PAGE_SIZE);
  url.searchParams.set("language", "pt");

  return fetch(url).then(checkResponse);
}
