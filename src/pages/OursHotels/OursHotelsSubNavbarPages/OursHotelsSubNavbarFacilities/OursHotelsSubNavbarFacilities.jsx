/* eslint-disable no-unused-vars */
// import React from "react";
// import { useParams } from "react-router-dom";
// import { SubNavbarHotelData } from "../../HotelData/SubNavbarHotelData";
// import OursHotelsSubNavbar from "../../OursHotelsSubNavbar/OursHotelsSubNavbar";

// const OursHotelsSubNavbarFacilities = () => {
//   const { hotelSlug } = useParams();
//   const hotelInfo = SubNavbarHotelData[hotelSlug];

//   if (!hotelInfo || !hotelInfo.navbarFacilities) {
//     return (
//       <div className="text-center py-10">Facilities information not found.</div>
//     );
//   }

//   const facilitiesData = hotelInfo.navbarFacilities[0];

//   return (
//     <div className="flex flex-col justify-center items-center">
//       {/* <OursHotelsSubNavbar /> */}

//       <div className="w-full  shadow-md pt-10 pb-10">
//         <div className="max-w-[1440px] mx-auto px-4">
//           {/* Title and Description */}
//           <h2 className="text-3xl text-center text-black font-serif mb-8">
//             {facilitiesData.Facilitiestitle}
//           </h2>
//           <p className="text-lg text-gray-700 mb-10 text-justify p-1 md:p-3  md:text-center">
//             {facilitiesData.FacilitiesDescription}
//           </p>

//           {/* List of Amenities */}
//           <div className="grid grid-cols-1 p-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
//             {facilitiesData.amenities &&
//               facilitiesData.amenities.map((amenity, idx) => (
//                 <div
//                   key={idx}
//                   className="flex items-center space-x-4 p-4 bg-white shadow-md rounded-lg"
//                 >
//                   <amenity.icon className="text-4xl text-black" />
//                   <p className="text-lg text-gray-800">{amenity.text}</p>
//                 </div>
//               ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OursHotelsSubNavbarFacilities;

import React from "react";
import { useParams } from "react-router-dom";
import { SubNavbarHotelData } from "../../HotelData/SubNavbarHotelData";
import { motion } from "framer-motion";

const OursHotelsSubNavbarFacilities = () => {
  const { hotelSlug } = useParams();
  const hotelInfo = SubNavbarHotelData[hotelSlug];

  if (!hotelInfo || !hotelInfo.navbarFacilities) {
    return (
      <div className="text-center py-10 text-red-500 text-xl">
        Facilities information not found.
      </div>
    );
  }

  const facilitiesData = hotelInfo.navbarFacilities[0];

  return (
    <div className="w-full py-12 bg-gray-50">
      <div className="max-w-[1440px] mx-auto px-4">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl text-center text-gray-800 font-serif mb-6"
        >
          {facilitiesData.Facilitiestitle}
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto text-center px-2"
        >
          {facilitiesData.FacilitiesDescription}
        </motion.p>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {facilitiesData.amenities &&
            facilitiesData.amenities.map((amenity, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="flex items-start gap-4 cursor-pointer p-4 bg-white rounded-xl shadow hover:shadow-md transition duration-300"
              >
                <div className="text-green-700 text-3xl">
                  {amenity.icon && <amenity.icon />}
                </div>
                <p className="text-base text-gray-700 leading-snug">
                  {amenity.text}
                </p>
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default OursHotelsSubNavbarFacilities;
