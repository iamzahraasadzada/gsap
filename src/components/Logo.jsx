import styles from "./Logo.module.css";
import { Link } from "react-scroll";

function Logo() {
  return (
    <Link to="hero" offset={-250} spy smooth className={styles.logo}>
      <div className={styles.logo_img}>
        <img src="logo_white.png" alt="logo" />
      </div>
      <h1>watermelon</h1>
    </Link>
  );
}

export default Logo;
