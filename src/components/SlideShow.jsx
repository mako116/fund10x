"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./../css/ImageSlideshow.module.css";
import imaged from "../assests/Frame 2409.jpg";
import fund10 from "../../public/images/Property1.svg";
import fund10x from "../../public/images/Property2.svg";
import fund from "../../public/images/Frame91.svg";

const images = [
  fund10,
  fund10x,
  fund,
  // Add more image paths as needed
];

const ImageSlideshow = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change the interval time as needed

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.slideshow}>
      {images.map((imageUrl, index) => (
        <Image
          key={index}
          src={imageUrl}
          alt={`Slide ${index + 1}`}
          layout="fill"
          objectFit="contain"
          objectPosition="center"
          className={`${styles.slide} ${
            index === activeIndex ? styles.active : ""
          }`}
        />
      ))}
    </div>
  );
};

export default ImageSlideshow;
