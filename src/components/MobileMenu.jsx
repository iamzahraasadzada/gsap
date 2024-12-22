import { useEffect } from "react";
import styles from "./MobileMenu.module.css";
import { Link } from "react-scroll";

function MobileMenu({ setHasOpened }) {
  function toggleMenu() {
    setHasOpened((hasOpened) => !hasOpened);
  }

  return (
    <>
      <div className={styles.mobileMenu}>
        <div className={styles.navbar}>
          <Link
            to="about"
            offset={-50}
            spy
            smooth
            activeClass={styles.nav_active}
            className={styles.nav_link}
            onClick={toggleMenu}
          >
            About us
          </Link>
          <Link
            to="products"
            offset={5}
            spy
            smooth
            activeClass={styles.nav_active}
            className={styles.nav_link}
            onClick={toggleMenu}
          >
            Products
          </Link>
          <div className={styles.contact_btn}>contact us</div>
        </div>
      </div>
    </>
  );
}

export default MobileMenu;
