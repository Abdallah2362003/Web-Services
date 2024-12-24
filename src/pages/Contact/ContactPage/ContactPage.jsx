import { Link } from "react-router-dom";
import "./ContactPage.css";

function ContactPage() {
  return (
    <div className="contact-page">
      {/* Breadcrumb Section */}
      <div className="breadcrumb-area">
        <h1 className="breadcrumb-title">اتصل بنا</h1>
        <ul className="page-list">
          <li className="item-home">
            <Link className="bread-link" to="/" title="Home">
              الرئيسية
            </Link>
          </li>
          <li className="separator separator-home"></li>
          <li className="item-current">اتصل بنا</li>
        </ul>
      </div>

      {/* Contact Details Section */}
      <div className="contant-section-page">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="contact-element-wrapper">
                <div className="contact-element">
                  <div className="icon">
                    <i className="fas fa-phone-volume"></i>
                  </div>
                  <div className="content">
                    <h3 className="title">اتصل بنا الأن</h3>
                    <p>
                      <a href="tel:+201065165640">01028571994</a>{" "}
                      <a href="tel:+201026542686">01010595705</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="contact-element-wrapper">
                <div className="contact-element">
                  <div className="icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="content">
                    <h3 className="title">البريد الالكتروني</h3>
                    <p>
                      <a href="mailto:">
                        sh.watny@brmja.tech
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="contact-element-wrapper">
                <div className="contact-element">
                  <div className="icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="content">
                    <h3 className="title">عنواننا</h3>
                    <p>
                      <a href="">
                        مصر, القاهرة, 120شارع الملك فيصل , امام بلبن
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map and Form Section */}
      <div className="iframe-contact">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3>اين نحن</h3>
              <iframe
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7039.78418523364!2d30.7569923!3d28.0888342!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145b2501ca8ed45f%3A0x1682970743a18080!2sMinya%2C%20Qism%20Minya%2C%20Minya%2C%20Menia%20Governorate!5e0!3m2!1sen!2seg!4v1623766233885!5m2!1sen!2seg"
                width="100%"
                height="450"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

            <div className="col-md-6">
              <h3>أرسل لنا رسالة</h3>
              <form method="POST" action="">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        name="name"
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder=" الاسم "
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        name="email"
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="البريد الإلكتروني"
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        name="phone"
                        type="text"
                        className="form-control"
                        id="phone"
                        placeholder="رقم الهاتف"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        name="budget"
                        type="text"
                        className="form-control"
                        id="budget"
                        placeholder="تكلفة المشروع"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <textarea
                    name="comment"
                    placeholder="الرسالة"
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="5"
                  ></textarea>
                </div>

                <div
                  data-sitekey="6LdEeSgbAAAAABYuFkYWnb9FXB-5hq7KmbKJCXOw"
                  className="g-recaptcha"
                ></div>

                <button type="submit" className="btn btn-style1">
                  إرسال
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
