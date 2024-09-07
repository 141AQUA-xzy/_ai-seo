"use client";
import Button from "@/components/Button";
import starBg from "@/assets/stars.png";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

export const Hero = () => {

  const section = useRef(null);
  const { scrollYProgress } = useScroll({
    target: section,
    offset: ["start end", "end start"],
  });

  // scroll position detector
  // useMotionValueEvent(scrollYProgress, "change", (value) => {
  //   console.log("scrollYProgress", value);
  // });

  const backgroundPositionY = useTransform(scrollYProgress, [0, 1], [600, -600]);

  return (
    <motion.section
      ref={section}
      className="h-[492px] md:h-[800px] flex items-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_3%,black_90%,transparent)]"
      style={{
        backgroundImage: `url(${starBg.src})`,backgroundPositionY
      }}
      animate={{
        backgroundPositionX: starBg.width,
      }}
      transition={{
        duration: 20,
        ease: "linear",
        repeat: Infinity,
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,0.5)_78%,transparent)]"></div>

      <div className="absolute md:h-96 md:w-96 border border-white/10 h-64 w-64 bg-purple-500 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-15px_50px_rgb(255,255,255,0.5),-20px_-20px_80px_rgb(255,255,255,0.1),0_0_50px_rgb(140,69,255)]"></div>

      <motion.div
        style={{
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          rotate: "1turn",
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute border opacity-20 h-[344px] w-[344px] md:h-[580px] md:w-[580px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="absolute border rounded-full top-1/2 left-0 bg-white h-2 w-2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute border rounded-full top-0 left-1/2 bg-white h-2 w-2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute border rounded-full border-white top-1/2 left-full h-5 w-5 -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center">
          <div className="rounded-full bg-white h-2 w-2 text-white border border-white/100"></div>
          {/* set bg to white then handle opacity to avoid the overlay view
          through */}
        </div>
        <motion.div
          style={{
            translateX: "-50%",
            translateY: "-50%",
          }}
          animate={{
            rotate: "-1turn",
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute h-[444px] w-[444px] md:h-[780px] md:w-[780px] border-dotted border top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        ></motion.div>
      </motion.div>
      <div className="container mt-4 text-white relative">
        <h1 className="text-8xl md:text-[168px] md:leading-none text-center tracking-tighter font-semibold bg-clip-text bg-white text-transparent bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] ">
          AI SEO
        </h1>
        <p className="text-lg md:text-xl text-white/50 mt-5 text-center max-w-xl mx-auto">
          Elevate your site{"`"}s visibility effortlessly with AI, where smart
          technology meets user-friendly SEO tools.
        </p>
        <div className="mt-5 flex justify-center">
          <Button>Join Waitlist</Button>
        </div>
      </div>
    </motion.section>
  );
};
