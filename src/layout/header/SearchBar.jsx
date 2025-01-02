import { FaSearch, FaTimes } from "react-icons/fa";

function SearchBar({ searchActive, toggleSearch, t }) {
  return (
    <form
      className={`header__search__venor ${
        searchActive ? "header__search--active" : ""
      }`}
      method="GET"
    >
      <input
        id="search"
        type="text"
        name="term"
        placeholder={t("Search-Placeholder")}
        autoComplete="off"
      />
      <button type="submit">
        <FaSearch />
      </button>
      <button type="button" className="close" onClick={toggleSearch}>
        <FaTimes />
      </button>
    </form>
  );
}

export default SearchBar;
