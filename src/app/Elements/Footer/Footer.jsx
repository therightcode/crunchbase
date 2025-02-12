import React, { useEffect, useRef, useState } from "react";
import fstyles from "./Footer.module.css";
import { Roboto } from "@next/font/google";
import { FiCheck } from "react-icons/fi";
import { motion } from "framer-motion";
import { TiChevronRight } from "react-icons/ti";

import { Moul } from "@next/font/google";

import { Great_Vibes } from "@next/font/google";

import { Gruppo } from "@next/font/google";

import { Rubik_Bubbles } from "@next/font/google";

import { Tangerine } from "@next/font/google";

import { Bungee_Shade } from "@next/font/google";

import { Black_Ops_One } from "@next/font/google";

import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { TbBrandX } from "react-icons/tb";
import { TiAdjustBrightness } from "react-icons/ti";
import { TiFlash } from "react-icons/ti";

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

function Footer() {
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
      <div className={fstyles.footerContainer}>
        {/* <div className={fstyles.footerLocation}>
          <div className={fstyles.fLogWrapper}>
            <div className={fstyles.fLogContainer}>
              <h1 style={{ fontFamily: roboto.style.fontFamily }}>
                Contact Us
              </h1>
              <div className={`${fstyles.fFormElement} ${fstyles.secondClass}`}>
                <label
                  htmlFor="email"
                  className={
                    focusedInput === "email" || inputValue.email
                      ? fstyles.fixMessageFocused
                      : fstyles.fixlabelemail
                  }
                >
                  Enter Email
                </label>
                <div
                  className={
                    focusedInput === "email" || inputValue.email
                      ? fstyles.span1
                      : fstyles.span1zero
                  }
                ></div>
                <div
                  className={
                    focusedInput === "email" || inputValue.email
                      ? fstyles.span2
                      : fstyles.span2zero
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

              <div className={`${fstyles.fFormElement} ${fstyles.sMessage}`}>
                <label
                  htmlFor="message"
                  className={
                    focusedInput === "message" || inputValue.message
                      ? fstyles.labelFocused
                      : fstyles.fixlabelmessage
                  }
                >
                  Enter Message
                </label>
             
                <textarea
                  name="message"
                  ref={textareaRef}
                  onFocus={() => setFocusedInput("message")}
                  onBlur={() => setFocusedInput(null)}
                  onChange={handleInputChange}
                  value={inputValue.message}
                ></textarea>
              </div>

              <div className={fstyles.fFormElement}>
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div> */}

        <motion.div
          className={`${fstyles.footerLogo} ${gruppo.className}`}
          initial="hiddenTexts"
          whileInView="visible"
          variants={contentVariants}
        >
          <div className={fstyles.footerL}>
            <h1 className={fstyles.logo}>Cyan Vinz</h1>
            <div className={fstyles.ticks}>
              <img src="/profile2.png" alt="" />
            </div>
            <h2>Building sleek,responsive websites with modern tools</h2>
          </div>
        </motion.div>

        <motion.div
          className={fstyles.infoVidContainer}
          initial="hiddenTexts"
          whileInView="visible"
          variants={contentVariants}
        >
          <div className={fstyles.infoVidWrapper}>
            <video autoPlay loop muted src="/seven.mp4"></video>
          </div>
        </motion.div>

        <motion.div
          className={`${fstyles.footerContact} ${gruppo.className}`}
          initial="hiddenTexts"
          whileInView="visible"
          variants={contentVariants}
        >
          <div className={fstyles.fItem}>
            <div className={fstyles.choicelist}>
              <TiFlash className={fstyles.check} />
              <h3>
                {" "}
                <a href="#home">Home</a>
              </h3>
            </div>
            <div className={fstyles.choicelist}>
              <TiFlash className={fstyles.check} />
              <h3>
                {" "}
                <a href="#home">About</a>{" "}
              </h3>
            </div>
            <div className={fstyles.choicelist}>
              <TiFlash className={fstyles.check} />
              <h3>
                {" "}
                <a href="#home">TechStack</a>{" "}
              </h3>
            </div>
            <div className={fstyles.choicelist}>
              <TiFlash className={fstyles.check} />
              <h3>
                {" "}
                <a href="#home">Services</a>{" "}
              </h3>
            </div>
          </div>

          <div className={fstyles.fItem}>
            <div className={fstyles.choicelist}>
              <FiCheck className={fstyles.check}></FiCheck>{" "}
              <h3>
                {" "}
                <a href="#home">HireMe</a>{" "}
              </h3>
            </div>
            <div className={fstyles.choicelist}>
              <FiCheck className={fstyles.check}></FiCheck>{" "}
              <h3>
                {" "}
                <a href="#home">Career</a>{" "}
              </h3>
            </div>
            <div className={fstyles.choicelist}>
              <FiCheck className={fstyles.check}></FiCheck>{" "}
              <h3>
                {" "}
                <a href="#home">Blog</a>{" "}
              </h3>
            </div>
            <div className={fstyles.choicelist}>
              <FiCheck className={fstyles.check}></FiCheck>{" "}
              <h3>
                {" "}
                <a href="#home">Support</a>{" "}
              </h3>
            </div>
          </div>

          <div className={fstyles.fItem}>
            <div className={fstyles.choicelist}>
              <TiChevronRight className={fstyles.check} />
              <h3>
                {" "}
                <a href="#home">WhatsApp</a>{" "}
              </h3>
              <FaWhatsapp
                className={fstyles.checksocial}
                style={{
                  fontSize: "25px",
                }}
              />
            </div>
            <div className={fstyles.choicelist}>
              <TiChevronRight className={fstyles.check} />
              <h3>
                {" "}
                <a href="#home">Instagram</a>{" "}
              </h3>
              <FaInstagram
                className={fstyles.checksocial}
                style={{
                  fontSize: "25px",
                }}
              />
            </div>
            <div className={fstyles.choicelist}>
              <TiChevronRight className={fstyles.check} />
              <h3>
                {" "}
                <a href="#home">Facebook</a>{" "}
              </h3>
              <FaFacebook
                className={fstyles.checksocial}
                style={{
                  fontSize: "25px",
                }}
              />
            </div>
            <div className={fstyles.choicelist}>
              <TiChevronRight className={fstyles.check} />
              <h3>
                {" "}
                <a href="#home">X(Twitter)</a>{" "}
              </h3>
              <TbBrandX
                className={fstyles.checksocial}
                style={{
                  fontSize: "25px",
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      <div className={fstyles.fEnd}>
        <h1>Copyright © 2025 Cyan Finance Group. All Rights Reserved</h1>
      </div>
    </>
  );
}

export default Footer;
