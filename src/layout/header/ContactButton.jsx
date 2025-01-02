import { Link } from "react-router-dom";

function ContactButton({ t }) {
  return (
    <div className="header__action header__action--signin">
      <Link
        className="header__action-btn header__action-btn--start-project"
        to="/contact"
      >
        <span>{t("Btn-Contact-Head")}</span>
      </Link>
    </div>
  );
}

export default ContactButton;
