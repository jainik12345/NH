/* eslint-disable no-unused-vars */
// import React from "react";
// import { useParams } from "react-router-dom";
// import { HotelData } from "../HotelData/HotelData";

// const OursHotelsAmenities = () => {
//   const { hotelSlug } = useParams();
//   const hotel = HotelData[hotelSlug];

//   if (!hotel) {
//     return (
//       <div className="w-full pt-10 pb-10 text-center text-red-500 text-xl">
//         Hotel data not found.
//       </div>
//     );
//   }

//   const amenities = hotel.amenities || [];

//   return (
//     <div className="w-full pt-10 pb-10">
//       <div className="max-w-[1400px] mx-auto px-4">
//         <h2
//           className="text-3xl text-center mb-12 text-gray-800"
//           style={{ fontFamily: "'Playfair Display', serif" }}
//         >
//           Hotel Amenities
//         </h2>

//         {Array.from({ length: Math.ceil(amenities.length / 3) }).map(
//           (_, rowIndex) => (
//             <div key={rowIndex} className="mb-5">
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {amenities
//                   .slice(rowIndex * 3, rowIndex * 3 + 3)
//                   .map((item, idx) => (
//                     <div
//                       key={idx}
//                       className="flex items-start gap-4 p-4 transition duration-300 hover:bg-gray-100 rounded-lg"
//                     >
//                       <div className="text-green-700 text-2xl mt-1">
//                         {/* {item.icon} */}
//                         {item.icon && <item.icon />}
//                       </div>
//                       <p className="text-gray-700 text-base leading-relaxed">
//                         {item.text}
//                       </p>
//                     </div>
//                   ))}
//               </div>
//               {rowIndex !== Math.ceil(amenities.length / 3) - 1 && (
//                 <hr className="my-5 border-t border-gray-300 w-full" />
//               )}
//             </div>
//           )
//         )}
//       </div>
//     </div>
//   );
// };

// export default OursHotelsAmenities;

import React from "react";
import { useParams } from "react-router-dom";
import { HotelData } from "../HotelData/HotelData";
import { motion } from "framer-motion";

const OursHotelsAmenities = () => {
  const { hotelSlug } = useParams();
  const hotel = HotelData[hotelSlug];

  if (!hotel) {
    return (
      <div className="w-full pt-10 pb-10 text-center text-red-500 text-xl">
        Hotel data not found.
      </div>
    );
  }

  const amenities = hotel.amenities || [];

  return (
    <div className="w-full pt-10 pb-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <motion.h2
          className="text-3xl  md:text-4xl text-center mb-12 text-gray-800 "
          style={{ fontFamily: "'Playfair Display', serif" }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hotel Amenities
        </motion.h2>

        {Array.from({ length: Math.ceil(amenities.length / 3) }).map(
          (_, rowIndex) => (
            <div key={rowIndex} className="mb-8">
              <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {amenities
                  .slice(rowIndex * 3, rowIndex * 3 + 3)
                  .map((item, idx) => (
                    <motion.div
                      key={idx}
                      className="flex cursor-pointer items-start gap-4 p-5 border border-gray-200 shadow-sm hover:shadow-md rounded-xl bg-white transition duration-300"
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-green-700 text-2xl mt-1">
                        {item.icon && <item.icon />}
                      </div>
                      <p className="text-gray-700 text-base md:text-[17px] leading-relaxed">
                        {item.text}
                      </p>
                    </motion.div>
                  ))}
              </div>

              {rowIndex !== Math.ceil(amenities.length / 3) - 1 && (
                <hr className="my-6 border-t border-gray-300 w-full" />
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default OursHotelsAmenities;
