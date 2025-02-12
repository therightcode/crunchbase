import React from "react";
import testimonialStyle from "./testimonial.module.css";
import { FiExternalLink } from "react-icons/fi";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

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

// const router = useRouter();
// const handleWhatsapp = () => {
//   router.push("https://wa.me/message/NKUQSNJ3E6A7M1");
// };

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
    transition: { duration: 5, delay: 10 },
  },
  // hiddenLeftAway: {
  //   opacity: 0,
  //   filter: "blur(20px)",
  //   transform: "translateX(-30%)",
  //   transition: { duration: 1 },
  // },

  hiddenLeftAway: {
    opacity: 0,
    filter: "blur(20px)",
    transform: "translateX(-30%)",
    transition: { duration: 1, delay: 5 }, // Added 5s delay
  },

  hiddenLeftAway1: {
    opacity: 0,
    filter: "blur(20px)",
    transform: "translateX(-30%)",
    transition: { duration: 1, delay: 10 }, // Added 5s delay
  },

  hiddenLeftAway2: {
    opacity: 0,
    filter: "blur(20px)",
    transform: "translateX(-30%)",
    transition: { duration: 1, delay: 40 }, // Added 5s delay
  },

  hiddenLeftAway3: {
    opacity: 0,
    filter: "blur(20px)",
    transform: "translateX(-30%)",
    transition: { duration: 1, delay: 60 }, // Added 5s delay
  },

  hiddenLeftAway4: {
    opacity: 0,
    filter: "blur(20px)",
    transform: "translateX(-30%)",
    transition: { duration: 1, delay: 80 }, // Added 5s delay
  },

  hiddenLeftAway5: {
    opacity: 0,
    filter: "blur(20px)",
    transform: "translateX(-30%)",
    transition: { duration: 1, delay: 100 }, // Added 5s delay
  },

  hiddenLeftAway6: {
    opacity: 0,
    filter: "blur(20px)",
    transform: "translateX(-30%)",
    transition: { duration: 1, delay: 120 }, // Added 5s delay
  },

  // hiddenLeftAway: {
  //   opacity: 0,
  //   filter: "blur(20px)",
  //   transform: "translateY(1%)",
  //   transition: { duration: 10, delay: 30 },
  // },

  visible: {
    opacity: 1,
    filter: "blur(0)",
    transform: "translateY(0) translateX(0)", // Reset both translations
    transition: { duration: 1 },
  },
};

