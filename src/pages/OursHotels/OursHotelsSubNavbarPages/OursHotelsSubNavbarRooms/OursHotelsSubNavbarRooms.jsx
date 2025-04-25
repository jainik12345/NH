/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import OursHotelsSubNavbar from "../../OursHotelsSubNavbar/OursHotelsSubNavbar";
import MoreInfoButton from "../../../../components/Buttons/Moreinfo";
import { SubNavbarHotelData } from "../../HotelData/SubNavbarHotelData";

const OursHotelsSubNavbarRooms = () => {
  const { hotelSlug } = useParams();
  const navigate = useNavigate();
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const hotelInfo = SubNavbarHotelData[hotelSlug];

  if (!hotelInfo) {
    return (
      <div className="text-center py-10">Hotel information not found.</div>
    );
  }

  const MotionDiv = isDesktop ? motion.div : "div";
  const MotionH3 = isDesktop ? motion.h3 : "h3";

  return (
    <>
      {/* <OursHotelsSubNavbar /> */}

      <div className="flex flex-col justify-center items-center pt-10 pb-10 overflow-hidden">
        {/* Room Buttons */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-6 flex-wrap"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {hotelInfo.navbarRooms?.map((room, index) => (
            <motion.button
              key={index}
              whileHover={{ borderColor: "#15803d" }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                navigate(
                  `/${hotelSlug}/rooms/${encodeURIComponent(
                    room.roomName.toLowerCase().replace(/\s+/g, "-")
                  )}`
                )
              }
              className="flex items-center gap-3 px-8 py-4 border-2 border-gray-300 rounded-full text-xl font-bold text-green-700 transition-all duration-500 hover:border-green-700 active:scale-95 cursor-pointer"
            >
              {room.roomName}
            </motion.button>
          ))}
        </motion.div>

        {/* Section Title */}
        <MotionH3
          className="text-3xl md:text-4xl my-10 text-center"
          style={{ fontFamily: "'Playfair Display', serif" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Rooms in Mansarovar at {hotelInfo.hotelName}
        </MotionH3>

        {/* Room List */}
        <div className="max-w-[1250px] w-full grid md:grid-cols-3 gap-8 px-4 mb-20">
          {hotelInfo.navbarRooms?.map((room) => (
            <MotionDiv
              key={room.id}
              className="bg-white shadow-lg overflow-hidden flex flex-col items-center h-full "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              <div className="relative w-full h-60 bg-gray-200 flex items-center justify-center overflow-hidden group">
                {room.roomImages?.length > 0 ? (
                  <img
                    src={room.roomImages[0]}
                    alt={room.roomName}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <motion.div
                    className="text-gray-500 text-xl font-semibold"
                    whileHover={{ scale: 1.08 }}
                  >
                    No Image Available
                  </motion.div>
                )}
              </div>

              <div className="p-6 flex flex-col items-center flex-grow">
                <h2 className="text-xl font-semibold mb-4 text-center">
                  {room.roomName}
                </h2>
                <p className="text-gray-600 mb-6 text-justify flex-grow">
                  {room.roomtitle}
                </p>

                <Link
                  to={`/${hotelSlug}/rooms/${encodeURIComponent(
                    room.roomName.toLowerCase().replace(/\s+/g, "-")
                  )}`}
                >
                  <MoreInfoButton text="More Info" />
                </Link>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </>
  );
};

export default OursHotelsSubNavbarRooms;
