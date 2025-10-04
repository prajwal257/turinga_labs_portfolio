"use client";
import React, { useEffect, useState } from "react";
import styles from './Footer.module.scss';
import Link from "next/link";
import Marquee from "react-fast-marquee";

function Footer() {
  const [indiaTime, setIndiaTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setIndiaTime(
        now.toLocaleTimeString("en-IN", { timeZone: "Asia/Kolkata" })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.Footer}>
      <h6>Mumbai (IST)<br></br> {indiaTime.toUpperCase()}</h6>
      <div className={styles.ContactLinks}>
        <Link href="linkedin.com">
          <img src="./assets/LinkArrowIcon.png" alt="Link Icon" />
          LinkedIn
        </Link>
        <Link href="Email.com">Email</Link>
      </div>
      <Link href="github.com" className={styles.Github}>GitHub</Link>
      <div className={styles.Acknowledgement}>
        <h6>Made in India, <br></br> by Prajwal Dwivedi.<br />Sponsored By: </h6><img src="./assets/TuringaLabsIcon.png" alt="Sponsor Logo" />
      </div>
      <Marquee className={styles.CopyrightMarkquee}>© Prajwal Dwivedi Portfolio</Marquee>
    </div>
  )
}

export default Footer