import { useInView } from "react-intersection-observer"; // مكتبة Intersection Observer
import CountUp from "react-countup";
import "./funFacts.css"; // ملف التنسيقات
import { useTranslation } from "react-i18next";

function FunFacts() {
  const { t } = useTranslation();
  const facts = [
    { number: 425, title: t("Fun-Facts-Card2") },
    { number: 12, title: t("Fun-Facts-Card4") },
    { number: 1320, title: t("Fun-Facts-Card1") },
    { number: 860, title:   t("Fun-Facts-Card3") },
  ];

  const [ref, inView] = useInView({
    triggerOnce: false, // لتفعيل العد مرة واحدة فقط
    threshold: 0.3, // يبدأ العد عندما يكون 30% من العنصر ظاهرًا
  });

  return (
    <div className="fun-facts-section" id="fun-facts">
      <div className="container">
        <h3 className="fun-facts-heading1">{t('Fun-Facts-Title')}</h3>
        <p>
          {t('Fun-Facts-Subtitle')}
        </p>
        <div className="row fun-facts-timer" ref={ref}>
          {facts.map((fact, index) => (
            <div className="col-md-3" key={index}>
              <div className="radial">
                <span className="timer">
                  {inView ? (
                    <CountUp
                      start={0}
                      end={fact.number}
                      duration={4} // مدة العد
                    />
                  ) : (
                    0
                  )}
                </span>
                <h4>{fact.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FunFacts;
