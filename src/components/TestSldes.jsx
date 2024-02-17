// import { motion, useAnimation } from 'framer-motion';
// import { useEffect } from 'react';

// const testimonials = [
//   { id: 1, imageSrc: '/path/to/image1.jpg', heading: 'My experience with FUND10X has been truly exceptional.', text: 'Investor',names: 'Christine Charper'},
//   { id: 2, imageSrc: '/images/faced.svg', heading: 'My experience with FUND10X has been truly exceptional.', text: 'Investor',names: 'Christine Charper'},
//   { id: 3, imageSrc: '/path/to/image3.jpg', heading: 'My experience with FUND10X has been truly exceptional.', text: 'Investor',names: 'Christine Charper' },
//   { id: 4, imageSrc: '/path/to/image4.jpg', heading: 'My experience with FUND10X has been truly exceptional.', text: 'Investor',names: 'Christine Charper' },
//   { id: 5, imageSrc: '/path/to/image5.jpg', heading: 'My experience with FUND10X has been truly exceptional.', text: 'Investor',names: 'Christine Charper' },
//   { id: 6, imageSrc: '/path/to/image6.jpg', heading: 'My experience with FUND10X has been truly exceptional.', text: 'Investor',names: 'Christine Charper'},
//   // Add more testimonials as needed
// ];

// const Testimonials = () => {
//   const controls = useAnimation();

//   const animateSlider = async () => {
//     while (true) {
//       await controls.start({ x: '-200%', transition: { duration: 20, ease: 'linear' } }); // Adjust duration as needed
//       await controls.start({ x: '0%', transition: { duration: 0 } }); // Instant jump to start
//     }
//   };

//   useEffect(() => {
//     animateSlider();
//   }, []);

//   return (
//     <div className="relative test_size overflow-hidden ">
//       <motion.div
//         className="flex  absolute w-full"
//         animate={controls}
//       >
//         {testimonials.map((testimonial) => (
//           <div key={testimonial.id} className="flex-shrink-0 lg:w-[500px] w-full gap-[0px] ">
//             <div className="lg:px-[40px] px-[15px] py-[15px] lg:py-[30px] gap-[0px] bg-gradient-to-r shadowedin border-[#000] from-linear1 to-linear2 lg:w-[444.8px] w-[250px] h[150px] lg:h-full rounded-[19.93px] border-[1.51px]">
//               <h3 className="lg:text-[26.43px] text-[16px] leading-[19px] lg:leading-[36.71px] font-semibold mb-2 ">{testimonial.heading}</h3>
//               <div className="flex gap-[10px] lg:gap-[30px] mt-[10px] lg:mt-[40px]">
//               <img src={testimonial.imageSrc} alt={`Testimonial ${testimonial.id}`} className="lg:w-[79.47px] w-[30px] lg:h-[79.47px] h-[30px] border-[2.85px] object-contain rounded-full shadow mb-4" />              
//               <div className="flex flex-col gap-[5px] lg:w-[154px] w-full h-full lg:h-[48px]">
//                <h5 className=" font-semibold text-[15px] leading-[15px] lg:text-[17.88px] lg:leading-[23.58px]">{testimonial.names}</h5>
//                <p className="font-normal text-[11px] lg:text-[17.88px] leading-[23.58px]">{testimonial.text}</p>
//               </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// export default Testimonials;

// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import styled from "../css/TestimonialSlider.module.css"
// const testimonialData = [
//   {
//     image: 'path/to/image1.jpg',
//     name: 'Christine Charper',
//     company: 'Investor ',
//     backgroundColor: '#e6e6e6', // Background color for slide 2
//     textColor: '#444', // Text color for slide 2
//     paragraph: 'My experience with FUND10X has been truly exceptional.',
//   },
//   {
//     image: 'path/to/image2.jpg',
//     name: 'Christine Charper ',
//     company: 'Investor',
//     backgroundColor: 'background: linear-gradient(148.85deg, #21792E 18.01%, #0E349F 91.58%)',
//     textColor: '#444', // Text color for slide 2
//     paragraph: 'Testimonial content from Jane Smith.',
//   },
//   {
//     image: 'path/to/image2.jpg',
//     name: 'Christine Charper ',
//     company: 'Investor',
//     backgroundColor: '#e6e6e6', // Background color for slide 2
//     textColor: '#444', // Text color for slide 2
//     paragraph: 'Testimonial content from Jane Smith.',
//   },
//   {
//     image: 'path/to/image2.jpg',
//     name: 'Christine Charper ',
//     company: 'Investor',
//     backgroundColor: 'bg-green-200', // Background color for slide 2
//     textColor: '#444', // Text color for slide 2
//     paragraph: 'Testimonial content from Jane Smith.',
//   },
//   {
//     image: 'path/to/image2.jpg',
//     name: 'Christine Charper ',
//     company: 'Investor',
//     backgroundColor: 'bg-green-200', // Background color for slide 2
//     textColor: '#444', // Text color for slide 2
//     paragraph: 'Testimonial content from Jane Smith.',
//   },
//   {
//     image: 'path/to/image2.jpg',
//     name: 'Christine Charper ',
//     company: 'Investor',
//     backgroundColor: 'bg-green-200', // Background color for slide 2
//     textColor: '#444', // Text color for slide 2
//     paragraph: 'Testimonial content from Jane Smith.',
//   },
//   {
//     image: 'path/to/image2.jpg',
//     name: 'Christine Charper ',
//     company: 'Investor',
//     backgroundColor: 'bg-green-200', // Background color for slide 2
//     textColor: '#444', // Text color for slide 2
//     paragraph: 'Testimonial content from Jane Smith.',
//   },
//   {
//     image: 'path/to/image2.jpg',
//     name: 'Christine Charper ',
//     company: 'Investor',
//     backgroundColor: 'bg-green-200', // Background color for slide 2
//     textColor: '#444', // Text color for slide 2
//     paragraph: 'Testimonial content from Jane Smith.',
//   },
//   {
//     image: 'path/to/image2.jpg',
//     name: 'Christine Charper ',
//     company: 'Investor',
//     backgroundColor: 'bg-green-200', // Background color for slide 2
//     textColor: '#444', // Text color for slide 2
//     paragraph: 'Testimonial content from Jane Smith.',
//   },
//   {
//     image: 'path/to/image2.jpg',
//     name: 'Christine Charper ',
//     company: 'Investor',
//     backgroundColor: 'bg-green-200', // Background color for slide 2
//     textColor: '#444', // Text color for slide 2
//     paragraph: 'Testimonial content from Jane Smith.',
//   },{
//     image: 'path/to/image2.jpg',
//     name: 'Christine Charper ',
//     company: 'Investor',
//     backgroundColor: 'bg-green-200', // Background color for slide 2
//     textColor: '#444', // Text color for slide 2
//     paragraph: 'Testimonial content from Jane Smith.',
//   },{
//     image: 'path/to/image2.jpg',
//     name: 'Christine Charper ',
//     company: 'Investor',
//     backgroundColor: 'bg-green-200', // Background color for slide 2
//     textColor: '#444', // Text color for slide 2
//     paragraph: 'Testimonial content from Jane Smith.',
//   },{
//     image: 'path/to/image2.jpg',
//     name: 'Christine Charper ',
//     company: 'Investor',
//     backgroundColor: 'bg-green-200', // Background color for slide 2
//     textColor: '#444', // Text color for slide 2
//     paragraph: 'Testimonial content from Jane Smith.',
//   },
// ];

// const TestimonialSlider = () => {
//   const settings = {
//     dots: false,
//     arrows: false,
//     infinite: true,
//     speed: 1500,
//     autoplay: true,
//     autoplaySpeed: 0,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     variableWidth: true,
//     pauseOnHover: false,
//     // swipeToSlide: true,
//     // centerMode: true,
//     // focusOnSelect: true,
//     ltr: true,
//     cssEase: 'linear',
//     responsive: [
//       {
//         breakpoint:1100,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
          
//         },
        
//       },
//     ],
//   };

//   return (

//     <Slider {...settings} >
//       {testimonialData.map((testimonial, index) => (
//         <div key={index} >
//         <div className="slick_heads">
//         <div className='slick_middle text-[#fff]'>
//           <div className="slick_header">
//           <h3>My experience with <span>FUND10X</span> has been truly exceptional.</h3>
//           </div>
//           <div className="slicks_bottom">
//             <div>
//             <img src={testimonial.image} alt={testimonial.name} />
//             </div>
//           <div className="slicksBoth">
//           <p className='slicks_Name'>{testimonial.name}</p>
//           <p className='slicks_p'>{testimonial.company}</p>
//           </div>
//           </div>
         
//          </div>
//         </div>
//         </div>
//       ))}
//     </Slider>
//   );
// };

// export default TestimonialSlider;


