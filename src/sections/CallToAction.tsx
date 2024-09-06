"use client";
import Button from "@/components/Button";
import stars from "@/assets/stars.png";
import gridlines from "@/assets/grid-lines.png";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { RefObject, useEffect, useRef } from "react";

const useRelativeMousePositionction = (to: RefObject<HTMLElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const updateMousePosition = (event: MouseEvent) => {
    if (!to.current) return;
    const { top, left } = to.current.getBoundingClientRect();
    mouseX.set(event.x - left);
    mouseY.set(event.y - top);
  };
  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  });

  return [mouseX, mouseY];
};

export const CallToAction = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const borderedDivRef = useRef<HTMLDivElement>(null);

  const [mouseX, mouseY] = useRelativeMousePositionction(borderedDivRef);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );

  const imageMask = useMotionTemplate`radial-gradient(50% 50% at ${mouseX}px ${mouseY}px,black,transparent`;

  return (
    <motion.section className="py-20 md:py-24" ref={sectionRef}>
      <div className="text-white container">
        <motion.div
          ref={borderedDivRef}
          className="group border border-white/15 py-24 rounded-xl overflow-hidden relative"
          style={{
            backgroundImage: `url(${stars.src})`,
            backgroundPositionY,
          }}
          whileInView={{
            backgroundPositionX: stars.width,
            transition: {
              duration: 60,
              ease: "linear",
              repeat: Infinity,
            },
          }}
        >
          <div
            className="group-hover:opacity-0 absolute inset-0 bg-[rgb(74,32,138)] /* blending */ bg-blend-overlay /* masking */ [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] transition duration-700"
            style={{
              backgroundImage: `url(${gridlines.src})`,
            }}
          ></div>
          <motion.div
            className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-[rgb(74,32,138)] /* blending */ bg-blend-overlay /* masking */ [mask-image:radial-gradient(50%_50%_at_0px_0px,black,transparent)] transition duration-700"
            style={{
              backgroundImage: `url(${gridlines.src})`,
              maskImage:imageMask
            }}
          ></motion.div>
          <div className="relative">
            <h2 className="text-5xl md:text-4xl lg:text-5xl font-medium text-center mx-auto tracking-tighter">
              AI-driven SEO for everyone.
            </h2>
            <p className="text-lg max-w-xs  mx-auto text-center text-white/70 mt-5 px-4">
              Achieve clear,impactful results without the complexity.
            </p>
            <div className="flex justify-center mt-8">
              <Button>Join Waitlist</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
