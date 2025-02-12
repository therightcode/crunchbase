import React, { useState } from "react";
import serviceStyle from "./services.module.css";
import { FiExternalLink } from "react-icons/fi";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { Roboto } from "@next/font/google";

import { Moul } from "@next/font/google";

import { Great_Vibes } from "@next/font/google";

import { Gruppo } from "@next/font/google";

import { Rubik_Bubbles } from "@next/font/google";

import { Tangerine } from "@next/font/google";

import { Bungee_Shade } from "@next/font/google";

import { Black_Ops_One } from "@next/font/google";

import { FaWhatsapp } from "react-icons/fa";

const bungeeShade = Bungee_Shade({
  subsets: ["latin"], // Bungee Shade supports the 'latin' subset
  weight: "400",
});
const blackOpsOne = Black_Ops_One({
  subsets: ["latin"], // Black Ops One supports the 'latin' subset
  weight: ["400"],
});

const tangerine = Tangerine({
  subsets: ["latin"], // Tangerine supports the 'latin' subset
  weight: ["400"], // Tangerine is available in weight 400
});

const rubikBubbles = Rubik_Bubbles({
  subsets: ["latin"], // Use 'latin' as this is likely a supported subset
  weight: "400",
});

const gruppo = Gruppo({
  subsets: ["latin"], // Gruppo supports the 'latin' subset
  weight: "400",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"], // Great Vibes supports only the 'latin' subset
  weight: "400",
});

const moul = Moul({
  subsets: ["latin"], // Use 'latin' as this is the available subset for Moul
  weight: "400", // Moul is only available in a single weight
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"], // Adjust as needed
});

