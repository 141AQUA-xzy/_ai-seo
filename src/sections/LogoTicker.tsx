"use client";
import acme from "../assets/logo-acme.png";
import celestial from "../assets/logo-celestial.png";
import quantum from "../assets/logo-quantum.png";
import pulse from "../assets/logo-pulse.png";
import echo from "../assets/logo-echo.png";
import apex from "../assets/logo-apex.png";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <section className="py-20 md:py:24">
      <div className="container">
        <div className="flex items-center gap-5">
          <h2 className="text-white flex-1 md:flex-none">
            Trusted by top innovative teams
          </h2>
          <div className="flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              initial={{ translateX: "-50%" }}
              animate={{ translateX: "0" }}
              transition={{ease:"linear",repeat:Infinity,duration:20}}
              className="flex flex-none gap-14 pr-14 -translate-x-1/2"
            >
              {[
                acme,
                pulse,
                echo,
                celestial,
                quantum,
                apex,
                acme,
                pulse,
                echo,
                celestial,
                quantum,
                apex,
              ].map((logo) => (
                <img src={logo.src} key={logo.src} className="h-6 w-auto"></img>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
