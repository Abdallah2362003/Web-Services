import { useState, useEffect } from "react";
import "./style.css"
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// مكون الكتابة المخصص
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
            const randomSymbol =
              symbols[Math.floor(Math.random() * symbols.length)];
            setDisplayText((prev) => prev + randomSymbol);
            setIsSymbol(false);
          } else {
            setDisplayText((prev) =>
              prev.slice(0, -1) + currentString[charIndex]
            );
            setCharIndex((prevCharIndex) => prevCharIndex + 1);
            setIsSymbol(true);
          }
        }, 50);

        return () => clearTimeout(timeout);
      } else {
        const nextStringTimeout = setTimeout(() => {
          setDisplayText("");
          setCharIndex(0);
          setIndex((prevIndex) => (prevIndex + 1) % strings.length);
        }, 1500);

        return () => clearTimeout(nextStringTimeout);
      }
    }
  }, [index, charIndex, isSymbol, strings]);

  return <span>{displayText}</span>;
}

function TypedSec() {
  const { t } = useTranslation();
  return (
    <div className="typed-section">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h4 className="parent-typed-text">
              <span className="mt_typed-beforetext">
                {t("Switch-Word-Title")} {""}
              </span>
              <span className="mt_typed_text">
                <CustomTypewriter
                  strings={[
                    t("Switch-Word-Subtitle1"),
                    t("Switch-Word-Subtitle2"),
                    t("Switch-Word-Subtitle3"),
                    t("Switch-Word-Subtitle4"),
                  ]}
                />
                |
              </span>
            </h4>
          </div>
          <div className="col-md-4 text-right">
            <Link to="/contact" target="_self" className="btn btn-style1">
              <span>
                {t("Btn-Contact-Hero")} 
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TypedSec;
