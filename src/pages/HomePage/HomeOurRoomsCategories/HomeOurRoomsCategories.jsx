/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */

// import React, { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import testimonial_image from "../../../assets/images/home_image_slider_2.webp";

// const roomsData = [
//   {
//     id: 1,
//     title: "Sparrow Room",
//     description:
//       "A comfortable room which is ideal for a simplistic yet fulfilling stay. The Sparrow comes with all modern amenities such as an electronic safe, tea and coffee maker, free Wi-Fi and a double bed. The room can comfortably accommodate two guests.",
//     image: testimonial_image,
//   },
//   {
//     id: 2,
//     title: "Parrot Room",
//     description:
//       "The Parrot Rooms, covering an area of 250 sq.ft., offer both single and double occupancy options. These rooms are ideal for both business and leisure stays. The rooms can comfortably accommodate two adults and a child.",
//     image: testimonial_image,
//   },
//   {
//     id: 3,
//     title: "Pelican Suite (Duplex Suite)",
//     description:
//       "The Pelican(Suite) is a lavish accommodation that comes with a double bed, one bathroom and twin toilets.",
//     image: testimonial_image,
//   },
//   {
//     id: 4,
//     title: "Crane (Three Room Cottage)",
//     description:
//       "The Crane (Three Room Cottage) is a lavish and complete haven. Ranging from lounges equipped with fireplaces, Crane (Three Room Cottage) is the ideal choice of vacation for a family.",
//     image: testimonial_image,
//   },
//   {
//     id: 5,
//     title: "Hornbill (Five Bedroom Cottage)",
//     description:
//       "The Hornbill (Five Bedroom Cottage) is the grandest and best accommodation that we have at Renest River Country Resort, Manali. The cottage comes with a lounge equipped with a fireplace.",
//     image: testimonial_image,
//   },
//   {
//     id: 6,
//     title: "Canary Room (Superior)",
//     description:
//       "Our 260 sq. ft Canary rooms have all the amenities for a relaxing stay. These rooms can comfortably accommodate up to 3 adults and offers mesmerizing views.",
//     image: testimonial_image,
//   },
// ];

// const HomeOurRoomsCategories = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
//   const intervalRef = useRef(null);

//   const updateScreenSize = () => {
//     setIsMobile(window.innerWidth <= 768);
//   };

//   useEffect(() => {
//     window.addEventListener("resize", updateScreenSize);
//     return () => window.removeEventListener("resize", updateScreenSize);
//   }, []);

//   const startAutoSlide = () => {
//     clearInterval(intervalRef.current);
//     intervalRef.current = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % roomsData.length);
//     }, 4000);
//   };

//   useEffect(() => {
//     startAutoSlide();
//     return () => clearInterval(intervalRef.current);
//   }, [isMobile]);

//   const visibleRooms = () => {
//     if (isMobile) {
//       return roomsData.slice(currentIndex, currentIndex + 1);
//     } else {
//       return [
//         roomsData[currentIndex % roomsData.length],
//         roomsData[(currentIndex + 1) % roomsData.length],
//         roomsData[(currentIndex + 2) % roomsData.length],
//       ];
//     }
//   };

//   const containerVariants = {
//     hidden: { opacity: 0, x: 200 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         type: "spring",
//         stiffness: 80,
//         damping: 20,
//         when: "beforeChildren",
//         staggerChildren: 0.3,
//       },
//     },
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: "easeOut" },
//     },
//   };

//   return (
//     <div className="w-full shadow-md pt-10 pb-10 overflow-hidden">
//       <motion.div
//         className="max-w-[1440px] mx-auto my-0"
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.3 }}
//       >
//         <motion.h2
//           className="text-2xl md:text-3xl mb-10 text-center font-serif"
//           variants={cardVariants}
//         >
//           Our Rooms Categories
//         </motion.h2>

//         <motion.div className="flex justify-center gap-6 overflow-hidden flex-wrap">
//           <AnimatePresence initial={false}>
//             {visibleRooms().map((room) => (
//               <motion.div
//                 key={room.id}
//                 className="flex flex-col items-center"
//                 style={{
//                   width: "340px",
//                   height: "420px",
//                   minWidth: "280px",
//                   maxWidth: "400px",
//                   overflow: "hidden",
//                 }}
//                 initial={{ y: 50, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 exit={{ y: -50, opacity: 0 }}
//                 transition={{ duration: 0.7, ease: "easeInOut" }}
//               >
//                 <img
//                   src={room.image}
//                   alt={room.title}
//                   className="w-full object-cover mb-6"
//                   style={{
//                     height: "200px",
//                     objectFit: "cover",
//                   }}
//                 />
//                 <h6
//                   className="text-lg mb-2 cursor-pointer relative overflow-hidden group text-center"
//                   style={{ fontFamily: "'Playfair Display', serif" }}
//                 >
//                   {room.title}
//                   <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-500 group-hover:w-full"></span>
//                 </h6>

//                 <p
//                   className="text-gray-600 text-sm text-left leading-6 px-2 overflow-hidden"
//                   style={{ flex: "1" }}
//                 >
//                   {room.description}
//                 </p>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default HomeOurRoomsCategories;

