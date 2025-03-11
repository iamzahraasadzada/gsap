// import styles from "./Hero.module.css";
// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Element } from "react-scroll";

// gsap.registerPlugin(ScrollTrigger);

// function Hero() {
//   const videoRef = useRef();
//   const containerRef = useRef();

//   useEffect(() => {
//     if (!videoRef.current && !containerRef.current) return;

//     const video = videoRef.current;

//     const playPauseVideo = () => {
//       video.play();
//       video.pause();
//     };

//     video.addEventListener("loadedmetadata", () => {
//       gsap.fromTo(
//         video,
//         { currentTime: 0 },
//         {
//           currentTime: video.duration || 1,
//           ease: "none",
//           scrollTrigger: {
//             trigger: containerRef.current,
//             start: "top top",
//             end: "bottom bottom",
//             scrub: true,
//           },
//         }
//       );
//     });
//   }, []);

//   return (
//     <Element name="hero">
//       <div className={styles.hero}>
//         <div ref={containerRef} className={styles.video_container}>
//           <video
//             ref={videoRef}
//             src="video.mp4"
//             playsInline
//             muted
//             preload="auto"
//             loading="lazy"
//           ></video>
//           <div className={styles.hero_text}>
//             <span>organic</span>
//             <p>The prefect watermelon juice</p>
//           </div>
//         </div>
//       </div>
//     </Element>
//   );
// }

// export default Hero;

import styles from "./Hero.module.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Element } from "react-scroll";

gsap.registerPlugin(ScrollTrigger);

// Helper: Event yalnız bir dəfə işlənsin
function once(el, event, fn, opts) {
  const onceFn = function (e) {
    el.removeEventListener(event, onceFn);
    fn(e);
  };
  el.addEventListener(event, onceFn, opts);
  return onceFn;
}

function Hero() {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!videoRef.current || !containerRef.current) return;
    const video = videoRef.current;

    // iOS üçün: İlk toxunuş zamanı videonu aktivləşdir (play/pause)
    once(document.documentElement, "touchstart", () => {
      video.play();
      video.pause();
    });

    // Video metadata yükləndikdə, scroll-trigger animasiyasını başlat
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
