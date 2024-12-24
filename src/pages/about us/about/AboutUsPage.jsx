import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FaPlayCircle } from "react-icons/fa";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./AboutUsPage.css";
import aboutImage from "../../../assets/images/16223146321615649260about-3-page.jpg";
import loadingGIF from "../../../assets/img/loading-blog.gif";

function AboutUsPage() {
  return (
    <>
      {/* منطقة مسار الصفحة */}
      <div className="breadcrumb-area">
        <h1 className="breadcrumb-title">حول برمجة تك</h1>
        <ul className="page-list">
          <li className="item-home">
            <Link className="bread-link" to="/" title="Home">
              الرئيسية
            </Link>
          </li>
          <li className="separator separator-home"></li>
          <li className="item-current">حول برمجة تك</li>
        </ul>
      </div>

      {/* قسم من نحن */}
      <div className="about-us">
        <div className="container">
          <div className="row align-items-center">
            {/* العمود الأول - صورة وفيديو */}
            <div className="col-md-5">
              <div className="simpleParallax-video">
                <div className="simpleParallax">
                  <LazyLoadImage
                    width="500"
                    height="665"
                    src={aboutImage}
                    alt="about-image"
                    className="lazy thumparallax img-fluid"
                    effect="blur"
                    placeholderSrc={loadingGIF}
                  />
                </div>
                <a
                  className="popup-vimeo-video"
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                >
                    <FaPlayCircle />
                </a>
              </div>
            </div>

            {/* العمود الثاني - النص والمحتوى */}
            <div className="col-md-7">
              <h4 className="about-heading1-home">عن شركتنا</h4>
              <h3 className="about-heading2-home">مرحبًا بكم في برمجة تك.</h3>
              <p>
                سواء كنت بحاجة إلى شعار جديد أو موقع ويب أو مقطع فيديو أو حملة
                تسويقية أو كتاب إلكتروني تم إنشاؤه لعملك ، فإن مفتاح إنجاح
                المشروع يبدأ بامتلاك موجز إبداعي مدروس جيدًا. لا تتطلب مهارات
                البرمجة لإنشاء مواقع فريدة. قم بتخصيص موقعك في الوقت الفعلي
                وشاهد النتائج على الفور.
              </p>
              <p>
                سواء كنت بحاجة إلى شعار جديد أو موقع ويب أو مقطع فيديو أو حملة
                تسويقية أو كتاب إلكتروني تم إنشاؤه لعملك ، فإن مفتاح إنجاح
                المشروع يبدأ بامتلاك موجز إبداعي مدروس جيدًا. لا تتطلب مهارات
                البرمجة لإنشاء مواقع فريدة. قم بتخصيص موقعك في الوقت الفعلي
                وشاهد النتائج على الفور.
              </p>
              <Link to="/contact" className="btn btn-style1">
                <span>اتصل بنا</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUsPage;
