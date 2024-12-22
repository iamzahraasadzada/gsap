import { FaCheck } from "react-icons/fa";
import styles from "./AboutGallery.module.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function AboutGallery() {
  const galleryRef = useRef(null);

  useEffect(() => {
    if (!galleryRef.current) return;
    const boxes = galleryRef.current.querySelectorAll(`.${styles.box}`);

    gsap.fromTo(
      boxes,
      {
        filter: "blur(5px)",
      },
      {
        filter: "blur(0px)",
        duration: 1,
        scrollTrigger: {
          trigger: galleryRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div ref={galleryRef} className={styles.grid_gallery}>
      <div className={`${styles.box} ${styles.g1}`}>
        <img src="about1.jpg" alt="watermelons" />
      </div>
      <div className={`${styles.box} ${styles.g05}`}>
        <div className={styles.flex}>
          <p className={styles.tittle}>
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
          <div className={styles.line} />
          <p className={styles.p}>
            <FaCheck />
            <span>Lorem ipsum dolor sit.</span>
          </p>
          <p className={styles.p}>
            <FaCheck />
            <span>Lorem ipsum dolor sit amet.</span>
          </p>
          <p className={styles.p}>
            <FaCheck />
            <span>Lorem ipsum dolor sit amet consectetur.</span>
          </p>
          <p className={styles.p}>
            <FaCheck />
            <span>Lorem, ipsum dolor.</span>
          </p>
        </div>
      </div>
      <div className={`${styles.box} ${styles.g15}`}>
        <img src="about2.jpg" alt="watermelon" />
      </div>
      <div className={`${styles.box} ${styles.four_grid_cells}`}>
        <img src="about3.jpg" alt="watermelon" />
      </div>
      <div className={`${styles.box} ${styles.two_grid_cells}`}>
        <img src="about4.jpg" alt="watermelon" />
      </div>
      <div className={`${styles.box} ${styles.two_grid_cells}`}>
        <img src="about5.jpg" alt="watermelon" />
      </div>
    </div>
  );
}

export default AboutGallery;
