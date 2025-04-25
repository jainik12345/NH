/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Media_Room from "../../../assets/images/Media_Room.avif";

const MediaRoom = () => {
  const mediaData = [
    {
      id: 1,
      image: Media_Room,
      text: "For hotels like ours, upskilling has become more than a necessity",
      by: "FHRAI MAGAZINE | December, 2021",
    },
    {
      id: 2,
      image: Media_Room,
      text: "Renest Hotels & Resorts launches upscale boutique resort in Bandhavgarh",
      by: "BW HOTELIER | November 19, 2021",
    },
    {
      id: 3,
      image: Media_Room,
      text: "Sudhanshu Rathee appointed General Manager - North, Renest Hotels & Resorts",
      by: "TODAY'S TRAVELLER | October 09, 2021",
    },
    {
      id: 4,
      image: Media_Room,
      text: "Renest Hotels & Resorts to launch pocket-friendly sub-brand",
      by: "ET HOSPITALITY WORLD | February 19, 2021",
    },
  ];

  return (
    <div className="w-full  pt-10 pb-20">
      <div className="max-w-[1440px] mx-auto text-center px-4">
        <h1
          className="text-4xl  mb-12"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Renest Hotels & Resorts in Media
        </h1>

        <div className="flex flex-col items-center gap-10">
          <HoverCard data={mediaData[0]} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mediaData.slice(1).map((item) => (
              <HoverCard key={item.id} data={item} />
              
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const HoverCard = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden  shadow-lg group w-auto h-[350px] md:h-[400px] cursor-pointer mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={data.image}
        alt="media"
        className="w-full h-[300px] md:h-[400px]  object-cover transition-all duration-500 group-hover:opacity-70"
      />

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 150, damping: 18 }}
            className="absolute left-0 right-0 p-4 bg-black bg-opacity-50 text-white"
            style={{ bottom: 0 }}
          >
            <p className="text-[17px] font-semibold mb-6">{data.text}</p>
            <p className="text-[13px] mt-2">{data.by}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MediaRoom;
