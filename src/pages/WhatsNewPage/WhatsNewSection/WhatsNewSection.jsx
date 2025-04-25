/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import whats_new_image_1 from "../../../assets/images/whats_new_image_1.avif";
import whats_new_image_2 from "../../../assets/images/whats_new_image_2.avif";
import Sustainable_Luxury_Image from "../../../assets/images/Sustainable_Luxury_Image.png";
import Wedding_Image from "../../../assets/images/Wedding_Image.png";
import MoreInfoButton from "../../../components/Buttons/Moreinfo";

const WhatsNewPage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full  flex flex-col items-center pt-10 pb-20  overflow-hidden">
      {/* Top Buttons */}
      <motion.div
        className="flex flex-col md:flex-row items-center justify-center gap-10 mb-20"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Button 1 */}
        <motion.button
          whileHover={{ borderColor: "#15803d" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/whats-new/sustainable")}
          className="flex items-center gap-4 px-10 py-5 border-2 border-gray-200 rounded-full text-2xl font-bold text-green-700 transition-all duration-500 hover:border-green-700 active:scale-95 cursor-pointer"
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
          className="flex items-center gap-4 px-10 py-5 border-2 border-gray-200 rounded-full text-2xl font-bold text-pink-700 transition-all duration-500 hover:border-pink-700 active:scale-95 cursor-pointer"
        >
          <img src={Wedding_Image} alt="Wedding Icon" className="w-8 h-8" />
          Weddings by Renest
        </motion.button>
      </motion.div>

      {/* Title */}
      <motion.h1
        className="text-3xl md:text-4xl mb-16 text-center"
        style={{ fontFamily: "'Playfair Display', serif" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        What's Brewing At Renest!
      </motion.h1>

      {/* Two Cards */}
      <motion.div
        className="max-w-[1000px] w-full grid md:grid-cols-2 gap-8 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        {/* First Card */}
        <motion.div
          className="bg-white shadow-xl overflow-hidden flex flex-col items-center h-full"
          transition={{ type: "spring", stiffness: 200 }}
        >
          <div className="relative w-full h-56 overflow-hidden group">
            <motion.img
              src={whats_new_image_1}
              alt="Sustainable Luxury"
              className="w-full h-full object-cover filter blur-[0.5px] cursor-pointer group-hover:blur-0 group-hover:scale-105 transition-all duration-600 ease-in-out hover:blur-none"
              whileHover={{ scale: 1.08 }}
            />
          </div>
          <div className="p-6 flex flex-col items-center flex-grow">
            <h2 className="text-xl font-semibold mb-4 text-center">
              Sustainable Luxury
            </h2>
            <p className="text-gray-600 mb-6 text-justify flex-grow">
              The newly launched Boutique Hotel chain - Renest Hotels and
              Resorts has been consistent with its dedication towards
              environmental sustainability since day 1 of its opening back in
              2019.
            </p>
            <button onClick={() => navigate("/whats-new/sustainable")}>
              <MoreInfoButton text="More Info" />
            </button>
          </div>
        </motion.div>

        {/* Second Card */}
        <motion.div
          className="bg-white shadow-xl overflow-hidden flex flex-col items-center h-full"
          transition={{ type: "spring", stiffness: 200 }}
        >
          <div className="relative w-full h-56 overflow-hidden group">
            <motion.img
              src={whats_new_image_2}
              alt="Weddings by Renest"
              className="w-full h-full object-cover filter blur-[0.5px] cursor-pointer group-hover:blur-0 group-hover:scale-105 transition-all duration-600 ease-in-out hover:blur-none"
              whileHover={{ scale: 1.08 }}
            />
          </div>
          <div className="p-6 flex flex-col items-center flex-grow">
            <h2 className="text-xl font-semibold mb-4 text-center">
              Weddings by Renest
            </h2>
            <p className="text-gray-600 mb-6 text-justify flex-grow">
              Just as we offer experiential stays at Renest, so do we offer
              experiential weddings. For us, weddings are not just an event but
              an experience which must be cherished and remembered for the rest
              of your lives.
            </p>
            <button onClick={() => navigate("/whats-new/weddings")}>
              <MoreInfoButton text="More Info" />
            </button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WhatsNewPage;
