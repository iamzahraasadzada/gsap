import { Link } from "react-scroll";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link
        to="about"
        offset={-100}
        spy
        smooth
        activeClass={styles.nav_active}
        className={styles.nav_link}
      >
        About us
      </Link>
      <Link
        to="products"
        offset={-100}
        spy
        smooth
        activeClass={styles.nav_active}
        className={styles.nav_link}
      >
        Products
      </Link>
      <div className={styles.contact_btn}>contact us</div>
    </div>
  );
}

export default Navbar;
