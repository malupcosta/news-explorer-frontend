import { useState } from "react";

import "./SearchForm.css";

function SearchForm({ onSearch }) {
  const [keyword, setKeyword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleKeywordChange(event) {
    setKeyword(event.target.value);

    if (event.target.value.trim()) {
      setErrorMessage("");
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedKeyword = keyword.trim();

    if (!trimmedKeyword) {
      setErrorMessage("Por favor, insira uma palavra-chave");
      return;
    }

    setErrorMessage("");
    onSearch(trimmedKeyword);
  }

  return (
    <form
      className="search-form"
      name="search"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="search-form__field">
        <input
          className="search-form__input"
          type="text"
          name="keyword"
          placeholder="Inserir tema"
          value={keyword}
          onChange={handleKeywordChange}
          required
        />

        <span className="search-form__error">{errorMessage}</span>
      </div>

      <button className="search-form__button" type="submit">
        Procurar
      </button>
    </form>
  );
}

export default SearchForm;
