import { FaFacebookF, FaInstagram, FaBehance } from "react-icons/fa";
import { Link } from "react-router-dom"; // Link من react-router-dom
import "./Footer.css";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer-section">
      <div className="footer-wrapper">
        <div className="row align-items-end">
          <div className="col-lg-6">
            <div className="footer-left">
              <div className="inner">
                <span>{t('Footer-Title')}</span>
                <h4>{t('Footer-Subtitle')}</h4>
                <Link className="btn btn-style2" to="/contact">
                  <span>{t('Btn-Contact-Hero')}</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="footer-right">
              <div className="row">
                {/* روابط سريعة */}
                <div className="col-lg-6 col-sm-6 col-12">
                  <div className="footer-widget">
                    <h4 className="title">{t('Quick-Links')}</h4>
                    <span className="venor-animate-border"></span>
                    <ul className="menu">
                      <li className="menu-item-footer">
                        <Link to="/terms">{t('Terms-Link')}</Link>
                      </li>
                      <li className="menu-item-footer">
                        <Link to="/privacy-policy">{t('Privacy-Link')}</Link>
                      </li>
                      <li className="menu-item-footer">
                        <Link to="/return-refund-policy">{t('Return-Link')}</Link>
                      </li>
                      <li className="menu-item-footer">
                        <Link to="/contact">{t('Contact-Info')}</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* تواصل معنا */}
                <div className="col-lg-6 col-sm-6 col-12">
                  <div className="footer-widget">
                    <h4 className="title">{t('Footer-Contact-links')}</h4>
                    <span className="venor-animate-border"></span>
                    <ul className="ft-link">
                      <li>
                        <a href="mailto:support@brmja.tech">support@brmja.tech</a>
                      </li>
                      <li>
                        <a href="mailto:ahmed@brmja.tech">ahmed@brmja.tech</a>
                      </li>
                      <li>
                        <a href="mailto:ceo@brmja.tech">ceo@brmja.tech</a>
                      </li>
                    </ul>
                    <div className="social-share-inner">
                      <ul className="social-share">
                        <li>
                          <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaFacebookF />
                            <strong>Facebook</strong>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaInstagram />
                            <strong>Instagram</strong>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaBehance />
                            <strong>Behance</strong>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* حقوق الطبع والنشر */}
                <div className="col-lg-12">
                  <div className="copyright-text text-center">
                    <p>{t('CopyRight')}</p>
                    <p>
                      <img
                        src="https://f.nooncdn.com/s/app/com/noon/images/visa-color.svg"
                        alt="Visa"
                      />
                      <img
                        src="https://f.nooncdn.com/s/app/com/noon/images/mastercard-color.svg"
                        alt="MasterCard"
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
