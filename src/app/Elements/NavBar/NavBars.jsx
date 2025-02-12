import React, { useState } from "react";
import navStyle from "./Navbars.module.css";
import { FaTimes } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { motion } from "framer-motion";

function NavBar() {
  const navItem = ["Home", "About", "Project", "Footer"];
  const [collapsed, setCollapsed] = useState(true);
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
      transform: "translateX(100%)",
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
  return (
    <div>
      <div className={navStyle.navs}>
        <div className={navStyle.logo}>
          <h1>Logo</h1>
        </div>

        <div className={navStyle.navItems}>
          {navItem.map((item) => (
            <div key={item}>
              <a href="#"> {item}</a>
            </div>
          ))}
        </div>
        <div className={navStyle.menuicon}>
          <i>
            <MdMenu onClick={() => setCollapsed(!collapsed)}></MdMenu>{" "}
          </i>
        </div>
      </div>

      <motion.div
        className={collapsed ? navStyle.collapsed : navStyle.hidden}
        initial="hiddenLeftAway"
        whileInView="visible"
        variants={contentVariants}
      >
        <div className={navStyle.collapseCover}></div>
        <div className={navStyle.collapseditems}>
          <div className={navStyle.colicon}>
            <i>
              <FaTimes onClick={() => setCollapsed(!collapsed)}></FaTimes>{" "}
            </i>
          </div>
          <div className={navStyle.home}>
            <a href="#">Home</a>
          </div>

          <div className={navStyle.about}>
            <a href="#">About</a>
          </div>

          <div className={navStyle.project}>
            <a href="#">Project</a>
          </div>

          <div className={navStyle.work}>
            <a href="#">Work</a>
          </div>
          <div className={navStyle.contact}>
            <a href="#">Contact</a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default NavBar;
