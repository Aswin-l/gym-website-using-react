import { Link } from "react-router-dom";
import logoWhite from "../../images/logo/logo.png";
import logoBlack from "../../images/logo/logo-footer.png";
import Styles from "./Index.module.css"
function Logo({ size = "w-full", type = "white" }) {
  return (
    <Link to="/" className="focus inline-block">
      <img
        src={`${type === "black" ? logoBlack : logoWhite}`}
        alt="Corefit logo"
        className={Styles.FooterLogo}
      />
    </Link>
  );
}

export default Logo;
