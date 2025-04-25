/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const PartnerWithUsSection = () => {
  return (
    <div className="w-full  pt-10 pb-16 text-center relative overflow-hidden">
      <div className="max-w-[1310px] mx-auto px-4 md:px-8 lg:px-10">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl text-black font-serif leading-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Partnering With Renest & Unique
        </motion.h2>

        <motion.p
          className="text-[15px] sm:text-[16px] italic mt-4 md:mt-6 text-gray-700 px-4 md:px-16 lg:px-32"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          We place high value on partnerships by establishing a long term
          two-way relationship that is committed to delivering strong profits.
        </motion.p>

        <motion.div
          className="bg-[#193531eb] text-white mt-10 md:mt-16 p-6 sm:p-8 md:p-10 max-w-6xl mx-auto text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl text-center font-serif mb-6">
            How It Works
          </h3>
          <ul className="list-disc list-inside space-y-3 text-sm sm:text-base leading-relaxed">
            <li>
              Provide Renest design and project documents which are complete
              blue prints for an ideal site.
            </li>
            <li>
              Assist in procurement of professional team, suppliers (FF&E, IT,
              MEP etc.) and contractors.
            </li>
            <li>Assist in setting program milestones.</li>
            <li>Support during design and (value) engineering.</li>
            <li>Advise on complying with Renest brand standards.</li>
            <li>
              Advise on procurement of pre-fabricated building elements (as
              applicable), FF&E, IT, etc.
            </li>
            <li>Review and approve mock-up room (as applicable).</li>
            <li>
              Assist on selection and be responsible for art management
              services.
            </li>
            <li>
              Quality review of finishes, FF&E, IT, systems, M&E, etc. during
              development.
            </li>
            <li>Acceptance of the building on behalf of Renest.</li>
            <li>Review of design and development documents and samples.</li>
          </ul>
        </motion.div>

        <motion.div
          className="flex justify-center md:justify-end mt-10 pr-0 md:pr-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <button className="bg-[#193531] hover:bg-black text-white py-3 px-8 cursor-pointer text-base md:text-lg font-medium shadow-md transition-all duration-500">
            Contact Us
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default PartnerWithUsSection;
