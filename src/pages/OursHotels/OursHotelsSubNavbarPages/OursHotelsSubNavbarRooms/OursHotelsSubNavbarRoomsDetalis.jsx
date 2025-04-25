/* eslint-disable no-unused-vars */

import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { SubNavbarHotelData } from "../../HotelData/SubNavbarHotelData";
import OursHotelsSubNavbar from "../../OursHotelsSubNavbar/OursHotelsSubNavbar";
import { motion } from "framer-motion";

const OursHotelsSubNavbarRoomsDetails = () => {
  const { hotelSlug, roomName } = useParams();
  const navigate = useNavigate();
  const hotelInfo = SubNavbarHotelData[hotelSlug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [roomName]);

  if (!hotelInfo) {
    return (
      <div className="text-center py-10">Hotel information not found.</div>
    );
  }

  const room = hotelInfo.navbarRooms.find(
    (room) => room.roomName.toLowerCase().replace(/\s+/g, "-") === roomName
  );

  if (!room) {
    return <div className="text-center py-10">Room not found.</div>;
  }

  return (
    <>
      {/* <OursHotelsSubNavbar /> */}

      <div className="flex flex-col items-center pt-10 pb-5">
        {/* Switch Room Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mb-10 px-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {hotelInfo.navbarRooms.map((roomItem, index) => {
            const roomSlug = roomItem.roomName
              .toLowerCase()
              .replace(/\s+/g, "-");
            const isActive = roomSlug === roomName;

            return (
              <motion.button
                key={index}
                whileHover={{ borderColor: "#15803d" }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  navigate(
                    `/${hotelSlug}/rooms/${encodeURIComponent(roomSlug)}`
                  )
                }
                className={`flex items-center gap-3 px-8 py-3 border-2 rounded-full text-lg font-semibold transition-all duration-300 cursor-pointer
                ${
                  isActive
                    ? "border-green-700 text-green-700 bg-green-50"
                    : "border-gray-300 text-gray-500 hover:border-green-700 hover:text-green-700 hover:bg-green-50"
                }`}
              >
                {roomItem.roomName}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Room Details */}
        <div className="flex flex-col justify-center items-start px-4 w-full max-w-[1200px]">
          {/* <h2 className="text-4xl mb-6 text-center">{room.roomName}</h2> */}

          <h2
            className="text-3xl mb-5 text-center w-full  text-gray-800"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {room.roomName}
          </h2>

          <div className="w-full max-w-[1200px] mb-8">
            <img
              src={room.roomImages[0]}
              alt={room.roomName}
              className="object-cover w-full h-[380px] shadow-md"
            />
          </div>

          <p className="text-lg text-gray-600 mb-6 max-w-[1200px] text-justify">
            {room.roomDescription}
          </p>

          {/* <div className="text-xl font-semibold text-gray-700 mt-6">
            <h3 className="text-2xl mb-2">Amenities:</h3>
            <ul className="list-disc pl-6 text-gray-600">
              {room.roomAmenities.split(",").map((amenity, index) => (
                <li key={index} className="mb-2">
                  {amenity.trim()}
                </li>
              ))}
            </ul>
          </div> */}

          {/* Amenities Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full mt-10"
          >
            <h3
              className="text-3xl font-semibold text-gray-800 mb-8 text-center"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Amenities
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 mb-5 gap-x-12 gap-y-2 px-4">
              {room.roomAmenities.split(",").map((amenity, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.04 }}
                  className="list-none text-gray-700 text-base flex items-start gap-2"
                >
                  <span className="text-[#193531] text-xl ">•</span>
                  <span>{amenity.trim()}</span>
                </motion.li>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default OursHotelsSubNavbarRoomsDetails;
