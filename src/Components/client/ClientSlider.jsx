import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "lazysizes"; // لدعم lazy loading
import "lazysizes/plugins/parent-fit/ls.parent-fit";
import "./ClientsSection.css"; // ملف CSS للتنسيق
import Laravel from "../../assets/images/16237073651200px-Logo.min.svg.png";
import NodeJs from "../../assets/images/16237073381280px-Node.js_logo_2015.svg.png";
import Wordpress from "../../assets/images/1623707398800px-WordPress_logo.svg.png";
import Opencart from "../../assets/images/16237074301024px-OpenCart_logo.svg.png";
import Magento from "../../assets/images/16237075431280px-Magento.svg.png";
import Angular from "../../assets/images/1623707505AngularJS_logo.svg.png";

function ClientsSection() {
  const clients = [
    {
      title: "Laravel",
      img: Laravel,
      link: "#",
    },
    {
      title: "Node Js",
      img: NodeJs,
      link: "#",
    },
    {
      title: "Wordpress",
      img: Wordpress,
      link: "#",
    },
    {
      title: "Opencart",
      img: Opencart,
      link: "#",
    },
    {
      title: "Magento",
      img: Magento,
      link: "#",
    },
    {
      title: "Angular",
      img: Angular,
      link: "#",
    },
  ];

  const settings = {
    dots: false, // إخفاء النقاط السفلية
    infinite: true, // تكرار لانهائي
    speed: 400, // سرعة الانتقال
    slidesToShow: 5, // عدد العناصر المعروضة في الشاشة
    slidesToScroll: 1,
    autoplay: true, // تشغيل تلقائي
    autoplaySpeed: 2000, // مدة عرض كل صورة
    pauseOnHover: true, // إيقاف العرض عند تمرير الماوس
    arrows: false, // إخفاء الأسهم
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="clients-section">
      <div className="container">
        <Slider {...settings}>
          {clients.map((client, index) => (
            <div className="clients-slide" key={index}>
              <a
                title={client.title}
                target="_blank"
                rel="noopener noreferrer"
                href={client.link}
              >
                <img
                  className="client_image lazyload"
                  data-src={client.img}
                  alt={client.title}
                />
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ClientsSection;
