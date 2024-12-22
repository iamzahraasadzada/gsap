import { useEffect, useRef } from "react";
import styles from "./Products.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Marquee from "react-fast-marquee";
import { Element } from "react-scroll";

gsap.registerPlugin(ScrollTrigger);

function Products() {
  const productRef = useRef([]);
  const textRef = useRef();
  const titleRef = useRef();

  useEffect(() => {
    const textElement = titleRef.current;

    const text = textElement.innerText;
    const words = text.split(" ");
    textElement.innerHTML = words
      .map((word) => `<span>${word}</span>`)
      .join(" ");

    const wordElements = textElement.querySelectorAll("span");

    gsap.fromTo(
      wordElements,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: textElement,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        },
      }
    );
  }, []);

  useEffect(() => {
    const textElement = textRef.current;

    const text = textElement.innerText;
    const words = text.split(" ");
    textElement.innerHTML = words
      .map((word) => `<span>${word}</span>`)
      .join(" ");

    const wordElements = textElement.querySelectorAll("span");

    gsap.fromTo(
      wordElements,
      { opacity: 0, filter: "blur(10px)", y: 20 },
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: textElement,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        },
      }
    );
  }, []);

  useEffect(() => {
    productRef.current.forEach((el, index) => {
      const startTransform =
        index % 2 === 0
          ? "translate(-313.571px, -39.1964px) rotate(-11.7589deg)"
          : "translate(313.571px, -39.1964px) rotate(11.7589deg)";

      gsap.fromTo(
        el,
        {
          transform: startTransform,
          filter: "brightness(88%) contrast(90%) saturate(90%)",
        },
        {
          transform: "translate(0px, 0px) rotate(0deg)",
          duration: 1.5,
          filter: "brightness(100%) contrast(100%) saturate(100%)",
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "top 20%",
            scrub: 0.5,
          },
        }
      );
    });
  }, []);

  return (
    <Element name="products">
      <div className={styles.products}>
        <div className={styles.container}>
          <div className={styles.products_header}>
            <p className={styles.title} ref={titleRef}>
              Lorem, ipsum dolor!
            </p>
            <p className={styles.description} ref={textRef}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              similique quos illo autem deleniti voluptate iusto nemo quod
              accusamus repellat.
            </p>
          </div>
          <div className={styles.grid}>
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className={styles.product_cont}
                ref={(el) => (productRef.current[index] = el)}
              >
                <img
                  src={`product${index + 1}.jpg`}
                  alt={`product ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.products_footer}>
          <Marquee>
            Love us &#10084; Love us &#10084; Love us &#10084; Love us &#10084;
            Love us &#10084; Love us &#10084; Love us &#10084; Love us &#10084;
            Love us &#10084;&nbsp;
          </Marquee>
        </div>
      </div>
    </Element>
  );
}

export default Products;
