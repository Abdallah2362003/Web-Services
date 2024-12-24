import { useEffect, useRef, useState } from "react";
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";
import VanillaTilt from "vanilla-tilt";
import "./Portfolio.css"; 
import loadingGif from "../../../assets/img/loading-blog.gif";
import p1 from "../../../assets/images/p1.jpg";
import p2 from "../../../assets/images/p2.jpg";
import p3 from "../../../assets/images/p3.jpg";
import p4 from "../../../assets/images/p4.jpg";
import { useTranslation } from "react-i18next";


function Portfolio() {
  const { t } = useTranslation();
  const projects = [
    {
      title: t('P-Card-Title1'),
      category: t('P-Card-Inf1'),
      img: p1,
      alt: t('P-Card-Title1'),
    },
    {
      title: t('P-Card-Title2'),
      category: t('P-Card-Inf2'),
      img: p2,
      alt: t('P-Card-Title2'),
    },
    {
      title: t('P-Card-Title3'),
      category: t('P-Card-Inf3'),
      img: p3,
      alt: t('P-Card-Title3'),
    },
    {
      title: t('P-Card-Title4'),
      category: t('P-Card-Inf4'),
      img: p4,
      alt: t('P-Card-Title4'),
    },
  ];

  return (
    <div className="portfolio-section">
      <div className="container">
        <h4>{t('Portfolio-Title')}</h4>
        <h3>{t('Portfolio-Subtitle')}</h3>
        <div className="row">
          {projects.map((project, index) => (
            <TiltCard
              key={index}
              title={project.title}
              category={project.category}
              img={project.img}
              alt={project.alt}
              loadingGif={loadingGif}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function TiltCard({ title, category, img, alt, loadingGif }) {
  const tiltRef = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false); // حالة تحميل الصورة

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 25, // زاوية الإمالة
        speed: 400, // سرعة الحركة
        glare: true, // تمكين تأثير اللمعان
        "max-glare": 2, // نسبة اللمعان
      });
    }
  }, []);

  return (
    <div className="col-md-6">
      <a href="#" title={title}>
        <div ref={tiltRef} className="project-box-div">
          <div className="project-image-container">
            <div className="project-image-container-inner">
              <img
                className="project-image lazy"
                width="410"
                height="230"
                src={imageLoaded ? img : loadingGif} // عرض loading gif إذا لم يتم تحميل الصورة
                data-src={img}
                alt={alt}
                onLoad={() => setImageLoaded(true)} // تحديث الحالة عند اكتمال التحميل
                onError={() => setImageLoaded(false)} // في حالة حدوث خطأ، عرض loading gif
              />
            </div>
          </div>
          <div className="project-meta">
            <div className="project-meta-title">
              <span className="project__text">{title}</span>
            </div>
            <div className="divider"></div>
            <div className="project-category">
              <span className="block_text">{category}</span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Portfolio;
