/* eslint-disable no-unused-vars */
import React from "react";
import { FiPhone } from "react-icons/fi";
import { MdMail } from "react-icons/md";
import { motion } from "framer-motion";

const EmailCalling = ({ hotelName, hotelAddress, phoneNumber, emails }) => {
  return (
    <div className="w-full px-4 py-10 flex justify-center items-center bg-[rgba(25,53,49,.8)] overflow-hidden">
      <div className="max-w-[1250px] w-full text-center space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-2xl sm:text-3xl md:text-4xl text-white"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {hotelName}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className=" sm:text-[14px] md:text-[16px] text-white px-2"
        >
          {hotelAddress}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="flex flex-col sm:flex-row sm:justify-center sm:items-center items-start gap-8 flex-wrap mt-8"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex justify-center items-center bg-white rounded-full">
              <FiPhone
                size={20}
                className="text-[#193535] text-xl sm:text-2xl"
              />
            </div>
            <a
              href={`https://wa.me/${phoneNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative sm:text-[14px] md:text-[16px] text-white font-medium group"
            >
              {phoneNumber}
              <span className="block h-0.5 max-w-0 group-hover:max-w-full transition-all duration-500 bg-white"></span>
            </a>
          </div>

          {emails &&
            emails.map((email, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-8 h-8 flex justify-center items-center bg-white rounded-full">
                  <MdMail
                    size={22}
                    className="text-[#193535] text-xl sm:text-2xl"
                  />
                </div>
                <a
                  href={`mailto:${email}`}
                  className="relative sm:text-[14px] md:text-[16px] md:text-lg text-white font-medium group"
                >
                  {email}
                  <span className="block h-0.5 max-w-0 group-hover:max-w-full transition-all duration-500 bg-white"></span>
                </a>
              </div>
            ))}
        </motion.div>
      </div>
    </div>
  );
};

export default EmailCalling;
