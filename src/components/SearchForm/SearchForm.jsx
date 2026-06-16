function SearchForm() {
  return (
    <form className="search-form" name="search">
      <input
        className="search-form__input"
        type="text"
        name="keyword"
        placeholder="Inserir tema"
        required
      />

      <button className="search-form__button" type="submit">
        Procurar
      </button>
    </form>
  );
}

export default SearchForm;