/**------------------Add Awasome Motion Add. ------------------------------------- */

// import React, { useState, useEffect, useRef } from "react";
// import testimonial_image from "../../../assets/images/home_image_slider_2.webp";
// import { motion, AnimatePresence } from "framer-motion";

// const roomsData = [
//   {
//     id: 1,
//     title: "Sparrow Room",
//     description:
//       "A comfortable room which is ideal for a simplistic yet fulfilling stay. The Sparrow comes with all modern amenities such as an electronic safe, tea and coffee maker, free Wi-Fi and a double bed. The room can comfortably accommodate two guests.",
//     image: testimonial_image,
//   },
//   {
//     id: 2,
//     title: "Parrot Room",
//     description:
//       "The Parrot Rooms, covering an area of 250 sq.ft., offer both single and double occupancy options. These rooms are ideal for both business and leisure stays. The rooms can comfortably accommodate two adults and a child.",
//     image: testimonial_image,
//   },
//   {
//     id: 3,
//     title: "Pelican Suite (Duplex Suite)",
//     description:
//       "The Pelican(Suite) is a lavish accommodation that comes with a double bed, one bathroom and twin toilets.",
//     image: testimonial_image,
//   },
//   {
//     id: 4,
//     title: "Crane (Three Room Cottage)",
//     description:
//       "The Crane (Three Room Cottage) is a lavish and complete haven. Ranging from lounges equipped with fireplaces, Crane (Three Room Cottage) is the ideal choice of vacation for a family.",
//     image: testimonial_image,
//   },
//   {
//     id: 5,
//     title: "Hornbill (Five Bedroom Cottage)",
//     description:
//       "The Hornbill (Five Bedroom Cottage) is the grandest and best accommodation that we have at Renest River Country Resort, Manali. The cottage comes with a lounge equipped with a fireplace.",
//     image: testimonial_image,
//   },
//   {
//     id: 6,
//     title: "Canary Room (Superior)",
//     description:
//       "Our 260 sq. ft Canary rooms have all the amenities for a relaxing stay. These rooms can comfortably accommodate up to 3 adults and offers mesmerizing views.",
//     image: testimonial_image,
//   },
// ];

// const HomeOurRoomsCategories = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
//   const [direction, setDirection] = useState(1);
//   const intervalRef = useRef(null);

//   const groupSize = isMobile ? 1 : 3;
//   const totalGroups = Math.ceil(roomsData.length / groupSize);

//   useEffect(() => {
//     const updateSize = () => setIsMobile(window.innerWidth <= 1024);
//     window.addEventListener("resize", updateSize);
//     return () => window.removeEventListener("resize", updateSize);
//   }, []);

//   const getVisibleRooms = () => {
//     const start = currentIndex * groupSize;
//     return roomsData.slice(start, start + groupSize);
//   };

//   const handleDotClick = (index) => {
//     if (index !== currentIndex) {
//       clearInterval(intervalRef.current);
//       setDirection(index > currentIndex ? 1 : -1);
//       setCurrentIndex(index);
//       startAutoSlide();
//     }
//   };

//   const startAutoSlide = () => {
//     clearInterval(intervalRef.current);
//     intervalRef.current = setInterval(() => {
//       setDirection(1);
//       setCurrentIndex((prev) => (prev + 1) % totalGroups);
//     }, 5000);
//   };

//   useEffect(() => {
//     startAutoSlide();
//     return () => clearInterval(intervalRef.current);
//   }, [isMobile]);

//   const slideVariants = {
//     enter: (dir) => ({
//       x: dir > 0 ? 300 : -300,
//       opacity: 0,
//     }),
//     center: {
//       x: 0,
//       opacity: 1,
//       transition: { duration: 0.5 },
//     },
//     exit: (dir) => ({
//       x: dir > 0 ? -300 : 300,
//       opacity: 0,
//       transition: { duration: 0.5 },
//     }),
//   };

//   return (
//     <div className="w-full shadow-md pt-10 pb-10 overflow-hidden">
//       <div className="max-w-[1440px] mx-auto px-4">
//         <h2 className="text-2xl md:text-3xl mb-10 text-center font-serif">
//           Our Rooms Categories
//         </h2>

//         <div className="relative w-full h-[460px] flex justify-center items-center">
//           <AnimatePresence custom={direction} initial={false}>
//             <motion.div
//               key={currentIndex}
//               custom={direction}
//               variants={slideVariants}
//               initial="enter"
//               animate="center"
//               exit="exit"
//               className="flex justify-center gap-6 w-full absolute top-0 left-0 flex-wrap"
//             >
//               {getVisibleRooms().map((room) => (
//                 <div
//                   key={room.id}
//                   className="flex flex-col items-center p-3 "
//                   style={{
//                     width: "400px",
//                     height: "380px",
//                     minWidth: "280px",
//                     maxWidth: "400px",
//                   }}
//                 >
//                   <img
//                     src={room.image}
//                     alt={room.title}
//                     className="w-full object-cover mb-4 "
//                     style={{ height: "200px" }}
//                   />
//                   <h6 className="text-lg mb-2 text-center cursor-pointer font-serif relative group">
//                     {room.title}
//                     <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-500 group-hover:w-full"></span>
//                   </h6>
//                   <p className="text-gray-600 text-sm px-2 text-justify leading-6">
//                     {room.description}
//                   </p>
//                 </div>
//               ))}
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         {/* Pagination Dots */}
//         <div className="flex justify-center  gap-2">
//           {Array.from({ length: totalGroups }).map((_, i) => (
//             <button
//               key={i}
//               className={`w-3 h-3 cursor-pointer rounded-full ${
//                 i === currentIndex ? "bg-black" : "bg-gray-400"
//               }`}
//               onClick={() => handleDotClick(i)}
//               style={{ transition: "background 0.3s" }}
//             ></button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomeOurRoomsCategories;

