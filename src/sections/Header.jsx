import { useEffect, useState } from "react";
import Logo from "../components/Logo";
import Navbar from "../components/NavBar";
import styles from "./Header.module.css";
import { IoMdMenu } from "react-icons/io";
import MobileMenu from "../components/MobileMenu";
import { IoClose } from "react-icons/io5";

function Header() {
  const [hasScrolled, setHasScrolled] = useState();
  const [hasOpened, setHasOpened] = useState(false);

  function handleClick() {
    setHasOpened((hasOpened) => !hasOpened);
  }

  useEffect(() => {
    function handleScroll() {
      setHasScrolled(window.scrollY > 600);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`${styles.header} ${hasScrolled && styles.scrolled}`}>
        <div className={styles.container}>
          <Logo />
          <Navbar />
          <div
            className={`${styles.mobile} ${hasScrolled && styles.scrolled_clr}`}
            onClick={() => {
              handleClick();
            }}
          >
            {hasOpened ? <IoClose /> : <IoMdMenu />}
          </div>
        </div>
      </div>
      {hasOpened && (
        <MobileMenu setHasOpened={setHasOpened} hasOpened={hasOpened} />
      )}
    </>
  );
}

export default Header;
