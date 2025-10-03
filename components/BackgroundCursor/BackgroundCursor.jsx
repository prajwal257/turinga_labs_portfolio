"use client";
import { useEffect } from "react";
import gsap from "gsap";
import styles from "./BackgroundCursor.module.scss";

export default function BackgroundCursor() {
  useEffect(() => {
    const trails = document.querySelectorAll(`.${styles.trail}`);
    const smoothPointer = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };
    const totalPointsArray = [40];

    const handleMouseMove = (event) => {
      gsap.to(smoothPointer, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.125,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    function updatePath() {
      trails.forEach((path, index) => {
        let points = path.points || [];
        points.unshift({ ...smoothPointer });
        while (points.length > totalPointsArray[index]) {
          points.pop();
        }
        path.points = points;

        if (points.length > 1) {
          let d = `M ${points[0].x} ${points[0].y}`;
          for (let i = 1; i < points.length; i++) {
            d += `L ${points[i].x} ${points[i].y}`;
          }
          path.setAttribute("d", d);
        }
      });
      requestAnimationFrame(updatePath);
    }
    updatePath();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <svg className={styles.svg}>
      <path d="" className={styles.trail} />
    </svg>
  );
}
