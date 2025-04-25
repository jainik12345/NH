import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { HotelData } from "../HotelData/HotelData";
import { motion } from "framer-motion";

const OursHotelsMeetingsEvents = () => {
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
          Meetings & Events
        </MotionH3>

        <div className="flex flex-col md:flex-row items-center justify-center gap-14 w-full">
          <MotionDiv
            className="w-full md:w-[55%] flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src={hotelInfo.meetingEventImages?.[0]}
              alt="Meeting and Event Image"
              className="w-full h-[300px] md:h-[400px] object-cover"
            />
          </MotionDiv>

          <MotionDiv
            className="w-full md:w-[45%] text-[14px] md:text-[18px] text-gray-700 space-y-6 leading-8 text-justify"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            {hotelInfo.meetingEventTextContent
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

export default OursHotelsMeetingsEvents;
