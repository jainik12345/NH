/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { SubNavbarHotelData } from "../../HotelData/SubNavbarHotelData";
import OursHotelsSubNavbar from "../../OursHotelsSubNavbar/OursHotelsSubNavbar";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import SeatingArrangementTable from "./SeatingArrangementTable";

const OursHotelsSubNavbarConfrenceEvent = () => {
  const { hotelSlug } = useParams();
  const hotelInfo = SubNavbarHotelData[hotelSlug];

  const [popupOpen, setPopupOpen] = useState(false);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  if (!hotelInfo || !hotelInfo.navbarConferencesEvents) {
    return (
      <div className="text-center py-10">
        Conference/Event information not found.
      </div>
    );
  }

  const { title, description, image, lastImages, seatingArrangements } =
    hotelInfo.navbarConferencesEvents;

  const openPopup = (index) => {
    setCurrentImgIndex(index);
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const nextImage = () => {
    setCurrentImgIndex((prev) => (prev + 1) % lastImages.length);
  };

  const prevImage = () => {
    setCurrentImgIndex(
      (prev) => (prev - 1 + lastImages.length) % lastImages.length
    );
  };

  return (
    <div className="flex flex-col justify-center items-center">
      {/* <OursHotelsSubNavbar /> */}

      <div className="w-full shadow-md py-12 px-4">
        <div className="max-w-[1400px] mx-auto space-y-12">
          {/* Title */}
          <motion.h2
            className="text-3xl md:text-4xl text-black text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Banquet Halls in {hotelInfo.hotelName} at Renest
          </motion.h2>

          {/* Description + Main Image */}

          <motion.div
            className="flex flex-col md:flex-row md:items-center gap-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="w-full md:w-1/2 text-gray-700 text-base md:text-lg leading-10 text-justify">
              {description}
            </div>

            {/* Main Image */}
            <div className="w-full md:w-1/2">
              <motion.img
                src={image}
                alt="Conference Event"
                className="w-full h-[300px] md:h-[400px] object-cover  shadow-2xl"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
              />
            </div>
          </motion.div>

          <SeatingArrangementTable seatingData={seatingArrangements} />

          {/* Last Images Gallery */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {lastImages.map((img, idx) => (
              <motion.img
                key={idx}
                src={img}
                alt={`Gallery ${idx}`}
                className="w-full h-[250px] object-cover shadow-md cursor-pointer hover:scale-101 transition-transform duration-300"
                onClick={() => openPopup(idx)}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Popup */}
      <AnimatePresence>
        {popupOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-transparent bg-opacity-70 backdrop-blur-[4px] flex items-center justify-center z-50"
            onClick={closePopup}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5, opacity: 0, y: 100 }}
              transition={{ duration: 0.4 }}
              className="relative max-w-[90%] max-h-[90%] flex flex-col items-center"
            >
              {/* Close Button */}
              <button
                onClick={closePopup}
                className="absolute top-4 right-4 text-white text-2xl cursor-pointer"
              >
                <FaTimes />
              </button>

              {/* Image */}
              <img
                src={lastImages[currentImgIndex]}
                alt="Popup"
                className="max-w-full max-h-[90vh] object-contain x shadow-lg"
              />

              {/* Left Navigation */}
              <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                <button
                  onClick={prevImage}
                  className="bg-black bg-opacity-30 cursor-pointer hover:bg-opacity-60 p-2 rounded-full text-white"
                >
                  <FaChevronLeft size={30} />
                </button>
              </div>

              {/* Right Navigation */}
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                <button
                  onClick={nextImage}
                  className="bg-black bg-opacity-30 cursor-pointer hover:bg-opacity-60 p-2 rounded-full text-white"
                >
                  <FaChevronRight size={30} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OursHotelsSubNavbarConfrenceEvent;
