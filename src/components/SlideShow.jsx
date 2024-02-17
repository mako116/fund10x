// "use client"
// import {motion, AnimatePresence } from 'framer-motion';
// import Image from 'next/image';
// import React, { useEffect, useState } from 'react'
 
// const images = ["Property1.svg","Property2.svg","Frame91.svg"];
// const transitionDuration = 5000; // Time in milliseconds for each slide

// const SlideShow = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, transitionDuration);

//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   return (
  
//   <div className="relative w-full h-full ">
//   <AnimatePresence initial={false} mode='wait'>
//     <motion.div
//       key={currentIndex}
//       className="absolute top-0 left-0 flex items-center justify-center"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//     >
//       <motion.img
//         src={`/images/${images[currentIndex]}`}
//         alt={`Slide ${currentIndex + 1}`}
//         className="w-full h-full object-cover"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//       />
//     </motion.div>
//   </AnimatePresence>
// </div>
//   )
// }

// export default SlideShow

"use client"
// components/ImageSlideshow.js
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './../css/ImageSlideshow.module.css';
import imaged from "../assests/Frame 2409.jpg"
import fund10 from "../../public/images/Property1.svg"
import fund10x from "../../public/images/Property2.svg"
import fund from "../../public/images/Frame91.svg"

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
          objectPosition='center'
          className={`${styles.slide} ${
            index === activeIndex ? styles.active : ''
          }`}
        />
      ))}
    </div>
  );
};

export default ImageSlideshow;
