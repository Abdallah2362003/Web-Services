import { FaSearch } from "react-icons/fa";
import "./Header.css";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import ContactButton from "./ContactButton";
import LanguageSwitcher from "./LanguageSwitcher";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import SearchBar from "./SearchBar";

function Header() {
  const [language, setLanguage] = useState("عربى");
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const currentLang = i18n.language;
    document.documentElement.lang = currentLang;
    document.body.setAttribute("dir", currentLang === "ar" ? "rtl" : "ltr");
    document.body.classList.toggle("rtl", currentLang === "ar");
  }, [i18n.language]);

  const updateFont = (language) => {
    const fontLink = document.getElementById("font-link");
    const fontHref =
      language === "ar"
        ? "https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&display=swap"
        : "https://fonts.googleapis.com/css2?family=Inter:wght@400;500&amp;display=swap";

    if (fontLink) fontLink.href = fontHref;
    document.body.style.fontFamily =
      language === "ar" ? "'Cairo', sans-serif" : "'Inter', sans-serif";
  };

  const toggleState = (setter) => setter((prev) => !prev);

  const selectLanguage = (selectedLang) => {
    setLanguage(selectedLang);
    setLanguageMenuOpen(false);
    const langCode = selectedLang === "عربى" ? "ar" : "en";
    i18n.changeLanguage(langCode);
    updateFont(selectedLang);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`header ${isScrolled ? "common-front sticky" : "common-front"} ${
        document.body.classList.contains("rtl") ? "rtl" : ""
      }`}
    >
      <div
        className={`header__content__venor ${
          isScrolled ? "animated fadeInDown" : ""
        }`}
      >
        <Logo />

        <div className="header__search-icon header__action header__action--search">
          <button
            className="header__action-btn"
            type="button"
            onClick={() => toggleState(setSearchActive)}
          >
            <FaSearch />
          </button>
        </div>

        <SearchBar
          searchActive={searchActive}
          toggleSearch={() => toggleState(setSearchActive)}
          t={t}
        />

        <NavMenu menuOpen={menuOpen} t={t} />

        <div className="header__actions__venor">
          <LanguageSwitcher
            language={language}
            languageMenuOpen={languageMenuOpen}
            toggleLanguage={() => toggleState(setLanguageMenuOpen)}
            selectLanguage={selectLanguage}
          />
          <ContactButton t={t} />
        </div>

        <button
          className={`header__btn__venor ${menuOpen ? "header__btn--active" : ""}`}
          onClick={() => toggleState(setMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Header;
