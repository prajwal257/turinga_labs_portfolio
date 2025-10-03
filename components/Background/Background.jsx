"use client"
import React, { useEffect, useState } from "react";
import styles from "./Background.module.scss";

function Background() {
  const [vars, setVars] = useState({});

  useEffect(() => {
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ?? true;
    const darkBase = "#161616";
    const lightBase = "#f5f5f5";
    const base = prefersDark ? darkBase : lightBase;

    const accents = ["#1c779fff"];
    const randomAccent = accents[Math.floor(Math.random() * accents.length)];

    // Add alpha so backdrop-filter can blur what's behind
    const alpha = "cc"; // ~80% opacity; use e.g. '80' for rgba if you prefer
    setVars({
      // CSS custom properties must be set as strings like '--name'
      "--base": base + alpha,
      "--accent": randomAccent + alpha
    });
  }, []);

  return <div className={styles.Background} style={vars} />;
}

export default Background;
