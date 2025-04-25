// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import { HotelData } from "../HotelData/HotelData";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// const OursHotelsDining = () => {
//   const { hotelSlug } = useParams();
//   const currentHotel = HotelData[hotelSlug];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const itemsPerPage = 3;

//   if (
//     !currentHotel ||
//     !currentHotel.diningDetails ||
//     currentHotel.diningDetails.length === 0
//   ) {
//     return (
//       <div className="text-center text-gray-500">
//         No Dining Details Available
//       </div>
//     );
//   }

//   const diningDetails = currentHotel.diningDetails;

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? diningDetails.length - 1 : prevIndex - 1
//     );
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % diningDetails.length);
//   };

//   const getVisibleItems = () => {
//     let visibleItems = [];
//     for (let i = 0; i < itemsPerPage; i++) {
//       visibleItems.push(
//         diningDetails[(currentIndex + i) % diningDetails.length]
//       );
//     }
//     return visibleItems;
//   };

//   return (
//     <div className="w-full bg-amber-50 shadow-md pt-10 pb-10 px-4">
//       <div className="max-w-[1400px] mx-auto my-0 text-center">
//         <h2
//           className="text-3xl mb-8 text-[#193531]"
//           style={{ fontFamily: "'Playfair Display', serif" }}
//         >
//           Dining
//         </h2>

//         {diningDetails.length <= 3 ? (
//           <div className="flex flex-wrap justify-center gap-8">
//             {diningDetails.map((item, index) => (
//               <div
//                 key={index}
//                 className="w-full md:w-[440px] flex flex-col items-center p-4"
//               >
//                 <img
//                   src={item.img[0]}
//                   alt={item.title}
//                   className="w-full h-60 object-cover mb-4"
//                 />
//                 <h3
//                   className="text-lg mb-2"
//                   style={{ fontFamily: "'Playfair Display', serif" }}
//                 >
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-600 text-justify leading-7">
//                   {item.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="relative flex items-center justify-center mt-10">
//             <button
//               onClick={prevSlide}
//               className="absolute left-0 transform -translate-y-1/2 bg-white cursor-pointer p-2 rounded-full shadow-lg hover:bg-gray-100 z-10"
//             >
//               <FaArrowLeft />
//             </button>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-8">
//               {getVisibleItems().map((item, index) => (
//                 <div
//                   key={index}
//                   className="flex flex-col items-center p-4 transition-all"
//                 >
//                   <img
//                     src={item.img[0]}
//                     alt={item.title}
//                     className="w-full h-60 object-cover mb-4 "
//                   />
//                   <h3
//                     className="text-lg mb-2"
//                     style={{ fontFamily: "'Playfair Display', serif" }}
//                   >
//                     {item.title}
//                   </h3>
//                   <p className="text-gray-600 text-justify">
//                     {item.description}
//                   </p>
//                 </div>
//               ))}
//             </div>

//             <button
//               onClick={nextSlide}
//               className="absolute right-0 transform -translate-y-1/2 bg-white cursor-pointer p-2 rounded-full shadow-lg hover:bg-gray-100 z-10"
//             >
//               <FaArrowRight />
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default OursHotelsDining;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { HotelData } from "../HotelData/HotelData";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const OursHotelsDining = () => {
  const { hotelSlug } = useParams();
  const currentHotel = HotelData[hotelSlug];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const itemsPerPage = 3;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (
    !currentHotel ||
    !currentHotel.diningDetails ||
    currentHotel.diningDetails.length === 0
  ) {
    return (
      <div className="text-center text-gray-500">
        No Dining Details Available
      </div>
    );
  }

  const diningDetails = currentHotel.diningDetails;

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? diningDetails.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % diningDetails.length);
  };

  const getVisibleItems = () => {
    let visibleItems = [];
    for (let i = 0; i < itemsPerPage; i++) {
      visibleItems.push(
        diningDetails[(currentIndex + i) % diningDetails.length]
      );
    }
    return visibleItems;
  };

  return (
    <div className="w-full shadow-md pt-10 pb-10 px-4">
      <div className="max-w-[1400px] mx-auto text-center">
        <h2
          className="text-3xl mb-8 text-[#193531]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Dining
        </h2>

        {diningDetails.length <= 3 || isMobile ? (
          // --- Mobile view: show all cards one below another ---
          <div className="flex flex-wrap justify-center gap-8">
            {diningDetails.map((item, index) => (
              <div
                key={index}
                className="w-full md:w-[440px] flex flex-col items-center p-4"
              >
                <img
                  src={item.img[0]}
                  alt={item.title}
                  className="w-full h-60 object-cover mb-4"
                />
                {/* <h3
                  className="text-lg mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {item.title}
                </h3> */}
                <h3
                  className="text-lg mb-6 cursor-pointer relative inline-block before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-black before:transition-all before:duration-600 hover:before:w-full"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {item.title}
                </h3>

                <p className="text-gray-600 text-justify leading-7">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        ) : (
          // --- Desktop view: sliding 3 cards with arrows ---
          <div className="relative flex items-center justify-center mt-10">
            <button
              onClick={prevSlide}
              className="absolute left-0 transform -translate-y-1/2 bg-white cursor-pointer p-2 rounded-full shadow-lg hover:bg-gray-100 z-10"
            >
              <FaArrowLeft />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-8">
              {getVisibleItems().map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 transition-all"
                >
                  <img
                    src={item.img[0]}
                    alt={item.title}
                    className="w-full h-60 object-cover mb-4"
                  />
                  <h3
                    className="text-lg mb-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-justify">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="absolute right-0 transform -translate-y-1/2 bg-white cursor-pointer p-2 rounded-full shadow-lg hover:bg-gray-100 z-10"
            >
              <FaArrowRight />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OursHotelsDining;
