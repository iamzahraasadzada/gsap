import styles from "./Hero.module.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Element } from "react-scroll";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const videoRef = useRef();
  const containerRef = useRef();

  useEffect(() => {
    if (!videoRef.current && !containerRef.current) return;

    const video = videoRef.current;

    const playPauseVideo = () => {
      video.play();
      video.pause();
    };

    video.addEventListener("loadedmetadata", () => {
      gsap.fromTo(
        video,
        { currentTime: 0 },
        {
          currentTime: video.duration || 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <Element name="hero">
      <div className={styles.hero}>
        <div ref={containerRef} className={styles.video_container}>
          <video
            ref={videoRef}
            src="video.mp4"
            playsInline
            muted
            preload="auto"
            loading="lazy"
          ></video>
          <div className={styles.hero_text}>
            <span>organic</span>
            <p>The prefect watermelon juice</p>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Hero;
