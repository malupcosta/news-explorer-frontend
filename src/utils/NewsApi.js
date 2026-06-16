const NEWS_API_BASE_URL = "https://newsapi.org/v2/everything";
const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const PAGE_SIZE = 100;

function getCurrentDate() {
  return new Date().toISOString().slice(0, 10);
}

function getDateSevenDaysAgo() {
  const date = new Date();
  date.setDate(date.getDate() - 7);
  return date.toISOString().slice(0, 10);
}

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(new Error(`Erro: ${res.status}`));
}

export function searchNews(keyword) {
  const params = new URLSearchParams({
    q: keyword,
    apiKey: NEWS_API_KEY,
    from: getDateSevenDaysAgo(),
    to: getCurrentDate(),
    pageSize: PAGE_SIZE,
    language: "pt",
  });

  return fetch(`${NEWS_API_BASE_URL}?${params.toString()}`).then(checkResponse);
}
