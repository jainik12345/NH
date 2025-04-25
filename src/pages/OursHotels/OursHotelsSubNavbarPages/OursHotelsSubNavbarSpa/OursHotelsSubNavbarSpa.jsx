/* eslint-disable no-unused-vars */
// import React from "react";
// import { useParams } from "react-router-dom";
// import { SubNavbarHotelData } from "../../HotelData/SubNavbarHotelData";
// import OursHotelsSubNavbar from "../../OursHotelsSubNavbar/OursHotelsSubNavbar";

// const OursHotelsSubNavbarSpa = () => {
//   const { hotelSlug } = useParams();
//   const hotelInfo = SubNavbarHotelData[hotelSlug];

//   if (!hotelInfo || !hotelInfo.navbarSpa) {
//     return <div className="text-center py-10">Spa information not found.</div>;
//   }

//   const { spaDescription, spaImage } = hotelInfo.navbarSpa;

//   return (
//     <div className="flex flex-col justify-center items-center">
//       <OursHotelsSubNavbar />

//       <div className="w-full bg-emerald-50 shadow-md py-12 px-4">
//         <div className="max-w-[1440px] mx-auto space-y-10">
//           {/* Title */}
//           <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 text-center">
//             Cedar Spa in {hotelInfo.hotelName}
//           </h2>

//           {/* Content */}
//           <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
//             {/* Description */}
//             <div className="w-full md:w-1/2 text-gray-700 text-base md:text-lg leading-relaxed">
//               {spaDescription}
//             </div>
//             {/* Image */}
//             <div className="w-full md:w-1/2">
//               <img
//                 src={spaImage[0]}
//                 alt="Spa"
//                 className="w-full h-[300px] md:h-[400px] object-cover rounded-lg shadow-md"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OursHotelsSubNavbarSpa;

import React from "react";
import { useParams } from "react-router-dom";
import { SubNavbarHotelData } from "../../HotelData/SubNavbarHotelData";
import { motion } from "framer-motion"; 
import OursHotelsSubNavbar from "../../OursHotelsSubNavbar/OursHotelsSubNavbar";

const OursHotelsSubNavbarSpa = () => {
  const { hotelSlug } = useParams();
  const hotelInfo = SubNavbarHotelData[hotelSlug];

  if (!hotelInfo || !hotelInfo.navbarSpa) {
    return <div className="text-center py-10">Spa information not found.</div>;
  }

  const { spaDescription, spaImage } = hotelInfo.navbarSpa;
  const hotelName = hotelInfo.hotelName || "Hotel"; 

  return (
    <div className="flex flex-col justify-center items-center">
      {/* <OursHotelsSubNavbar /> */}

      <div className="w-full  shadow-md py-12 px-4">
        <div className="max-w-[1440px] mx-auto space-y-10">
          {/* Title */}
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-emerald-800 text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Cedar Spa in {hotelName}
          </motion.h2>

          {/* Content */}
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Image */}
            <motion.div 
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <img
                src={spaImage[0]}
                alt="Spa"
                className="w-full h-[300px] md:h-[400px] object-cover rounded-lg shadow-md"
              />
            </motion.div>

            {/* Vertical Line for Desktop */}
            <div className="hidden md:block w-[2px] h-[300px] bg-emerald-300"></div>

            {/* Text Content */}
            <motion.div 
              className="w-full md:w-1/2 text-gray-700 text-base md:text-lg leading-relaxed flex justify-center items-center text-center md:text-left"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              {spaDescription}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OursHotelsSubNavbarSpa;
