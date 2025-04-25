import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { HotelData } from "../HotelData/HotelData";
import { motion } from "framer-motion";

const OursHotelsRooms = () => {
  const { hotelSlug } = useParams();
  const hotelInfo = HotelData[hotelSlug];

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => { 
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!hotelInfo) {
    return (
      <div className="text-center py-10">Hotel information not found.</div>
    );
  }

  const MotionDiv = isDesktop ? motion.div : "div";
  const MotionH3 = isDesktop ? motion.h3 : "h3";

  return (
    <div className="w-full shadow-md py-14 px-4">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center justify-center gap-12">
        {/* Heading */}
        <MotionH3
          className="text-3xl text-[#193531]"
          style={{ fontFamily: "'Playfair Display', serif" }}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Rooms
        </MotionH3>

        {/* Image and Text Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-14 w-full">
          {/* Rooms Images */}
          <MotionDiv
            className="w-full md:w-[55%] flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src={hotelInfo.roomsImages?.[0]}
              alt="Room Image"
              className="w-full h-[300px] md:h-[400px] object-cover"
            />
          </MotionDiv>

          {/* Rooms Text Content */}
          <MotionDiv
            className="w-full md:w-[45%] text-[14px] md:text-[18px] text-gray-700 space-y-6 leading-8 text-justify"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            {hotelInfo.roomsTextContent
              .split("\n")
              .filter((paragraph) => paragraph.trim() !== "")
              .map((paragraph, idx) => (
                <p key={idx}>{paragraph.trim()}</p>
              ))}
          </MotionDiv>
        </div>
      </div>
    </div>
  );
};

export default OursHotelsRooms;
