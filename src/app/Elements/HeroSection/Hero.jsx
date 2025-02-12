import React, { useEffect, useState } from "react";
import heroStyle from "./Hero.module.css";
import { Tangerine } from "@next/font/google";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaLinkedinIn,
} from "react-icons/fa";
import { motion } from "framer-motion";

const tangerine = Tangerine({
  subsets: ["latin"], // Tangerine supports the 'latin' subset
  weight: ["400"], // Tangerine is available in weight 400
});

function Hero() {
  const [particles, setParticles] = useState([]);

  const contentVariants = {
    hiddenTop: {
      opacity: 0,
      filter: "blur(20px)",
      transform: "translateY(-100%)",
      transition: { duration: 1 },
    },

    hiddenBottom: {
      opacity: 0,
      filter: "blur(20px)",
      transform: "translateY(100%)",
      transition: { duration: 1 },
    },

    hiddenTexts: {
      opacity: 0,
      filter: "blur(20px)",
      transform: "translateY(1%)",
      transition: { duration: 10, delay: 30 },
    },

    visible: {
      opacity: 1,
      filter: "blur(0)",
      transform: "translateY(0)",
      transition: { duration: 1 },
    },
  };

  useEffect(() => {
    const particleCount = 50;
    const particles = Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 20}s`,
      //   opacity: Math.random() * 0.5,
    }));

    setParticles(particles);
  }, []);

  return (
    <>
      <div className={heroStyle.heroContainer}>
        {particles.map((particle) => (
          <div
            key={particle.id}
            className={heroStyle.particle}
            style={{
              left: particle.left,
              animationDelay: particle.animationDelay,
              //   opacity: particle.opacity,
            }}
          ></div>
        ))}

        <div className={heroStyle.profile}>
          <div className={heroStyle.wrapper}>
            <div className={heroStyle.cover}></div>
          </div>

          <div className={heroStyle.profimage}>
            <img src="./profile2.png" alt="profile" />
          </div>
        </div>
        <div
          className={heroStyle.infoCover}
          style={{ position: "absolute" }}
        ></div>
        <motion.div
          className={heroStyle.info}
          initial="hiddenTexts"
          whileInView="visible"
          variants={contentVariants}
        >
          <h1 className={`${heroStyle.hello} ${tangerine.className}`}>
            Hello, I am Cyan Vinz
          </h1>
          <h1 className={tangerine.className}>Software Engineer</h1>
          <h1 className={tangerine.className}>Looking for Opportunity</h1>

          <div className={heroStyle.social}>
            <i className={heroStyle.insta}>
              <FaInstagram></FaInstagram>{" "}
            </i>
            <i>
              <FaTwitter></FaTwitter>{" "}
            </i>
            <i>
              {" "}
              <FaFacebook></FaFacebook>{" "}
            </i>
            <i>
              {" "}
              <FaLinkedinIn></FaLinkedinIn>{" "}
            </i>
          </div>

          <div className={heroStyle.btn}>
            <input type="text" name="" id="" placeholder="Enter Email" />
            <button>Download CV</button>
          </div>
        </motion.div>
      </div>
    </>
  );
}
export default Hero;
