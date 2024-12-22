import Slider from "react-slick"; // مكتبة السلايدر
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css"; // ملف التنسيقات
import { useTranslation } from "react-i18next";

function Testimonial() {
  const { t } = useTranslation();
  const testimonials = [
    {
      title: t("Testimonials-Subtitle1"),
      text: t("Testimonials-Card1"),
      name: "John Mike",
      role: t("Testimonials-Text"),
    },
    {
      title: t("Testimonials-Subtitle2"),
      text: t("Testimonials-Card2"),
      name: "Michael Doe",
      role: t("Testimonials-Text"),
    },
    {
      title: t("Testimonials-Subtitle3"),
      text: t("Testimonials-Card3"),
      name: "Felix Doe",
      role: t("Testimonials-Text"),
    },
    {
      title: t("Testimonials-Subtitle4"),
      text: t("Testimonials-Card4"),
      name: "Lucian Ionut",
      role: t("Testimonials-Text"),
    },
  ];

  const settings = {
    dots: false, // إخفاء النقاط السفلية
    infinite: true, // التكرار اللانهائي
    speed: 500, // سرعة الانتقال
    slidesToShow: 1, // عرض شريحة واحدة فقط
    slidesToScroll: 1, // التمرير بشريحة واحدة
    autoplay: true, // التشغيل التلقائي
    autoplaySpeed: 3000, // سرعة التشغيل التلقائي
    arrows: false, // إخفاء أزرار التنقل
    draggable: true, // تمكين السحب
    swipe: true, // السماح بالسحب للتغيير
    pauseOnHover: false, // استمرارية السلايدر عند التوقف بالماوس
  };

  return (
    <div className="testimonial-section">
      <div className="container">
        <Slider {...settings} className="testimonial-section-slider">
          {testimonials.map((testimonial, index) => (
            <blockquote className="testimonial-slide" key={index}>
              <div className="section_title">{t("Testimonials-Title")}</div>
              <span className="testimonial_slider_title">{testimonial.title}</span>
              <div className="testimonial-area">
                <div className="testimonial-layoutArea">
                  <p>{testimonial.text}</p>
                </div>
              </div>
              <div className="testimonials_slider_name">
                {testimonial.name}
                <span> - {testimonial.role}</span>
              </div>
            </blockquote>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Testimonial;
