// /* eslint-disable no-unused-vars */
// import React from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import Sustainable_Luxury_Image from "../../../assets/images/Sustainable_Luxury_Image.png";
// import Wedding_Image from "../../../assets/images/Wedding_Image.png";

// import image1 from "../../../assets/images/Sustainable_Luxury_Image_first.webp";
// import image2 from "../../../assets/images/Sustainable_Luxury_Image_second.webp";

// const SustainablePage = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="w-full  flex flex-col items-center pt-10 pb-20 px-4 md:px-10 overflow-hidden">
//       {/* Top Buttons */}
//       <motion.div
//         className="flex flex-col md:flex-row items-center justify-center gap-10 mb-20"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         {/* Button 1 */}
//         <motion.button
//           whileHover={{ borderColor: "#15803d" }}
//           whileTap={{ scale: 0.95 }}
//           onClick={() => navigate("/whats-new/sustainable")}
//           className="flex items-center gap-4 px-10 py-5 border-2 border-gray-200 rounded-full text-2xl font-bold text-green-700 transition-all duration-500 hover:border-green-700 active:scale-95 cursor-pointer"
//         >
//           <img
//             src={Sustainable_Luxury_Image}
//             alt="Sustainable Icon"
//             className="w-8 h-8"
//           />
//           Sustainable Luxury
//         </motion.button>

//         {/* Button 2 */}
//         <motion.button
//           whileHover={{ borderColor: "#be185d" }}
//           whileTap={{ scale: 0.95 }}
//           onClick={() => navigate("/whats-new/weddings")}
//           className="flex items-center gap-4 px-10 py-5 border-2 border-gray-200 rounded-full text-2xl font-bold text-pink-700 transition-all duration-500 hover:border-pink-700 active:scale-95 cursor-pointer"
//         >
//           <img src={Wedding_Image} alt="Wedding Icon" className="w-8 h-8" />
//           Weddings by Renest
//         </motion.button>
//       </motion.div>

//       {/* Page Heading */}
//       <motion.h1
//         className="text-2xl md:text-3xl   mb-16 text-center"
//         style={{ fontFamily: "'Playfair Display', serif" }}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.5, duration: 0.8 }}
//       >
//         Sustainable Luxury by Renest
//       </motion.h1>

//       {/* First Section */}
//       <motion.div
//         className="flex flex-col md:flex-row items-center gap-10 mb-20 w-full max-w-7xl"
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//       >
//         {/* Text Left */}
//         <div className="flex-1 text-center md:text-left">
//           <p className="text-gray-600 leading-9 text-justify text-lg">
//             The newly launched Boutique Hotel chain - Renest Hotels and Resorts
//           </p>
//         </div>
//         {/* Image Right */}
//         <div className="flex-1">
//           <img
//             src={image1}
//             alt="Sustainability"
//             className="w-full h-auto rounded-lg shadow-md"
//           />
//         </div>
//       </motion.div>

//       {/* Second Section */}
//       <motion.div
//         className="flex flex-col md:flex-row-reverse items-center gap-10 w-full max-w-7xl"
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8, delay: 0.2 }}
//       >
//         {/* Text Right (in code left because of reverse) */}
//         <div className="flex-1 text-center md:text-left">
//           <p className="text-gray-600 leading-9 text-justify text-lg">
//           </p>
//         </div>
//         {/* Image Left (in code right because of reverse) */}
//         <div className="flex-1">
//           <img
//             src={image2}
//             alt="Eco Hospitality"
//             className="w-full h-auto rounded-lg shadow-md"
//           />
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default SustainablePage;

/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import Sustainable_Luxury_Image from "../../../assets/images/Sustainable_Luxury_Image.png";
import Wedding_Image from "../../../assets/images/Wedding_Image.png";

import image1 from "../../../assets/images/Sustainable_Luxury_Image_first.webp";
import image2 from "../../../assets/images/Sustainable_Luxury_Image_second.webp";

