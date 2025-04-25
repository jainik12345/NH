/* eslint-disable no-unused-vars */

import React from "react";
import { motion } from "framer-motion";
import { MdEmail, MdPhone } from "react-icons/md";
import { Link } from "react-router-dom";

const hotelsData = [
  {
    title: "Renest River Country Resort, Manali",
    address:
      "Renest River Country Resort, Manali, NH21, Rangri, Manali, Himachal Pradesh 175131, India",
    mapLink: "",
    phone: "+91 9816010005",
  },
  {
    title: "Renest Shraddha Inn - Shirdi",
    address:
      "Renest Shraddha Inn Shirdi, Pimpalwadi Rd, Dattanagar, Shirdi, Maharashtra 423109, India",
    mapLink: "",
    phone: "+91 9823098240",
  },
  {
    title: "Renest Tirupati - Hotel Vihas",
    address:
      "#18-8-40/B, LEELA MAHAL CENTRE, Tirumala bypass Road, Tirupati, Andhra Pradesh 517501, India",
    mapLink: "",
    phone: "+91 8886601604",
  },
  {
    title: "Renest Gandhidham",
    address:
      "Plot No.78, Sector 8, Behind Tagore Garden, Tagore Road, Gandhidham (Kutch) 370201, India",
    mapLink: "",
    phone: "+91 9978998313",
  },
  {
    title: "Renest Haridwar",
    address:
      "Highway, Haridwar - Dehradun Rd, adjoining Shridhar Ashram, Dudhadhari Chowk, Haridwar, Uttarakhand - 249410, India",
    mapLink: "",
    phone: "+91 9520893301",
  },
  {
    title: "Renest Jaipur",
    address:
      "Gopal Pura by pass road, near Ganga Jamuna Petrol Pump, New Aatish Market, Mansarovar, Jaipur, Rajasthan 302020, India",
    mapLink: "",
    phone: "+91 1416644009",
  },
  {
    title: "Renest Calangute, Goa",
    address:
      "2/8-C, Village Calangute, Naika Vaddo, Bardez, Goa - 403516, India",
    mapLink: "",
    phone: "+91 8956861615",
  },
  {
    title: "Renest Dunsvirk Court Mussoorie",
    address:
      "Vincent Hill, Baroda Estate Near Library Chowk, Mussoorie, Uttarakhand - 248179, India",
    mapLink: "",
    phone: "+91 9084724670",
  },
];

const ContactUsSection = () => {
  return (
    <div className="w-full min-h-screen bg-cover bg-center flex justify-center items-center p-6">
      <div className="max-w-[1200px] w-full text-black">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl text-center mb-8 font-['Playfair_Display']"
        >
          Renest Hotels & Resorts - Directory
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-center mb-10 gap-4 text-center text-lg"
        >
          <p>Reservations:</p>
          <a
            href="https://wa.me/917900222211"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-0.5 relative group transition-all duration-300"
          >
            <MdPhone size={20} className="-mt-1" />
            <span className="overflow-hidden">
              <span className="relative after:absolute after:left-0 after:bottom-0 after:h-[2.5px] after:w-0 after:bg-black after:transition-all after:duration-600 group-hover:after:w-full">
                +91 79 0022 2211
              </span>
            </span>
          </a>
          Or
          <a
            href="mailto:reservations@renesthotels.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 relative group transition-all duration-300"
          >
            <MdEmail size={20} />
            <span className="overflow-hidden">
              <span className="relative after:absolute after:left-0 after:bottom-0 after:h-[2.5px] after:w-0 after:bg-black after:transition-all after:duration-600 group-hover:after:w-full">
                reservations@renesthotels.com
              </span>
            </span>
          </a>
        </motion.div>

        <div className="grid grid-cols-1 text-white md:grid-cols-2 gap-8">
          {hotelsData.map((hotel, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col rounded-b-3xl overflow-hidden shadow-lg bg-opacity-80 transition-all duration-500"
            >
              <div className="bg-[#193531] p-2">
                <h2 className="text-[16px] text-white text-center">
                  {hotel.title}
                </h2>
              </div>
              <hr className="border-black" />
              <div className="bg-[#00000069] p-5 text-left text-sm space-y-3">
                <p>{hotel.address}</p>

                <Link
                  to={hotel.mapLink}
                  className=" text-blue-200 hover:text-blue-400 block"
                >
                  Map
                </Link>

                <a
                  href={`https://wa.me/${hotel.phone.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Phone : {hotel.phone}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
