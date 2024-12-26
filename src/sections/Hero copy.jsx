import styles from "./Hero.module.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Element } from "react-scroll";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const videoRef = useRef();
  const contRef = useRef();

  useEffect(() => {
    if (!videoRef.current && !contRef.current) return;

    ScrollTrigger.defaults({ lazy: false });

    const video = videoRef.current;

    const playPauseVideo = () => {
      video.play();
      video.pause();
    };

    document.documentElement.addEventListener("touchstart", playPauseVideo, {
      once: true,
    });

    video.addEventListener("loadedmetadata", () => {
      gsap.fromTo(
        video,
        { currentTime: 0 },
        {
          currentTime: video.duration || 1,
          duration: video.duration,
          ease: "none",
          scrollTrigger: {
            trigger: contRef.current,
            scrub: 1,
            pin: contRef.current,
            start: "top 100%",
            end: "bottom bottom",
            pinSpacing: false,
          },
        }
      );
    });
  }, []);

  return (
    <Element name="hero">
      <div className={styles.hero}>
        <div className={styles.video_container}>
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
          <div ref={contRef} className={styles.cover} />
        </div>
      </div>
    </Element>
  );
}

export default Hero;