const SustainablePage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isSustainablePage = location.pathname === "/whats-new/sustainable";
  const isWeddingsPage = location.pathname === "/whats-new/weddings";

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="w-full flex flex-col items-center pt-10 pb-20 px-4 md:px-10 overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      {/* Top Buttons */}
      <motion.div
        className="flex flex-col md:flex-row items-center justify-center gap-10 mb-20"
        variants={fadeInUp}
      >
        {/* Button 1 */}
        <motion.button
          whileHover={{ borderColor: "#15803d" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/whats-new/sustainable")}
          className={`flex items-center gap-4 px-10 py-5 border-2 rounded-full text-2xl font-bold transition-all duration-500 active:scale-95 cursor-pointer ${
            isSustainablePage
              ? "border-green-700 text-green-700"
              : "border-gray-200 text-green-700 hover:border-green-700"
          }`}
        >
          <img
            src={Sustainable_Luxury_Image}
            alt="Sustainable Icon"
            className="w-8 h-8"
          />
          Sustainable Luxury
        </motion.button>

        {/* Button 2 */}
        <motion.button
          whileHover={{ borderColor: "#be185d"}}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/whats-new/weddings")}
          className={`flex items-center gap-4 px-10 py-5 border-2 rounded-full text-2xl font-bold transition-all duration-500 active:scale-95 cursor-pointer ${
            isWeddingsPage
              ? "border-pink-700 text-pink-700"
              : "border-gray-200 text-pink-700 hover:border-pink-700"
          }`}
        >
          <img src={Wedding_Image} alt="Wedding Icon" className="w-8 h-8" />
          Weddings by Renest
        </motion.button>
      </motion.div>

      {/* Page Heading */}
      <motion.h1
        className="text-2xl md:text-3xl mb-16 text-center"
        style={{ fontFamily: "'Playfair Display', serif" }}
        variants={fadeInUp}
      >
        Sustainable Luxury by Renest
      </motion.h1>

      {/* First Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-10 mb-20 w-full max-w-7xl"
        variants={fadeInUp}
      >
        {/* Text Left */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-gray-600 leading-9 text-justify text-lg">
            The newly launched Boutique Hotel chain - Renest Hotels and Resorts
            has been consistent with its dedication towards environmental
            sustainability since day 1 of its opening back in 2019. The entire
            concept of the Renest is based on the amalgamation of nature with
            comfort. From making use of soap dispensers in their washrooms, to
            save on massive amounts of plastic otherwise utilized in soap,
            bodywash and shampoo bottles, to each and every amenity of the hotel
            including sewing, shaving & women’s kit all made with recycled
            paper, the hotel chain is making endeavours to be as sustainable as
            possible. Taking it a step further, the hotel chain has also started
            a #PlantwithRenest initiative in which guests get to sow plants
            using seeds provided by the hotel itself. These seeds are presented
            in no ordinary manner but they are attached at the back of every
            pencil and pen used in the hotel. Ranging from Fern, Pine , Marigold
            etc the guests may end up with a variety of options in hand.
          </p>
        </div>
        {/* Image Right */}
        <div className="flex-1">
          <img
            src={image1}
            alt="Sustainability"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </motion.div>

      {/* Second Section */}
      <motion.div
        className="flex flex-col md:flex-row-reverse items-center gap-10 w-full max-w-7xl"
        variants={fadeInUp}
      >
        {/* Text Right */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-gray-600 leading-9 text-justify text-lg">
            Renest is also focusing on the inclusion of organic farming in most
            of its properties. The practice is currently active in Shirdi but
            they Hotel Chain has plans to initiate the same in other properties
            too. Speaking to the Executive Director-Renest Hotels & Resorts- Mr.
            Rahul Rai, about their future plans for Renest – “As we are coming
            up with new properties, we trying to incorporate as many green
            practices as we can. By integrating these practices in our
            portfolio, we want to provide hospitality which is sustainable ,
            responsible & long term both for our guests and the environment” .
          </p>
        </div>
        {/* Image Left */}
        <div className="flex-1">
          <img
            src={image2}
            alt="Eco Hospitality"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SustainablePage;
