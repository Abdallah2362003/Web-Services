import { Link } from "react-router-dom";
import techyLogo from "../../assets/1.png";

function Logo() {
  return (
    <div className="header__logo">
      <Link to="/" title="برمجة تك">
        <img
          width="105"
          height="22"
          className="img-fluid logo-front"
          src={techyLogo}
          alt="logo"
        />
      </Link>
    </div>
  );
}

export default Logo;
