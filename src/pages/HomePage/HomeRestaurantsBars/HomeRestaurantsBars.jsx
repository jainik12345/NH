/* eslint-disable no-unused-vars */

import React from "react";
import { motion } from "framer-motion";
import image from "../../../assets/images/home_image_slider_1.webp";

const restaurantsData = [
  {
    id: 1,
    image: image,
    title: "Tribe",
    desc: "Enjoy an exquisite rooftop dining experience with a panoramic view of the city skyline.",
  },
  {
    id: 2,
    image: image,
    title: "Culturati",
    desc: "Speciality dining option offering the best of local cuisine of the region with a focus on seasonal produce.",
  },
  {
    id: 3,
    image: image,
    title: "Jugnu",
    desc: "'Jugnu' is our In-house bar with an international wine list and a seasonal cocktail menu.",
  },
];

const HomeRestaurantsBars = () => {
  return (
    <div className="w-full shadow-md pt-10 pb-10">
      <div className="max-w-[1250px] mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl mb-10 text-center"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Restaurants and Bars
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {restaurantsData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="overflow-hidden "
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[250px] object-cover"
              />
              <div className="py-6 leading-7 text-center">
                <h3
                  className="text-xl cursor-pointer mb-4 relative group inline-block"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {item.title}
                  <span
                    className="block h-[2px] 
                  max-w-0 bg-black transition-all duration-500 group-hover:max-w-full"
                  ></span>
                </h3>

                <p className="text-gray-700 text-left p-1">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeRestaurantsBars;
