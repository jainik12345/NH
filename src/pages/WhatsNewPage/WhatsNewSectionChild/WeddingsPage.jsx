// /* eslint-disable no-unused-vars */
// import React from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// import weddingImage1 from "../../../assets/images/wedding_first.webp";
// import weddingImage2 from "../../../assets/images/wedding_second.avif";
// import weddingImage3 from "../../../assets/images/wedding_third.webp";

// import Sustainable_Luxury_Image from "../../../assets/images/Sustainable_Luxury_Image.png";
// import Wedding_Image from "../../../assets/images/Wedding_Image.png";

// const WeddingsPage = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="w-full flex flex-col items-center pt-10 pb-20 px-4 md:px-10 overflow-hidden">
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
//         className="text-2xl md:text-3xl mb-6 text-center"
//         style={{ fontFamily: "'Playfair Display', serif" }}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.2, duration: 0.8 }}
//       >
//         Weddings by Renest
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
//             Just as we offer experiential stays at Renest, so do we offer
//           </p>
//         </div>
//         {/* Image Right */}
//         <div className="flex-1">
//           <img
//             src={weddingImage1}
//             alt="Wedding Celebration"
//             className="w-full h-auto rounded-lg shadow-md"
//           />
//         </div>
//       </motion.div>

//       {/* Second Section (Reversed) */}
//       <motion.div
//         className="flex flex-col md:flex-row-reverse items-center gap-10 mb-20 w-full max-w-7xl"
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8, delay: 0.2 }}
//       >
//         {/* Text Right */}
//         <div className="flex-1 text-center md:text-left">
//           <p className="text-gray-600 leading-9 text-justify text-lg">
//             Whether it’s an intimate gathering or a grand celebration, we offer
//           </p>
//         </div>
//         {/* Image Left */}
//         <div className="flex-1">
//           <img
//             src={weddingImage2}
//             alt="Wedding Venue"
//             className="w-full h-auto rounded-lg shadow-md"
//           />
//         </div>
//       </motion.div>

//       {/* Third Section */}
//       <motion.div
//         className="flex flex-col md:flex-row items-center gap-10 w-full max-w-7xl"
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8, delay: 0.4 }}
//       >
//         {/* Text Left */}
//         <div className="flex-1 text-center md:text-left">
//           <p className="text-gray-600 leading-9 text-justify text-lg">
//             Let Renest be a part of your journey as you create unforgettable
//           </p>
//         </div>
//         {/* Image Right */}
//         <div className="flex-1">
//           <img
//             src={weddingImage3}
//             alt="Wedding Moments"
//             className="w-full h-auto rounded-lg shadow-md"
//           />
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default WeddingsPage;

/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

import weddingImage1 from "../../../assets/images/wedding_first.webp";
import weddingImage2 from "../../../assets/images/wedding_second.avif";
import weddingImage3 from "../../../assets/images/wedding_third.webp";

import Sustainable_Luxury_Image from "../../../assets/images/Sustainable_Luxury_Image.png";
import Wedding_Image from "../../../assets/images/Wedding_Image.png";

const WeddingsPage = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get current path

  const isSustainablePage = location.pathname === "/whats-new/sustainable";
  const isWeddingsPage = location.pathname === "/whats-new/weddings";

  // Common fadeIn animation
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: custom * 0.2,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.div
      className="w-full flex flex-col items-center pt-10 pb-20 px-4 md:px-10 overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      custom={0}
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
          whileHover={{ borderColor: "#be185d" }}
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
        custom={1}
      >
        Weddings by Renest
      </motion.h1>

      {/* First Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-10 mb-20 w-full max-w-7xl"
        variants={fadeInUp}
        custom={2}
      >
        {/* Text Left */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-gray-600 leading-9 text-justify text-lg">
            Just as we offer experiential stays at Renest, so do we offer
            experiential weddings. For us, weddings are not just an event but an
            experience which must be cherished and remembered for the rest of
            your lives. However, when it comes to delivering an experience it
            requires a lot of attention to detail, passion and creativity which
            we bring to each and every one of our weddings. At Renest we offer
            wedding destinations of all types. Choose your destination, your
            calling for your big day the Renest Way.
          </p>
        </div>
        {/* Image Right */}
        <div className="flex-1">
          <img
            src={weddingImage1}
            alt="Wedding Celebration"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </motion.div>

      {/* Second Section (Reversed) */}
      <motion.div
        className="flex flex-col md:flex-row-reverse items-center gap-10 mb-20 w-full max-w-7xl"
        variants={fadeInUp}
        custom={3}
      >
        {/* Text Right */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-gray-600 leading-9 text-justify text-lg">
            THE SUBLIME MOUNTAIN WEDDING (Renest Manali) For all those travel
            hungry, adventure seeking and mountain loving couples, Renest Manali
            is where you’d want to tie the knot. Have a wedding in the midst of
            mountains, creating an unforgettable experience for you as well as
            your family & friends. For Bookings call: +91 9816010005/ Mail:
            reservations.manali@renesthotels.com THE DIVINE WEDDING ( Renest
            Tirupati) Tie your wedding knot in the Spiritual Capital of Andhra
            Pradesh. If peace, serenity and tranquillity is what you seek,
            Renest Tirupati is the ideal destination for your big day. For
            Bookings call: +91 8886601604/ Mail:
            reservations.tirupati@renesthotels.com
          </p>
        </div>
        {/* Image Left */}
        <div className="flex-1">
          <img
            src={weddingImage2}
            alt="Wedding Venue"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </motion.div>

      {/* Third Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-10 w-full max-w-7xl"
        variants={fadeInUp}
        custom={4}
      >
        {/* Text Left */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-gray-600 leading-9 text-justify text-lg">
            Let Renest be a part of your journey as you create unforgettable
            wedding moments filled with love and joy.THE DREAMY WEDDING (Renest
            Jaipur) Jaipur has always been of the most popular destinations for
            the “Quintessential Indian Wedding”. If you have also dreamt of a
            flawless wedding in the Pink City, Renest Jaipur is where you’d want
            to fulfil it. For Bookings call: +91 141 664 4000 / Mail:
            reservations.jaipur@renesthotels.com THE SACRED WEDDING (Renest
            Shirdi ) Renest Shirdi is a destination where you can experience
            “The Sacred Wedding” in the true sense. Ours is the only Resort in
            Shirdi which is a Heritage Property with huge lawns, making your
            wedding truly “A Grand Affair”.
          </p>
        </div>
        {/* Image Right */}
        <div className="flex-1">
          <img
            src={weddingImage3}
            alt="Wedding Moments"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default WeddingsPage;
