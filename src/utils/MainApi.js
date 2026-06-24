const MAIN_API_BASE_URL = "https://news-explorer-backend-qkf8.onrender.com/api";

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }

  return res
    .json()
    .catch(() => ({ message: `Erro: ${res.status}` }))
    .then((err) => {
      const error = new Error(err.message || `Erro: ${res.status}`);
      error.status = res.status;
      return Promise.reject(error);
    });
}

function getToken() {
  return localStorage.getItem("jwt");
}

export function register({ email, password, name }) {
  return fetch(`${MAIN_API_BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, name }),
  }).then(checkResponse);
}

export function login({ email, password }) {
  return fetch(`${MAIN_API_BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(checkResponse);
}

export function getCurrentUser() {
  return fetch(`${MAIN_API_BASE_URL}/users/me`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  }).then(checkResponse);
}

export function getSavedArticles() {
  return fetch(`${MAIN_API_BASE_URL}/articles`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  }).then(checkResponse);
}

export function saveArticle(article, keyword) {
  return fetch(`${MAIN_API_BASE_URL}/articles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify({
      keyword,
      title: article.title,
      text: article.description,
      date: article.publishedAt,
      source: article.source.name,
      link: article.url,
      image: article.urlToImage,
    }),
  }).then(checkResponse);
}

export function deleteArticle(articleId) {
  return fetch(`${MAIN_API_BASE_URL}/articles/${articleId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  }).then(checkResponse);
}
