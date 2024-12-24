import { useState } from "react";
import "./PortfolioPage.css";
import p1 from "../../../assets/images/p1.jpg";
import p2 from "../../../assets/images/p2.jpg";
import p3 from "../../../assets/images/p3.jpg";
import p4 from "../../../assets/images/p4.jpg";
import { useTranslation } from "react-i18next";

function PortfolioPage() {
  const { t } = useTranslation();
  // الحالة الافتراضية للفلتر هي "الكل"
  const [activeFilter, setActiveFilter] = useState("الكل");

  const projects = [
    {
      title: t('P-Card-Title1'),
      category: "تطبيقات الهاتف",
      img: p1,
      link: "",
    },
    {
      title: t('P-Card-Title2'),
      category: "تطبيقات الهاتف",
      img: p2,
      link: "",
    },
    {
      title: t('P-Card-Title3'),
      category: "برمجة",
      img: p3,
      link: "",
    },
    {
      title: t('P-Card-Title4'),
      category: "برمجة",
      img: p4,
      link: "",
    },
    // أضف بقية المشاريع هنا...
  ];

  const filters = ["الكل", "تطبيقات الهاتف", "برمجة", "تسويق", "يعلن"];

  // تحديث الفلتر النشط
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  // فلترة المشاريع بناءً على الفلتر النشط
  const filteredProjects =
    activeFilter === "الكل"
      ? projects // إذا كان "الكل" نشطًا، اعرض كل المشاريع
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="portfolio-page">
      {/* عنوان الصفحة */}
      <div className="breadcrumb-area">
        <h1 className="breadcrumb-title">نماذج اعمالنا</h1>
        <ul className="page-list">
          <li className="item-home">
            <a className="bread-link" href="/" title="Home">
              الرئيسية
            </a>
          </li>
          <li className="separator separator-home"></li>
          <li className="item-current">نماذج اعمالنا</li>
        </ul>
      </div>

      {/* قسم الفلاتر */}
      <div className="portfolio-section-filters">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="filters">
                <h4>ترتيب حسب</h4>
                {filters.map((filter, index) => (
                  <div
                    key={index}
                    className={`filter ${activeFilter === filter ? "active" : ""}`}
                    onClick={() => handleFilterChange(filter)}
                  >
                    <span>{filter}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* قسم المشاريع */}
            <div className="col-md-9">
              <div className="projects projects-page row">
                {filteredProjects.map((project, index) => (
                  <div className="project col-md-6" key={index}>
                    <div className="project-inner">
                      <div className="project-thumbnail">
                        <a href={project.link} title={project.title}>
                          <img
                            width="400"
                            height="250"
                            src={project.img}
                            className="img-fluid"
                            alt={project.title}
                          />
                        </a>
                      </div>
                      <h4 className="entry-details-title">
                        <a href={project.link}>{project.title}</a>
                      </h4>
                      <h5 className="project-category">{project.category}</h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioPage;
