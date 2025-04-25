/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import OursHotelsSubNavbar from "../../OursHotelsSubNavbar/OursHotelsSubNavbar";
import { SubNavbarHotelData } from "../../HotelData/SubNavbarHotelData";
import { motion, AnimatePresence } from "framer-motion";

const OursHotelsSubNavbarLocation = () => {
  const { hotelSlug } = useParams();
  const hotelInfo = SubNavbarHotelData[hotelSlug];
  const { navbarLocation } = hotelInfo;

  const [selectedTitleIndex, setSelectedTitleIndex] = useState(0);
  const [selectedChildIndex, setSelectedChildIndex] = useState(0);

  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");

  const selectedSection = navbarLocation[selectedTitleIndex];
  const selectedChild = selectedSection.children[selectedChildIndex];

  const handleGetDirection = () => {
    if (!fromLocation || !toLocation) {
      alert("Please select both From and To locations!");
      return;
    }
    console.log("Get directions from", fromLocation, "to", toLocation);
  };

  return (
    <div className="flex flex-col shadow-md">
      {/* <OursHotelsSubNavbar /> */}

      <div className="flex justify-center flex-wrap gap-4 my-6">
        {navbarLocation.map((section, idx) => (
          <motion.button
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            key={idx}
            onClick={() => {
              setSelectedTitleIndex(idx);
              setSelectedChildIndex(0);
              setFromLocation("");
              setToLocation("");
            }}
            className={`px-5 cursor-pointer py-2 rounded-full font-semibold transition ${
              selectedTitleIndex === idx
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {section.title}
          </motion.button>
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-8 max-w-[1440px] mx-auto w-full px-4 py-10">
        {/* Left Sidebar */}
        <div className="w-full md:w-1/4 space-y-4">
          {selectedSection.children.map((child, idx) => (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              key={idx}
              onClick={() => setSelectedChildIndex(idx)}
              className={`cursor-pointer p-4 rounded-2xl transition border ${
                selectedChildIndex === idx
                  ? "bg-blue-100 border-blue-500"
                  : "bg-white border-gray-200"
              }`}
            >
              {child.name}
            </motion.div>
          ))}
        </div>

        {/* Center Google Map */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-2/4"
        >
          <div className="overflow-hidden shadow-lg h-[300px] md:h-full rounded-2xl">
            <iframe
              title={selectedChild.name}
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                selectedChild.name
              )}&output=embed`}
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>

        {/* Right Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedChild.name + "-content"}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/4 bg-white rounded-3xl p-6 shadow-lg space-y-6"
          >
            <motion.img
              src={selectedChild.image[0]}
              alt={selectedChild.name}
              className="w-full h-[200px] md:h-[250px] object-cover rounded-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            />
            <h2 className="text-2xl font-bold text-center">
              {selectedChild.name}
            </h2>
            <p className="text-gray-700 leading-relaxed text-center md:text-left">
              {selectedChild.description}
            </p>

            {/* Address & Button */}
            <div className="space-y-2 mt-4 text-center md:text-left">
              <div className="text-gray-600">
                <strong>Address:</strong> {selectedChild.address}
              </div>
              <a
                href={selectedChild.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition"
              >
                View on Google Maps
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 🚀 Final Updated: From-To Selector and Get Direction */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-[1440px] w-full mx-auto my-10 px-4"
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 bg-white p-8 rounded-3xl shadow-2xl">
          {/* From Selector */}
          <div className="flex flex-col w-full md:w-1/3">
            <label className="mb-2 text-gray-700 font-semibold text-lg">
              From
            </label>
            <select
              value={fromLocation}
              onChange={(e) => setFromLocation(e.target.value)}
              className="w-full border-2 cursor-pointer border-gray-300 rounded-2xl px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-base"
            >
              <option value="" className="py-4">
                Select From
              </option>
              {navbarLocation.flatMap((section) =>
                section.children.map((child, idx) => (
                  <option
                    key={`${section.title}-${idx}`}
                    value={child.name}
                    className="py-4"
                  >
                    {child.name}
                  </option>
                ))
              )}
            </select>
          </div>

          {/* To Selector */}
          <div className="flex flex-col w-full md:w-1/3">
            <label className="mb-2 text-gray-700 font-semibold text-lg">
              To
            </label>
            <select
              value={toLocation}
              onChange={(e) => setToLocation(e.target.value)}
              className="w-full border-2 cursor-pointer border-gray-300 rounded-2xl px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-base"
            >
              <option value="" className="py-4">
                Select To
              </option>
              {navbarLocation.flatMap((section) =>
                section.children.map((child, idx) => (
                  <option
                    key={`${section.title}-${idx}`}
                    value={child.name}
                    className="py-4"
                  >
                    {child.name}
                  </option>
                ))
              )}
            </select>
          </div>

          {/* Get Direction Button */}
          <div className="flex justify-center w-full md:w-auto mt-6 md:mt-10">
            <button
              onClick={handleGetDirection}
              className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-full transition text-lg"
            >
              Get Direction
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default OursHotelsSubNavbarLocation;
