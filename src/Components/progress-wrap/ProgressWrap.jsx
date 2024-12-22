import { useState, useEffect } from "react";
import "./ProgressWrap.css";

function ProgressWrap() {
  const [progress, setProgress] = useState(0); // حالة نسبة التقدم
  const [isVisible, setIsVisible] = useState(false);

  // التحكم في تقدم الدائرة عند التمرير
  const handleScroll = () => {
    const scrollY = window.scrollY; // المسافة المقطوعة
    const documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight; // الطول الكلي للصفحة
    const progressPercentage = (scrollY / documentHeight) * 100; // نسبة التمرير

    setProgress(progressPercentage);

    // التحكم في ظهور العنصر
    const threshold = 300; // المسافة التي عندها يظهر العنصر
    setIsVisible(scrollY > threshold);
  };

  // الانتقال لأعلى الصفحة
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // تمرير سلس
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll); // إضافة مستمع عند التمرير
    return () => {
      window.removeEventListener("scroll", handleScroll); // إزالة المستمع عند إلغاء التحميل
    };
  }, []);

  return (
    <div
      className={`progress-wrap ${isVisible ? "visible" : "hidden"}`}
      onClick={scrollToTop} // عند النقر يتم التمرير لأعلى الصفحة
    >
      <svg
        className="progress-circle svg-content"
        width="100%"
        height="100%"
        viewBox="-1 -1 102 102"
      >
        <path
          className="progress-path"
          d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
          style={{
            strokeDasharray: "310", // الطول الكامل
            strokeDashoffset: `${310 - (310 * progress) / 100}`, // يتم تحديثه بناءً على نسبة التمرير
          }}
        />
      </svg>
    </div>
  );
}

export default ProgressWrap;
