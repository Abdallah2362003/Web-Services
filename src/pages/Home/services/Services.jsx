import Slider from "react-slick";
import { FaCrown, FaGoogle, FaMobile, FaAd } from "react-icons/fa";
import crown from "../../../assets/images/1.jpg";
import google from "../../../assets/images/2.jpg";
import mobile from "../../../assets/images/3.jpg";
import ad from "../../../assets/images/4.jpg";
import loadingGif from "../../../assets/img/loading-blog.gif";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "lazysizes"; // استيراد مكتبة Lazy Sizes
import "lazysizes/plugins/parent-fit/ls.parent-fit"; // لتحسين العمل مع الحاويات
import "./Services.css";
import { useTranslation } from "react-i18next";


function Services() {
  const { t } = useTranslation();
  const services = [
    {
      icon: <FaCrown />,
      title: t('Slider-Cart-Title4'),
      description:
        t('Slider-Cart-Subtitle1'),
      img: crown,
      alt: t('Slider-Cart-Title4'), 
    },
    {
      icon: <FaGoogle />,
      title: t('Slider-Cart-Title1'),
      description:
        t('Slider-Cart-Subtitle2'),
      img: google,
      alt: t('Slider-Cart-Title1'),
    },
    {
      icon: <FaMobile />,
      title: t('Slider-Cart-Title2'),
      description:
        t('Slider-Cart-Subtitle3'),
      img: mobile,
      alt: t('Slider-Cart-Title2'),
    },
    {
      icon: <FaAd />,
      title: t('Slider-Cart-Title3'),
      description:
        t('Slider-Cart-Subtitle4'),
      img: ad,
      alt: t('Slider-Cart-Title3'),
    },
  ];

  const settings = {
    dots: false, // إظهار النقاط السفلية
    infinite: true, // التكرار اللانهائي للسلايدر
    speed: 500, // سرعة الانتقال
    slidesToShow: 3, // عدد العناصر المعروضة
    slidesToScroll: 1, // عدد العناصر المتحركة عند التمرير
    autoplay: true, // التشغيل التلقائي
    autoplaySpeed: 3000, // سرعة التشغيل التلقائي
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="services-section">
      <div className="container">
        <h3>{t('Slider-Title')}</h3>
        <div className="description-services">
          <p>
            {t('Slider-Subtitle')}
          </p>
        </div>
        <Slider {...settings}>
          {services.map((service, index) => (
            <div className="card-parent" key={index}>
              <div className="card featured to-top-left">
                <div className="heading-wrapper">
                  <h4 className="heading">
                    <i>{service.icon}</i> {service.title}
                  </h4>
                </div>
                <div className="paragraph-wrapper">
                  <p className="paragraph">{service.description}</p>
                </div>
                <div className="image-wrapper to-bottom">
                  <div className="gallery">
                    <img
                      width="400"
                      height="400"
                      className="lazyload img-fluid"
                      src={loadingGif} // الصورة الافتراضية (loading gif)
                      data-src={service.img} // الصورة النهائية التي يتم تحميلها
                      alt={service.alt}
                      onError={(e) => {
                        e.target.src = loadingGif; // إذا فشل تحميل الصورة النهائية، يتم عرض loading gif
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Services;