function Testimonial() {
  return (
    <>
      <h1 id="products" className={testimonialStyle.tProducts}>
        My Projects
      </h1>
      <div className={testimonialStyle.serviceContainer}>
        <div className={testimonialStyle.serviceWrapper}>
          <Tilt>
            <motion.div
              className={`${testimonialStyle.serviceCard1} ${testimonialStyle.card}`}
              initial="hiddenTexts"
              whileInView="visible"
              variants={contentVariants}
            >
              <img src="/one1.jpg" alt="" />

              <div className={testimonialStyle.testimonialInfo}>
                <h1>Interactive Onboarding Screens</h1>

                <div className={testimonialStyle.tText}>
                  <h2>Purpose-Driven Success</h2>
                  <p>
                    A smooth onboarding experience with animations and tooltips
                    to guide users through the app's features. Focus on
                    intuitive navigation and accessibility to enhance first
                    impressions.
                  </p>
                </div>
                <div className={testimonialStyle.servicebtn}>
                  <button className={testimonialStyle.tBtns}>
                    $$ <FiExternalLink />
                  </button>
                </div>
              </div>
            </motion.div>
          </Tilt>

          <Tilt>
            <motion.div
              className={`${testimonialStyle.serviceCard2} ${testimonialStyle.card}`}
              initial="hiddenTexts"
              whileInView="visible"
              variants={contentVariants}
            >
              <img src="/two2.png" alt="" />

              <div className={testimonialStyle.testimonialInfo}>
                <h1>Personalized Financial Planning</h1>
                <div className={testimonialStyle.tText}>
                  <h2>Customizable Dashboard</h2>
                  <p>
                    Build a dashboard that allows users to drag, resize, and
                    rearrange widgets, making it adaptable to their preferences.
                    Add visual charts and dynamic data updates for real-time
                    interaction.
                  </p>
                </div>
                <div className={testimonialStyle.servicebtn}>
                  <button className={testimonialStyle.sBtns}>
                    $$ <FiExternalLink />
                  </button>
                </div>
              </div>
            </motion.div>
          </Tilt>
          <Tilt>
            <motion.div
              className={`${testimonialStyle.serviceCard3} ${testimonialStyle.card}`}
              initial="hiddenTexts"
              whileInView="visible"
              variants={contentVariants}
            >
              <img src="/three3.png" alt="" />
              <div className={testimonialStyle.testimonialInfo}>
                <h1>Lorem ipsum dolor sit.</h1>
                <div className={testimonialStyle.tText}>
                  <h2>Responsive E-commerce Product Cards</h2>
                  <p>
                    Design product cards with hover effects, quick view modals,
                    and add-to-cart animations. Ensure the layout remains
                    visually appealing and functional on all screen sizes.
                  </p>
                </div>
                <div className={testimonialStyle.servicebtn}>
                  <button className={testimonialStyle.sBtns}>
                    $$ <FiExternalLink />
                  </button>
                </div>
              </div>
            </motion.div>
          </Tilt>
          <Tilt>
            <motion.div
              className={`${testimonialStyle.serviceCard4} ${testimonialStyle.card}`}
              initial="hiddenTexts"
              whileInView="visible"
              variants={contentVariants}
            >
              <img src="/four4.jpg" alt="" />

              <div className={testimonialStyle.testimonialInfo}>
                <h1>Lorem ipsum dolor sit.</h1>
                <div className={testimonialStyle.tText}>
                  <h2>Dynamic Form Validation</h2>
                  <p>
                    Develop a form with real-time validation and error feedback,
                    featuring progress indicators and field animations. Make it
                    user-friendly by handling errors gracefully.
                  </p>
                </div>
                <div className={testimonialStyle.servicebtn}>
                  <button className={testimonialStyle.sBtns}>
                    $$ <FiExternalLink />
                  </button>
                </div>
              </div>
            </motion.div>
          </Tilt>

          <Tilt>
            <motion.div
              className={`${testimonialStyle.serviceCard5} ${testimonialStyle.card}`}
              initial="hiddenTexts"
              whileInView="visible"
              variants={contentVariants}
            >
              <img src="/five5.jpg" alt="" />

              <div className={testimonialStyle.testimonialInfo}>
                <h1>Lorem ipsum dolor sit.</h1>
                <div className={testimonialStyle.tText}>
                  <h2>Light/Dark Theme Toggle</h2>
                  <p>
                    Implement a theme toggle feature with smooth transitions and
                    store user preferences locally. Ensure the color palettes
                    are accessible and visually balanced.
                  </p>
                </div>
                <div className={testimonialStyle.servicebtn}>
                  <button className={testimonialStyle.sBtns}>
                    $$ <FiExternalLink />
                  </button>
                </div>
              </div>
            </motion.div>
          </Tilt>

          <Tilt>
            <motion.div
              className={`${testimonialStyle.serviceCard6} ${testimonialStyle.card}`}
              initial="hiddenTexts"
              whileInView="visible"
              variants={contentVariants}
            >
              <img src="/six6.jpg" alt="" />

              <div className={testimonialStyle.testimonialInfo}>
                <h1>Lorem ipsum dolor sit.</h1>
                <div className={testimonialStyle.tText}>
                  <h2>Animated Data Visualization</h2>
                  <p>
                    Create interactive charts or graphs that display data
                    dynamically using libraries like Chart.js or D3.js. Focus on
                    clarity and visual appeal for an enhanced user experience.
                  </p>
                </div>
                <div className={testimonialStyle.servicebtn}>
                  <button className={testimonialStyle.sBtns}>
                    $$ <FiExternalLink />
                  </button>
                </div>
              </div>
            </motion.div>
          </Tilt>
        </div>
      </div>
    </>
  );
}

export default Testimonial;