import React, { useState, useEffect, useRef } from "react";
import testimonial_image2 from "../../../assets/images/home_image_slider_3.webp"
import testimonial_image from "../../../assets/images/home_image_slider_2.webp";
import { motion, AnimatePresence } from "framer-motion";

const roomsData = [
  {
    id: 1,
    title: "Sparrow Room",
    description:
      "A comfortable room which is ideal for a simplistic yet fulfilling stay. The Sparrow comes with all modern amenities such as an electronic safe, tea and coffee maker, free Wi-Fi and a double bed. The room can comfortably accommodate two guests.",
    image: testimonial_image,
  },
  {
    id: 2,
    title: "Parrot Room",
    description:
      "The Parrot Rooms, covering an area of 250 sq.ft., offer both single and double occupancy options. These rooms are ideal for both business and leisure stays. The rooms can comfortably accommodate two adults and a child.",
    image: testimonial_image2,
  },
  {
    id: 3,
    title: "Pelican Suite (Duplex Suite)",
    description:
      "The Pelican(Suite) is a lavish accommodation that comes with a double bed, one bathroom and twin toilets.",
    image: testimonial_image,
  },
  {
    id: 4,
    title: "Crane (Three Room Cottage)",
    description:
      "The Crane (Three Room Cottage) is a lavish and complete haven. Ranging from lounges equipped with fireplaces, Crane (Three Room Cottage) is the ideal choice of vacation for a family.",
    image: testimonial_image2,
  },
  {
    id: 5,
    title: "Hornbill (Five Bedroom Cottage)",
    description:
      "The Hornbill (Five Bedroom Cottage) is the grandest and best accommodation that we have at Renest River Country Resort, Manali. The cottage comes with a lounge equipped with a fireplace.",
    image: testimonial_image,
  },
  {
    id: 6,
    title: "Canary Room (Superior)",
    description:
      "Our 260 sq. ft Canary rooms have all the amenities for a relaxing stay. These rooms can comfortably accommodate up to 3 adults and offers mesmerizing views.",
    image: testimonial_image2,
  },
];

const HomeOurRoomsCategories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [direction, setDirection] = useState(1);
  const intervalRef = useRef(null);

  // Adjust groupSize based on screen size
  const groupSize = isMobile ? 1 : window.innerWidth <= 1024 ? 2 : 3; // 1 div for mobile, 2 for tablet, 3 for desktop
  const totalGroups = Math.ceil(roomsData.length / groupSize);

  useEffect(() => {
    const updateSize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const getVisibleRooms = () => {
    const start = currentIndex * groupSize;
    return roomsData.slice(start, start + groupSize);
  };

  const handleDotClick = (index) => {
    if (index !== currentIndex) {
      clearInterval(intervalRef.current);
      setDirection(index > currentIndex ? 1 : -1);
      setCurrentIndex(index);
      startAutoSlide();
    }
  };

  const startAutoSlide = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % totalGroups);
    }, 3500);
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, [isMobile]);

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: (dir) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      transition: { duration: 0.5 },
    }),
  };

  return (
    <div className="w-full shadow-md pt-10 pb-10 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4">
        <h2 className="text-2xl md:text-3xl mb-10 text-center font-serif">
          Our Rooms Categories
        </h2>

        <div className="relative w-full h-[460px] flex justify-center items-center">
          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="flex justify-center gap-2 w-full absolute top-0 left-0 flex-wrap"
            >
              {getVisibleRooms().map((room) => (
                <div
                  key={room.id}
                  className="flex flex-col items-center p-3"
                  style={{
                    width: "400px",
                    height: "380px",
                    minWidth: "280px",
                    maxWidth: "400px",
                  }}
                >
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full object-cover mb-4"
                    style={{ height: "200px" }}
                  />
                  <h6 className="text-lg mb-2 text-center cursor-pointer font-serif relative group">
                    {room.title}
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-500 group-hover:w-full"></span>
                  </h6>
                  <p className="text-gray-600 text-sm px-2 text-justify leading-6">
                    {room.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div className="flex -mt-10 justify-center gap-2">
          {Array.from({ length: totalGroups }).map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 cursor-pointer rounded-full ${
                i === currentIndex ? "bg-black" : "bg-gray-400"
              }`}
              onClick={() => handleDotClick(i)}
              style={{ transition: "background 0.3s" }}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeOurRoomsCategories;
