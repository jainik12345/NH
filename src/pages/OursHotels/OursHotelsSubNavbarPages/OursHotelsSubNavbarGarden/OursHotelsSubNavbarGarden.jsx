// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { SubNavbarHotelData } from "../../HotelData/SubNavbarHotelData";
// import { motion } from "framer-motion";
// import OursHotelsSubNavbar from "../../OursHotelsSubNavbar/OursHotelsSubNavbar";

// const OursHotelsSubNavbarGarden = () => {
//   const { hotelSlug } = useParams();
//   const hotelInfo = SubNavbarHotelData[hotelSlug];

//   const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

//   useEffect(() => {
//     const handleResize = () => setIsDesktop(window.innerWidth >= 768);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   if (!hotelInfo || !hotelInfo.navbarGarden) {
//     return (
//       <div className="text-center py-10">Garden information not found.</div>
//     );
//   }

//   const gardenData = hotelInfo.navbarGarden[0];
//   const MotionDiv = isDesktop ? motion.div : "div";
//   const MotionH3 = isDesktop ? motion.h3 : "h3";

//   return (
//     <div className="flex flex-col justify-center items-center">
//       <OursHotelsSubNavbar />

//       <div className="w-full bg-green-50 shadow-md py-14 px-4 overflow-hidden">
//         <div className="max-w-[1440px] mx-auto flex flex-col items-center justify-center gap-12">
//           {/* Heading */}
//           <MotionH3
//             className="text-3xl text-green-900"
//             style={{ fontFamily: "'Playfair Display', serif" }}
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//           >
//             {gardenData.gardenTitle}
//           </MotionH3>

//           {/* Image and Text Section */}
//           <div className="flex flex-col md:flex-row items-center justify-center gap-14 w-full">
//             {/* Garden Images */}
//             <MotionDiv
//               className="w-full md:w-[55%] flex justify-center"
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//             >
//               <img
//                 src={gardenData.gardenImages?.[0]}
//                 alt="Garden Image"
//                 className="w-full h-[300px] md:h-[400px] object-cover rounded-lg shadow-lg"
//               />
//             </MotionDiv>

//             {/* Garden Text Content */}
//             <MotionDiv
//               className="w-full md:w-[45%] text-[14px] md:text-[18px] text-gray-700 space-y-6 leading-8 text-justify"
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
//             >
//               {gardenData.gardenDescription &&
//                 gardenData.gardenDescription
//                   .split("\n")
//                   .filter((paragraph) => paragraph.trim() !== "")
//                   .map((paragraph, idx) => <p key={idx}>{paragraph.trim()}</p>)}
//             </MotionDiv>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OursHotelsSubNavbarGarden;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SubNavbarHotelData } from "../../HotelData/SubNavbarHotelData";
import { motion } from "framer-motion";
import OursHotelsSubNavbar from "../../OursHotelsSubNavbar/OursHotelsSubNavbar";

const OursHotelsSubNavbarGarden = () => {
  const { hotelSlug } = useParams();
  const hotelInfo = SubNavbarHotelData[hotelSlug];

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!hotelInfo || !hotelInfo.navbarGarden) {
    return (
      <div className="text-center py-10">Garden information not found.</div>
    );
  }

  const gardenData = hotelInfo.navbarGarden[0];
  const MotionDiv = isDesktop ? motion.div : "div";
  const MotionH2 = isDesktop ? motion.h2 : "h2";

  return (
    <div className="flex flex-col justify-center items-center">
      {/* <OursHotelsSubNavbar /> */}

      <div className="w-full shadow-md py-14 px-4 overflow-hidden">
        <div className="max-w-[1250px] mx-auto flex flex-col items-center justify-center gap-12">
          {/* Heading */}
          <MotionH2
            className="text-3xl text-black font-serif"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {gardenData.gardenTitle}
          </MotionH2>

          {/* Description */}
          <MotionDiv
            className="text-[14px] md:text-[18px] text-black space-y-6 leading-8 text-justify w-full md:w-[100%]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            {gardenData.gardenDescription &&
              gardenData.gardenDescription
                .split("\n")
                .filter((paragraph) => paragraph.trim() !== "")
                .map((paragraph, idx) => <p key={idx}>{paragraph.trim()}</p>)}
          </MotionDiv>

          {/* Image Grid */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
            {gardenData.gardenImages?.map((image, idx) => (
              <MotionDiv
                key={idx}
                className="w-full flex justify-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                <img
                  src={image}
                  alt={`Garden Image ${idx + 1}`}
                  className="w-full h-[300px] md:h-[350px] object-cover  shadow-lg"
                />
              </MotionDiv>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OursHotelsSubNavbarGarden;
