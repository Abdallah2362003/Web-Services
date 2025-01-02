import { useState, useEffect } from "react";
import "./Slider.css";
import heroImg from "../../../assets/A3.gif";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

// مكون التأثير المخصص
function CustomTypewriter({ strings }) {
  const [displayText, setDisplayText] = useState(""); // النص المعروض
  const [index, setIndex] = useState(0); // مؤشر النصوص
  const [charIndex, setCharIndex] = useState(0); // مؤشر الحروف
  const [isSymbol, setIsSymbol] = useState(false); // حالة كتابة الرموز
  const symbols = ["*", "%", "$", "#", "@", "{", "}", "[", "]", "&", "!", "?"]; // الرموز العشوائية
  useEffect(() => {
    if (index < strings.length) {
      const currentString = strings[index];
      if (charIndex < currentString.length) {
        const timeout = setTimeout(() => {
          if (isSymbol) {
            // كتابة رمز عشوائي
            const randomSymbol =
              symbols[Math.floor(Math.random() * symbols.length)];
            setDisplayText((prev) => prev + randomSymbol);
            setIsSymbol(false);
          } else {
            // كتابة الحرف الصحيح واستبدال الرمز
            setDisplayText(
              (prev) => prev.slice(0, -1) + currentString[charIndex]
            );
            setCharIndex((prevCharIndex) => prevCharIndex + 1);
            setIsSymbol(true);
          }
        }, 50); // تقليل الزمن لجعل الحركة أسرع

        return () => clearTimeout(timeout);
      } else {
        // الانتقال إلى النص التالي بعد وقت معين
        const nextStringTimeout = setTimeout(() => {
          setDisplayText(""); // تفريغ النص
          setCharIndex(0); // إعادة مؤشر الحروف
          setIndex((prevIndex) => (prevIndex + 1) % strings.length); // الانتقال للنص التالي
        }, 1500); // وقت الانتظار بعد إكمال الجملة

        return () => clearTimeout(nextStringTimeout);
      }
    }
  }, [index, charIndex, isSymbol, strings]);

  return <span>{displayText}|</span>;
}

function Hero() {
  const { t } = useTranslation();

  return (
    <div className="slider-venor-section">
      <div className="slider-inner-venor">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5">
              <div className="slider-content">
                <h1>{t("Hero-Title")}</h1>
                <h2>
                  <CustomTypewriter
                    strings={[
                      t("Hero-Change-Subtitle1"),
                      t("Hero-Change-Subtitle2"),
                      t("Hero-Change-Subtitle3"),
                      t("Hero-Change-Subtitle4"),
                    ]}
                  />
                </h2>
                <div className="slider-body">
                  <p>{t("Hero-P")}</p>
                </div>
                <a href="#" className="btn btn-slider">
                  <span>{t("Btn-Contact-Hero")}</span>
                </a>
                <Link to="/portfolio" className="btn btn-slider2">
                  <span>{t("Hero-Portfolio-Btn")}</span>
                </Link>
              </div>
            </div>
            <div className="col-md-7">
              <div className="slider-image">
                <img
                  width="450"
                  height="450"
                  className="img-fluid slider-img"
                  src={heroImg}
                  alt="Slider"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
