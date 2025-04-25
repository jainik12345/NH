// /* eslint-disable no-unused-vars */

// import React from "react";
// import { useParams } from "react-router-dom";
// import { HotelData } from "../HotelData/HotelData";
// import { motion } from "framer-motion";

// const OursHotelsOverview = () => {
//   const { hotelSlug } = useParams();
//   const hotelInfo = HotelData[hotelSlug];

//   if (!hotelInfo) {
//     return (
//       <div className="text-center py-10">Hotel information not found.</div>
//     );
//   }

//   return (
//     <div className="w-full bg-amber-50 shadow-md pt-10 pb-10">
//       <div className="max-w-[1440px] mx-auto text-center px-4">
//         {/* Heading */}
//         <motion.h3
//           className="text-3xl text-[#193531] mb-10"
//           style={{ fontFamily: "'Playfair Display', serif" }}
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           Overview
//         </motion.h3>

//         {/* Overview Images */}
//         <motion.div
//           className="flex flex-wrap justify-center gap-6 mb-10"
//           initial="hidden"
//           animate="visible"
//           variants={{
//             hidden: {},
//             visible: {
//               transition: {
//                 staggerChildren: 0.2,
//               },
//             },
//           }}
//         >
//           {hotelInfo.overviewImages?.slice(0, 3).map((imageSrc, index) => (
//             <motion.img
//               key={index}
//               src={imageSrc}
//               alt={`Overview ${index + 1}`}
//               className="w-full max-w-[400px] h-[230px] object-cover  shadow-md"
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6, ease: "easeOut" }}
//             />
//           ))}
//         </motion.div>

//         {/* Overview Text */}
//         <motion.div
//           className="text-gray-700 leading-relaxed text-justify max-w-7xl mx-auto space-y-6 px-2 md:px-6"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
//         >
//           {hotelInfo.overviewText
//             .split("\n")
//             .filter((paragraph) => paragraph.trim() !== "")
//             .map((paragraph, idx) => (
//               <p
//                 key={idx}
//                 className="text-[14px] text-justify leading-7.5 md:text-[16px]"
//               >
//                 {paragraph.trim()}
//               </p>
//             ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default OursHotelsOverview;

/* eslint-disable no-unused-vars */
import React from "react";
import { useParams } from "react-router-dom";
import { HotelData } from "../HotelData/HotelData";
import { motion } from "framer-motion";

const OursHotelsOverview = () => {
  const { hotelSlug } = useParams(); 
  const hotelInfo = HotelData[hotelSlug];

  if (!hotelInfo) {
    return (
      <div className="text-center py-10">Hotel information not found.</div>
    );
  }

  return (
    <div className="w-full  shadow-md pt-10 pb-10">
      <div className="max-w-[1440px] mx-auto text-center px-4">
        {/* Heading */}
        <motion.h3
          className="text-3xl text-[#193531] mb-10"
          style={{ fontFamily: "'Playfair Display', serif" }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Overview
        </motion.h3>

        {/* Overview Images */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mb-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {hotelInfo.overviewImages?.slice(0, 3).map((imageSrc, index) => (
            <motion.img
              key={index}
              src={imageSrc}
              alt={`Overview ${index + 1}`}
              className="w-full max-w-[400px] h-[230px] object-cover shadow-md"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          ))}
        </motion.div>

        {/* Overview Text */}
        <motion.div
          className="text-gray-700 leading-relaxed text-justify max-w-7xl mx-auto space-y-6 px-2 md:px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          {hotelInfo.overviewText
            .split("\n")
            .filter((paragraph) => paragraph.trim() !== "")
            .map((paragraph, idx) => (
              <p
                key={idx}
                className="text-[14px] text-justify leading-7.5 md:text-[16px]"
              >
                {paragraph.trim()}
              </p>
            ))}
        </motion.div>
      </div>
    </div>
  );
};

export default OursHotelsOverview;
