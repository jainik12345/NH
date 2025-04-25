// /* eslint-disable no-unused-vars */

// import React, { useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { SubNavbarHotelData } from "../../HotelData/SubNavbarHotelData";
// import OursHotelsSubNavbar from "../../OursHotelsSubNavbar/OursHotelsSubNavbar";
// import { motion } from "framer-motion";

// const OursHotelsSubNavbarDiningDetails = () => {
//   const { hotelSlug, diningName } = useParams();
//   const navigate = useNavigate();
//   const hotelInfo = SubNavbarHotelData[hotelSlug];

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [diningName]);

//   if (!hotelInfo) {
//     return (
//       <div className="text-center py-10">Hotel information not found.</div>
//     );
//   }

//   const dining = hotelInfo.navbarDining.find(
//     (d) => d.diningName.toLowerCase().replace(/\s+/g, "-") === diningName
//   );

//   if (!dining) {
//     return <div className="text-center py-10">Dining option not found.</div>;
//   }

//   return (
//     <>
//       {/* <OursHotelsSubNavbar /> */}

//       <div className="flex flex-col items-center pt-10 pb-5">
//         {/* Switch Dining Buttons */}
//         <motion.div
//           className="flex flex-wrap justify-center gap-6 mb-10 px-4"
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           {hotelInfo.navbarDining.map((diningItem, index) => {
//             const diningSlug = diningItem.diningName
//               .toLowerCase()
//               .replace(/\s+/g, "-");
//             const isActive = diningSlug === diningName;

//             return (
//               <motion.button
//                 key={index}
//                 whileHover={{ borderColor: "#15803d" }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() =>
//                   navigate(
//                     `/${hotelSlug}/dining/${encodeURIComponent(diningSlug)}`
//                   )
//                 }
//                 className={`flex items-center gap-3 px-8 py-3 border-2 rounded-full text-lg font-semibold transition-all duration-300 cursor-pointer
//           ${
//             isActive
//               ? "border-green-700 text-green-700 bg-green-50"
//               : "border-gray-300 text-gray-500 hover:border-green-700 hover:text-green-700 hover:bg-green-50"
//           }
//         `}
//               >
//                 {diningItem.diningName}
//               </motion.button>
//             );
//           })}
//         </motion.div>

//         {/* Dining Details */}
//         <div className="flex flex-col justify-center items-center">
//           <h2 className="text-4xl mb-6 text-center">{dining.diningName}</h2>

//           <div className="w-full max-w-[1000px] px-4">
//             <img
//               src={dining.diningImages[0]}
//               alt={dining.diningName}
//               className="object-cover w-full h-[400px] shadow-md mb-8"
//             />
//           </div>

//           <p className="text-lg text-gray-600 mb-6 max-w-[900px] text-center">
//             {dining.diningDescription}
//           </p>

//           <div className="text-xl font-semibold text-gray-700 mt-6">
//             <h3 className="text-2xl mb-2">Timing:</h3>
//             <p className="text-gray-600">{dining.diningTiming}</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default OursHotelsSubNavbarDiningDetails;

/* eslint-disable no-unused-vars */

import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { SubNavbarHotelData } from "../../HotelData/SubNavbarHotelData";
import { motion } from "framer-motion";

const OursHotelsSubNavbarDiningDetails = () => {
  const { hotelSlug, diningName } = useParams();
  const navigate = useNavigate();
  const hotelInfo = SubNavbarHotelData[hotelSlug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [diningName]);

  if (!hotelInfo) {
    return (
      <div className="text-center py-10">Hotel information not found.</div>
    );
  }

  const dining = hotelInfo.navbarDining.find(
    (d) => d.diningName.toLowerCase().replace(/\s+/g, "-") === diningName
  );

  if (!dining) {
    return <div className="text-center py-10">Dining option not found.</div>;
  }

  return (
    <>
      {/* <OursHotelsSubNavbar /> */}

      <div className="flex flex-col items-center pt-10 pb-5">
        {/* Switch Dining Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mb-10 px-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {hotelInfo.navbarDining.map((diningItem, index) => {
            const diningSlug = diningItem.diningName
              .toLowerCase()
              .replace(/\s+/g, "-");
            const isActive = diningSlug === diningName;

            return (
              <motion.button
                key={index}
                whileHover={{ borderColor: "#15803d" }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  navigate(
                    `/${hotelSlug}/dining/${encodeURIComponent(diningSlug)}`
                  )
                }
                className={`flex items-center gap-3 px-8 py-3 border-2 rounded-full text-lg font-semibold transition-all duration-300 cursor-pointer
                ${
                  isActive
                    ? "border-green-700 text-green-700 bg-green-50"
                    : "border-gray-300 text-gray-500 hover:border-green-700 hover:text-green-700 hover:bg-green-50"
                }`}
              >
                {diningItem.diningName}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Dining Details */}
        <div className="flex flex-col justify-center items-start px-4 w-full max-w-[1200px]">
          <h2 className="text-4xl mb-6 text-left">{dining.diningName}</h2>

          <div className="w-full max-w-[1200px] mb-8">
            <img
              src={dining.diningImages[0]}
              alt={dining.diningName}
              className="object-cover w-full h-[350px] shadow-md"
            />
          </div>

          <p className="text-lg text-gray-600 mb-6 max-w-[1200px] text-left">
            {dining.diningDescription}
          </p>

          <div className="text-xl font-semibold text-gray-700 mt-6">
            <h3 className="text-2xl mb-2">Timing:</h3>
            <p className="text-gray-600">{dining.diningTiming}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OursHotelsSubNavbarDiningDetails;
