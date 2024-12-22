import { FaPhoneAlt } from "react-icons/fa";
import Logo from "../components/Logo";
import styles from "./Footer.module.css";
import { IoMdMail } from "react-icons/io";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left_side}>
          <img src="footer.png" alt="melon" />
        </div>
        <div className={styles.right_side}>
          <div className={styles.box}>
            <Logo />
            <p className={styles.dark}>
              <FaPhoneAlt />
              <span>(123)-456-789</span>
            </p>
            <p className={styles.dark}>
              <IoMdMail />
              <span>watermelon@gmail.com</span>
            </p>
          </div>

          <div className={styles.box}>
            <p className={styles.title}>Company</p>
            <p className={styles.normal}>Careers</p>
            <p className={styles.normal}>Mobile</p>
            <p className={styles.normal}>Blog</p>
            <p className={styles.normal}>How we Work</p>
          </div>

          <div className={styles.box}>
            <p className={styles.title}>Working House</p>
            <p className={styles.normal}>Mon - Fri: 9:00AM - 9:00PM</p>
            <p className={styles.normal}>Sat: 9:00AM - 19:00PM</p>
            <p className={styles.normal}>Sun: Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
