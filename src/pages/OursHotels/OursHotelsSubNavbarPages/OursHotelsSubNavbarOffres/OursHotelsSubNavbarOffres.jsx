/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import OursHotelsSubNavbar from "../../OursHotelsSubNavbar/OursHotelsSubNavbar";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import MoreInfoButton from "../../../../components/Buttons/Moreinfo";
 
import { SubNavbarHotelData } from "../../HotelData/SubNavbarHotelData";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const OursHotelsSubNavbarOffres = () => {
  const { hotelSlug } = useParams();
  const [selectedOffer, setSelectedOffer] = useState(null);
 
  const offers = SubNavbarHotelData[hotelSlug]?.navbarOffers || [];

  const openModal = (offer) => setSelectedOffer(offer);
  const closeModal = () => setSelectedOffer(null);

  return (
    <div className="flex flex-col justify-center items-center">
      {/* <OursHotelsSubNavbar /> */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full  shadow-md pt-10 pb-10 text-center"
      >
        <div className="max-w-[1440px] mx-auto px-4">
          <motion.h2
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[22px] sm:text-[26px] md:text-[30px] font-bold text-black mb-8"
          >
            Offers at Renest Hotels & Resorts
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {offers.map((offer) => (
              <motion.div
                variants={cardVariants}
                key={offer.id}
                className="overflow-hidden bg-white shadow-lg hover:shadow-xl transition duration-300 flex flex-col h-full"
              >
                <img
                  src={offer.image[0]}
                  alt={offer.title}
                  className="w-full h-[250px] object-cover"
                />
                <div className="p-6 flex flex-col justify-between flex-1">
                  <h3 className="text-[18px] text-center font-semibold mb-5 -mt-3 text-black">
                    {offer.title}
                  </h3>
                  <div onClick={() => openModal(offer)} className="mt-auto">
                    <MoreInfoButton text="More Info" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedOffer && (
            <motion.div
              className="fixed inset-0 bg-black/20 backdrop-blur-xl z-50 flex items-center justify-center px-4 sm:px-10 md:px-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="bg-white p-10 w-full max-w-6xl max-h-[90vh] overflow-hidden relative flex flex-col md:flex-row shadow-2xl"
              >
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-3xl text-gray-700 cursor-pointer transition z-10"
                >
                  <IoClose />
                </button>

                <div className="w-full md:w-1/2 max-h-[50vh] md:max-h-[90vh] flex items-center justify-center p-2">
                  <img
                    src={selectedOffer.image[0]}
                    alt={selectedOffer.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-8 flex flex-col text-left overflow-y-auto max-h-[90vh]">
                  <h3 className="text-[22px] sm:text-[26px] md:text-[30px] font-bold mb-4 text-black leading-tight">
                    {selectedOffer.title}
                  </h3>

                  <p className="text-gray-700 whitespace-pre-line text-[16px] sm:text-[17px] leading-relaxed mb-6">
                    {selectedOffer.content.split("Call:")[0]}
                  </p>

                  {(() => {
                    const phoneRegex = /Call:\s*(\+?\d[\d\s]*)/i;
                    const match = selectedOffer.content.match(phoneRegex);
                    const phoneNumber = match ? match[1].trim() : "";
                    const cleanPhoneNumber = phoneNumber
                      .replace(/\s+/g, "")
                      .replace("+", "");

                    return phoneNumber ? (
                      <a
                        href={`https://wa.me/${cleanPhoneNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative inline-block text-[18px] text-black mt-2 hover:after:w-[150px] after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-600"
                      >
                        {phoneNumber}
                      </a>
                    ) : null;
                  })()}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default OursHotelsSubNavbarOffres;
