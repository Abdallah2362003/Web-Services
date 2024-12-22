import "lazysizes"; // Lazy loading library
import Rocket from "../../../assets/images/rocket.jpg";
import laodingGIF from "../../../assets/img/loading-blog.gif";
import aboutS2 from "../../../assets/images/16220581871615636710about-s2.jpg";
import "./About.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";


function AboutUs() {
  const { t } = useTranslation();
  return (
    <div className="about-section">
      <div className="container">
        <div className="row">
          {/* Column for Images */}
          <div className="col-md-7">
            <div className="pictures-row">
              <div className="row">
                {/* Image 1 */}
                <div className="col-md-6">
                  <div className="item-about imgone big-paral">
                    <img
                      src={laodingGIF}
                      data-src={Rocket}
                      width="500"
                      height="666"
                      className="lazyload thumparallax-down img-fluid simpleParallax"
                      alt="Rocket image"
                    />
                    <div className="exp-about">
                      <h5 className="nmb-font-about">12</h5>
                      <h6 className="service_summary-about">{t('About-Expereince')}</h6>
                    </div>
                  </div>
                </div>
                {/* Image 2 */}
                <div className="col-md-6">
                  <div className="item-about imgtwo big-paral">
                    <img
                      src={laodingGIF}
                      data-src={aboutS2}
                      width="500"
                      height="820"
                      className="lazyload thumparallax img-fluid simpleParallax"
                      alt="About image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column for Text Content */}
          <div className="col-md-5 mt-5">
            <h4 className="about-heading1-home">{t('About-Title')}</h4>
            <h3 className="about-heading2-home">
              {t('About-Subtitle')}
            </h3>
            <p>
              {t('About-P')}
            </p>
            <Link to="/pricing" className="btn btn-style1">
              <span className="button-text">{t("About-Btn")}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
