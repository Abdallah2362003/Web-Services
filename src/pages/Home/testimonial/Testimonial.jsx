import Slider from "react-slick"; // مكتبة السلايدر
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css"; // ملف التنسيقات

function Testimonial() {
  const testimonials = [
    {
      title: "الفوز معًا",
      text: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.",
      name: "John Mike",
      role: "مبرمج",
    },
    {
      title: "وكالة عالية الجودة",
      text: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.",
      name: "Michael Doe",
      role: "مبرمج",
    },
    {
      title: "فريق فني",
      text: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.",
      name: "Felix Doe",
      role: "برامج النتيجة",
    },
    {
      title: "رائع بكل تأكيد",
      text: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.",
      name: "Lucian Ionut",
      role: "مبرمج",
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
              <div className="section_title">رأي العملاء</div>
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