function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Define your animation variants
  const variants = {
    hidden: { opacity: 0, x: "-30%" },
    visible: { opacity: 1, x: "0%" },
  };

  const contentVariants = {
    hiddenLeftAway: {
      opacity: 0,
      filter: "blur(20px)",
      transform: "translateX(-30%)",
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
      transform: "translateX(0)",
      transition: { duration: 1 },
    },
  };
  return (
    <>
      <h1 id="services" className={serviceStyle.sHeads}>
        Testimonials
      </h1>

      <div className={`${serviceStyle.serviceContainer} ${gruppo.className}`}>
        <div className={serviceStyle.serviceWrapper}>
          <div
            className={`${serviceStyle.serviceCard1} ${serviceStyle.card}`}
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 1, delay: 3 * 0.3 }} // Stagger delay based on index
          >
            <motion.h1
              initial="hiddenTexts"
              whileInView="visible"
              variants={contentVariants}
              className={serviceStyle.hed}
            >
              ""
            </motion.h1>

            <div>
              <motion.p
                initial="hiddenTexts"
                whileInView="visible"
                variants={contentVariants}
              >
                "<br />
                Cyan's ability to turn our vision into a stunning, user-friendly
                website exceeded our expectations. His attention to detail,
                quick response times, and commitment to quality truly set him
                apart. We couldn't be happier with the result and will
                definitely work with him again. "
              </motion.p>
            </div>
            <motion.div
              className={serviceStyle.servicebtn}
              initial="hiddenTexts"
              whileInView="visible"
              variants={contentVariants}
            >
              <button className={serviceStyle.sBtns}>Smart 🤓</button>
            </motion.div>
          </div>
          <div className={`${serviceStyle.serviceCard2} ${serviceStyle.card}`}>
            <motion.h1
              initial="hiddenTexts"
              whileInView="visible"
              variants={contentVariants}
              className={serviceStyle.hed}
            >
              ""
            </motion.h1>
            <div>
              <motion.p
                initial="hiddenTexts"
                whileInView="visible"
                variants={contentVariants}
              >
                ""
                <br />
                Working with Cyan was a fantastic experience. His expertise in
                React and Next.js helped us create a seamless, fast, and
                visually appealing application. He tackled every challenge with
                confidence and delivered on time, leaving us with a product
                we're proud to showcase. "
              </motion.p>
            </div>
            <motion.div
              className={serviceStyle.servicebtn}
              initial="hiddenTexts"
              whileInView="visible"
              variants={contentVariants}
            >
              <button className={serviceStyle.sBtns}>Renowned 🏆</button>
            </motion.div>
          </div>
          <div className={`${serviceStyle.serviceCard3} ${serviceStyle.card}`}>
            <motion.h1
              initial="hiddenTexts"
              whileInView="visible"
              variants={contentVariants}
              className={serviceStyle.hed}
            >
              {" "}
              ""
            </motion.h1>
            <div>
              <motion.p
                initial="hiddenTexts"
                whileInView="visible"
                variants={contentVariants}
              >
                ""
                <br />
                Our project had many unique challenges, but Cyan handled them
                with ease. He not only built a website that looks amazing but
                also ensured it was optimized for performance and SEO. We highly
                recommend him for any front-end development needs from start to
                finish all the time."
              </motion.p>
            </div>
            <motion.div
              className={serviceStyle.servicebtn}
              initial="hiddenTexts"
              whileInView="visible"
              variants={contentVariants}
            >
              <button className={serviceStyle.sBtns}>Strategic🎯</button>
            </motion.div>
          </div>
          <div className={`${serviceStyle.serviceCard4} ${serviceStyle.card}`}>
            <motion.h1
              initial="hiddenTexts"
              whileInView="visible"
              variants={contentVariants}
              className={serviceStyle.hed}
            >
              ""
            </motion.h1>
            <div>
              <motion.p
                initial="hiddenTexts"
                whileInView="visible"
                variants={contentVariants}
              >
                ""
                <br />
                Cyan transformed our outdated website into a modern masterpiece.
                His creative approach, combined with his professionalism, made
                the process smooth and enjoyable. Our clients frequently
                compliment the design and usability of our site now."
              </motion.p>
            </div>
            <motion.div
              className={serviceStyle.servicebtn}
              initial="hiddenTexts"
              whileInView="visible"
              variants={contentVariants}
            >
              <button className={serviceStyle.sBtns}>Transformative🔄</button>
            </motion.div>
          </div>
          <div className={`${serviceStyle.serviceCard5} ${serviceStyle.card}`}>
            <motion.h1
              initial="hiddenTexts"
              whileInView="visible"
              variants={contentVariants}
              className={serviceStyle.hed}
            >
              ""
            </motion.h1>
            <div>
              <motion.p
                initial="hiddenTexts"
                whileInView="visible"
                variants={contentVariants}
              >
                ""
                <br />
                Cyan delivered our project ahead of schedule without
                compromising on quality. His dedication to meeting deadlines
                while ensuring everything worked flawlessly was truly
                impressive. He's a reliable partner for any front-end
                development project."
              </motion.p>
            </div>
            <motion.div
              className={serviceStyle.servicebtn}
              initial="hiddenTexts"
              whileInView="visible"
              variants={contentVariants}
            >
              <button className={serviceStyle.sBtns}>Reliable🔒</button>
            </motion.div>
          </div>
          <div className={`${serviceStyle.serviceCard6} ${serviceStyle.card}`}>
            <motion.h1
              initial="hiddenTexts"
              whileInView="visible"
              variants={contentVariants}
              className={serviceStyle.hed}
            >
              ""
            </motion.h1>
            <div>
              <motion.p
                initial="hiddenTexts"
                whileInView="visible"
                variants={contentVariants}
              >
                ""
                <br />
                As a startup, we needed a developer who could build a responsive
                website on a tight budget and timeline. Cyan did just that and
                more! His innovative ideas and clean coding practices were
                exactly what we needed to kickstart our business."
              </motion.p>
            </div>
            <motion.div
              className={serviceStyle.servicebtn}
              initial="hiddenTexts"
              whileInView="visible"
              variants={contentVariants}
            >
              <button className={serviceStyle.sBtns}>Trusted🤝</button>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
