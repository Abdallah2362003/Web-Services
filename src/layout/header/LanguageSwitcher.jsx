import arabicFlag from "../../assets/images/1618065739arabic.svg";
import englishFlag from "../../assets/images/1618066305united-kingdom.svg";

function LanguageSwitcher({
  language,
  languageMenuOpen,
  toggleLanguage,
  selectLanguage,
}) {
  return (
    <div className={`header__lang ${languageMenuOpen ? "show" : ""}`}>
      <a
        className="header__lang-btn"
        href="#"
        onClick={(e) => {
          e.preventDefault();
          toggleLanguage();
        }}
        role="button"
      >
        <img
          width="16"
          height="16"
          src={language === "عربى" ? arabicFlag : englishFlag}
          alt="flag"
        />
        <span>{language}</span>
      </a>
      {languageMenuOpen && (
        <ul className="dropdown-menu header__lang-dropdown show">
          <li>
            <a href="#" onClick={() => selectLanguage("English")}>
              <img src={englishFlag} alt="English" />
              <span>English</span>
            </a>
          </li>
          <li>
            <a href="#" onClick={() => selectLanguage("عربى")}>
              <img src={arabicFlag} alt="Arabic" />
              <span>عربى</span>
            </a>
          </li>
        </ul>
      )}
    </div>
  );
}

export default LanguageSwitcher;
