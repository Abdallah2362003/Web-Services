import { Link } from "react-router-dom";
import { FaSearch, FaTimes } from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import arabicFlag from "../../assets/images/1618065739arabic.svg";
import englishFlag from "../../assets/images/1618066305united-kingdom.svg";
import "./Header.css";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

function Header() {
  // اللغة الافتراضية هي العربية
  const [language, setLanguage] = useState("عربى");
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, i18n } = useTranslation();

  // تعيين اللغة الافتراضية عند تحميل المكون
  useEffect(() => {
    const currentLang = i18n.language;
    document.documentElement.lang = currentLang;
    if (currentLang === "ar") {
      document.body.setAttribute("dir", "rtl");
      document.body.classList.add("rtl");
    } else {
      document.body.removeAttribute("dir");
      document.body.classList.remove("rtl");
    }
  }, [i18n.language]);

    // تحديث الرابط الخاص بالخطوط
    const updateFont = (language) => {
      const fontLink = document.getElementById("font-link"); // تحديث الرابط للخطوط
      const body = document.body; // الوصول إلى عنصر <body>
    
      if (fontLink) {
        if (language === "ar") {
          fontLink.href = "https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&display=swap";
          body.style.fontFamily = "'Cairo', sans-serif"; // تغيير الـ font-family للعربية
        } else {
          fontLink.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;500&amp;display=swap";
          body.style.fontFamily = "'Inter', sans-serif"; // تغيير الـ font-family للإنجليزية
        }
      }
    };
    

  // تبديل القائمة
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // تبديل البحث
  const toggleSearch = () => setSearchActive((prev) => !prev);

  // تبديل قائمة اللغة
  const toggleLanguage = () => setLanguageMenuOpen((prev) => !prev);

  // اختيار اللغة
  const selectLanguage = (selectedLang) => {
    setLanguage(selectedLang);
    setLanguageMenuOpen(false);
    i18n.changeLanguage(selectedLang === "عربى" ? "ar" : "en");
    updateFont(selectedLang);
  };

  // تتبع التمرير
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

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
        {/* الشعار */}
        <div className="header__logo">
          <Link to="/" title="برمجة تك">
            <img
              width="105"
              height="22"
              className="img-fluid logo-front"
              src={logo}
              alt="logo"
            />
          </Link>
        </div>

        {/* عنصر البحث */}
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

        {/* قائمة التنقل */}
        <div
          className={`header__menu__venor ${
            menuOpen ? "header__menu__venor--active" : ""
          }`}
        >
          <ul className="header__nav">
            <li className="header__nav-item">
              <Link className="header__nav-link" to="/">
              {t("Home")}
              </Link>
            </li>
            <li className="header__nav-item">
              <Link className="header__nav-link" to="/about-us">
                {t("About")}
              </Link>
            </li>
            <li className="header__nav-item">
              <Link className="header__nav-link" to="/portfolio">
                {t("Portfolio")}
              </Link>
            </li>
            <li className="header__nav-item">
              <Link className="header__nav-link" to="/pricing">
                {t("Pricing")}
              </Link>
            </li>
            <li className="header__nav-item">
              <Link className="header__nav-link" to="/contact">
                {t("Contact")}
              </Link>
            </li>
          </ul>
        </div>

        {/* الإجراءات */}
        <div className="header__actions__venor">
          {/* زر البحث */}
          <div className="header__action header__action--search">
            <button
              className="header__action-btn"
              type="button"
              onClick={toggleSearch}
            >
              <FaSearch />
            </button>
          </div>

          {/* قائمة اللغة */}
          <div
            className={`header__lang ${languageMenuOpen ? "show" : ""}`}
            style={{
              position: "relative",
            }}
          >
            <a
              className="header__lang-btn"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                toggleLanguage();
              }}
              role="button"
              id="dropdownLang"
              aria-haspopup="true"
              aria-expanded={languageMenuOpen ? "true" : "false"}
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
              <ul
                className="dropdown-menu header__lang-dropdown show"
                style={{
                  position: "absolute",
                  transform: "translate3d(0px, 36px, 0px)",
                  top: "5px",
                  left: "-15px",
                  willChange: "transform",
                  backgroundColor: "rgb(22, 21, 26)",
                  minWidth: "135%",
                  border: "1px solid #222227",
                  borderRadius: "20px",
                  padding: "20px",
                }}
              >
                <li>
                  <a
                    title="English"
                    href="#"
                    onClick={() => selectLanguage("English")}
                  >
                    <img
                      width="16"
                      height="16"
                      src={englishFlag}
                      alt="flag"
                    />
                    <span>English</span>
                  </a>
                </li>
                <li>
                  <a
                    title="عربى"
                    href="#"
                    onClick={() => selectLanguage("عربى")}
                  >
                    <img
                      width="16"
                      height="16"
                      src={arabicFlag}
                      alt="flag"
                    />
                    <span>عربى</span>
                  </a>
                </li>
              </ul>
            )}
          </div>

          {/* زر التواصل */}
          <div className="header__action header__action--signin">
            <Link
              className="header__action-btn header__action-btn--start-project"
              to="/contact"
            >
              <span>
                {t("Btn-Contact-Head")}
              </span>
            </Link>
          </div>
        </div>

        {/* زر القائمة */}
        <button
          className={`header__btn__venor ${
            menuOpen ? "header__btn--active" : ""
          }`}
          type="button"
          onClick={toggleMenu}
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
