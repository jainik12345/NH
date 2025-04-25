/* eslint-disable no-unused-vars */

import React from "react";
import { motion } from "framer-motion";

const HomeAboutHotel = () => {
  return (
    <div className="w-full py-10 px-4 shadow-md">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-[1250px] mx-auto text-justify"
      >
        <h2
          className="text-3xl text-center md:text-3xl  text-gray-800 mb-10"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          About Renest Hotels & Resorts
        </h2>

        <div className="text-black  text-[14px] leading-9 md:text-[16px] space-y-6">
          <p>
            Renest Hotels & Resorts is a distinctive collection of boutique
            hotels and resorts that provide experiential stays amidst nature, in
            picturesque locations across India.
          </p>
          <p>
            With hotels and resorts in key locations of temple towns like
            Shirdi, Tirupati, and Haridwar; popular hill stations like Manali
            and Mussoorie; business hubs like Jaipur and Gandhidham; and the
            vibrant coastal destination of Goa — we strive to deliver memorable
            holiday experiences to all types of travellers.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default HomeAboutHotel;