// components/TestimonialSlider.js

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../../public/images/faced.svg"
const testimonialData = [
  {
        image: 'images/faced.svg',
        name: 'Christine Charper ',
        company: 'Investor',
        backgroundColor: 'bg-green-200', // Background color for slide 2
        textColor: '#444', // Text color for slide 2
        paragraph: 'Testimonial content from Jane Smith.',
      },
      {
        image: 'images/faced.svg',
        name: 'Christine Charper ',
        company: 'Investor',
        backgroundColor: 'bg-green-200', // Background color for slide 2
        textColor: '#444', // Text color for slide 2
        paragraph: 'Testimonial content from Jane Smith.',
      },
      {
        image: 'images/faced.svg',
        name: 'Christine Charper ',
        company: 'Investor',
        backgroundColor: 'bg-green-200', // Background color for slide 2
        textColor: '#444', // Text color for slide 2
        paragraph: 'Testimonial content from Jane Smith.',
      },
      {
        image: 'images/faced.svg',
        name: 'Christine Charper ',
        company: 'Investor',
        backgroundColor: 'bg-green-200', // Background color for slide 2
        textColor: '#444', // Text color for slide 2
        paragraph: 'Testimonial content from Jane Smith.',
      },
      {
        image: 'images/faced.svg',
        name: 'Christine Charper ',
        company: 'Investor',
        backgroundColor: 'bg-green-200', // Background color for slide 2
        textColor: '#444', // Text color for slide 2
        paragraph: 'Testimonial content from Jane Smith.',
      },
      {
        image: 'images/faced.svg',
        name: 'Christine Charper ',
        company: 'Investor',
        backgroundColor: 'bg-green-200', // Background color for slide 2
        textColor: '#444', // Text color for slide 2
        paragraph: 'Testimonial content from Jane Smith.',
      },
      {
        image: 'images/faced.svg',
        name: 'Christine Charper ',
        company: 'Investor',
        backgroundColor: 'bg-green-200', // Background color for slide 2
        textColor: '#444', // Text color for slide 2
        paragraph: 'Testimonial content from Jane Smith.',
      },
      {
        image: 'images/faced.svg',
        name: 'Christine Charper ',
        company: 'Investor',
        backgroundColor: 'bg-green-200', // Background color for slide 2
        textColor: '#444', // Text color for slide 2
        paragraph: 'Testimonial content from Jane Smith.',
      },
      {
        image: 'images/faced.svg',
        name: 'Christine Charper ',
        company: 'Investor',
        backgroundColor: 'bg-green-200', // Background color for slide 2
        textColor: '#444', // Text color for slide 2
        paragraph: 'Testimonial content from Jane Smith.',
      },
      {
        image: 'images/faced.svg',
        name: 'Christine Charper ',
        company: 'Investor',
        backgroundColor: 'bg-green-200', // Background color for slide 2
        textColor: '#444', // Text color for slide 2
        paragraph: 'Testimonial content from Jane Smith.',
      },
      {
        image: 'images/faced.svg',
        name: 'Christine Charper ',
        company: 'Investor',
        backgroundColor: 'bg-green-200', // Background color for slide 2
        textColor: '#444', // Text color for slide 2
        paragraph: 'Testimonial content from Jane Smith.',
      },
      {
        image: 'images/faced.svg',
        name: 'Christine Charper ',
        company: 'Investor',
        backgroundColor: 'bg-green-200', // Background color for slide 2
        textColor: '#444', // Text color for slide 2
        paragraph: 'Testimonial content from Jane Smith.',
      },
     
  // Add more testimonials as needed
];

// const TestimonialSlider = () => {
  // const settings = {
  //   dots: false,
  //   arrows: false,
  //   infinite: true,
  //   speed: 1000,
  //   autoplay: true,
  //   autoplaySpeed: 10,
  //   pauseOnHover: false,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   cssEase: 'linear',
  //   ltr: true, 
  //   className: 'p-4', 
  // };

  const TestimonialSlider = () => {
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 2000,
      autoplay: true,
      autoplaySpeed: 0,
      slidesToShow: 3,
      slidesToScroll: 1,
      variableWidth: true,
      pauseOnHover: false,
      ltr: true,
      cssEase: 'linear',
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        
      ],
    };
  
    return (
      <div className="w-full h-full">
        <Slider {...settings}>
          {testimonialData.map((testimonial, index) => (
            <div key={index}>
              <div className="slick_heads">
                <div className='slick_middle text-[#fff]'>
                  <div className="slick_header">
                    <h3>My experience with <span>FUND10X</span> has been truly exceptional.</h3>
                  </div>
                  <div className="slicks_bottom">
                    <div>
                      <img src={testimonial.image} alt={testimonial.name} />
                    </div>
                    <div className="slicksBoth">
                      <p className='slicks_Name'>{testimonial.name}</p>
                      <p className='slicks_p'>{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  };
  
  export default TestimonialSlider;
