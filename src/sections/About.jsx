import { CiGlass } from "react-icons/ci";
import styles from "./About.module.css";
import { IoMdStar, IoMdStarHalf } from "react-icons/io";
import AboutGallery from "../components/AboutGallery";
import { Element } from "react-scroll";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const titleRef = useRef();
  const btnRef = useRef();
  const descRef = useRef();
  const rateRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      descRef.current,
      {
        x: +100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.7,
        scrollTrigger: {
          trigger: descRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: 0.3,
        },
      }
    );

    gsap.fromTo(
      rateRef.current,
      {
        x: +100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.7,
        scrollTrigger: {
          trigger: rateRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: 0.3,
        },
      }
    );

    gsap.fromTo(
      btnRef.current,
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.7,
        scrollTrigger: {
          trigger: btnRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: 0.3,
        },
      }
    );

    gsap.fromTo(
      titleRef.current,
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.7,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: 0.3,
        },
      }
    );
  }, []);

  return (
    <Element name="about">
      <div className={styles.about}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.left_side}>
              <div ref={btnRef} className={styles.btn_icon_label}>
                <span>best juice</span>
                <CiGlass />
              </div>
              <h1 ref={titleRef}>
                DRINK YOUR JUICE. IT'S LIKE LIQUID SUNSHINE FOR YOUR BODY
              </h1>
            </div>
            <div className={styles.right_side}>
              <div className={styles.row}>
                <p ref={descRef}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officiis odio et dolorem magni, placeat labore sunt cum
                  officia quis nihil. Lorem ipsum dolor sit amet.
                </p>
              </div>

              <div className={styles.row_2} ref={rateRef}>
                <div className={styles.rate}>
                  <div className={styles.stars}>
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStarHalf />
                  </div>
                </div>

                <div className={styles.row_3}>
                  <span>4.5/5</span>
                  <p>More than +12.000 customers</p>
                </div>
              </div>
            </div>
          </div>
          <AboutGallery />
        </div>
      </div>
    </Element>
  );
}

export default About;
