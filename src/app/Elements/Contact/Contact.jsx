import React, { useRef, useState } from "react";
import contactStyle from "./Contact.module.css";
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

function Contact() {
  const [focusedInput, setFocusedInput] = useState(null);
  const [inputValue, setInputValue] = useState({ email: "", message: "" });
  const inputRef = useRef();
  const textareaRef = useRef();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <>
      <h1 className={`${contactStyle.cHead} ${moul.className}`}>Contact Us</h1>
      <div className={contactStyle.contactContainer}>
        <motion.div
          className={contactStyle.contactAnime}
          initial="hiddenTexts"
          whileInView="visible"
          variants={contentVariants}
        >
          <div className={contactStyle.AnimeWrapper}>
            <video autoPlay loop muted src="/four.mp4"></video>
          </div>
        </motion.div>

        <motion.div
          className={`${contactStyle.contactForm} ${gruppo.className}`}
          initial="hiddenTexts"
          whileInView="visible"
          variants={contentVariants}
        >
          <div className={contactStyle.footerLocation}>
            <div className={contactStyle.fLogWrapper}>
              <div className={contactStyle.fLogContainer}>
                <h1>Message</h1>
                <div
                  className={`${contactStyle.fFormElement} ${contactStyle.secondClass}`}
                >
                  <label
                    htmlFor="email"
                    className={
                      focusedInput === "email" || inputValue.email
                        ? contactStyle.fixMessageFocused
                        : contactStyle.fixlabelemail
                    }
                  >
                    Enter Email
                  </label>
                  <div
                    className={
                      focusedInput === "email" || inputValue.email
                        ? contactStyle.span1
                        : contactStyle.span1zero
                    }
                  ></div>
                  <div
                    className={
                      focusedInput === "email" || inputValue.email
                        ? contactStyle.span2
                        : contactStyle.span2zero
                    }
                  ></div>
                  <input
                    type="email"
                    name="email"
                    ref={inputRef}
                    onFocus={() => setFocusedInput("email")}
                    onBlur={() => setFocusedInput(null)}
                    onChange={handleInputChange}
                    value={inputValue.email}
                  />
                </div>

                <div
                  className={`${contactStyle.fFormElement} ${contactStyle.sMessage}`}
                >
                  <label
                    htmlFor="message"
                    className={
                      focusedInput === "message" || inputValue.message
                        ? contactStyle.labelFocused
                        : contactStyle.fixlabelmessage
                    }
                  >
                    Enter Message
                  </label>
                  {/* <input type="message" /> */}
                  {/* <div
                  className={
                    focusedInput === "message" || inputValue.message
                      ? contactStyle.messagespan1
                      : contactStyle.messagespan1zero
                  }
                ></div>
                <div
                  className={
                    focusedInput === "message" || inputValue.message
                      ? contactStyle.messagespan2
                      : contactStyle.messagespan2zero
                  }
                ></div> */}
                  <textarea
                    name="message"
                    ref={textareaRef}
                    onFocus={() => setFocusedInput("message")}
                    onBlur={() => setFocusedInput(null)}
                    onChange={handleInputChange}
                    value={inputValue.message}
                  ></textarea>
                </div>

                <div className={contactStyle.fFormElement}>
                  <button>Submit</button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Contact;
