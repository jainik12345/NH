// import React from "react";
// import { HotelData } from "../HotelData/HotelData";
// import { useParams, Link } from "react-router-dom";

// const OursHotelsSubNavbar = () => {
//   const { hotelSlug } = useParams();
//   const currentHotel = HotelData[hotelSlug];

//   if (!currentHotel) return null;

//   return (
//     <div className="w-full bg-[#193531] sticky top-34 z-50">
//       <nav className="flex flex-wrap items-center gap-6 max-w-[1440px] mx-auto px-10 py-1">
//         {/* Hotel Name */}
//         <span className="text-white cursor-pointer text-[15.5px] font-bold whitespace-nowrap">
//           {currentHotel.hotelName} |
//         </span>

//         {/* Sub Menu Links */}
//         {currentHotel.subMenu &&
//           currentHotel.subMenu.map((item) => (
//             <Link
//               key={item.id}
//               to={`/${hotelSlug}/${item.id}`}
//               className="text-white text-[14px] hover:text-[#81d2c6] whitespace-nowrap"
//             >
//               {item.title}
//             </Link>
//           ))}
//       </nav>
//     </div>
//   );
// };

// export default OursHotelsSubNavbar;

// import React from "react";
// import { HotelData } from "../HotelData/HotelData";
// import { useParams, Link } from "react-router-dom";

// const OursHotelsSubNavbar = ({ showTopbar }) => {
//   const { hotelSlug } = useParams();
//   const currentHotel = HotelData[hotelSlug];

//   if (!currentHotel) return null;

//   return (
//     <div
//       className={`w-full bg-[#193531] sticky top-0 z-50 transition-all duration-300 ${
//         showTopbar ? "mt-16" : ""
//       }`}
//     >
//       <nav className="flex flex-wrap items-center gap-6 max-w-[1440px] mx-auto px-10 py-1.5">
//         {/* Hotel Name */}
//         <span className="text-white cursor-pointer text-[15.5px] font-bold whitespace-nowrap">
//           {currentHotel.hotelName} |
//         </span>

//         {/* Sub Menu Links */}
//         {currentHotel.subMenu &&
//           currentHotel.subMenu.map((item) => (
//             <Link
//               key={item.id}
//               to={`/${hotelSlug}/${item.id}`}
//               className="text-white text-[15px] hover:text-[#81d2c6] whitespace-nowrap"
//             >
//               {item.title}
//             </Link>
//           ))}
//       </nav>
//     </div>
//   );
// };

// export default OursHotelsSubNavbar;

// Active black :

import React from "react";
import { HotelData } from "../HotelData/HotelData";
import { useParams, NavLink } from "react-router-dom"; 

const OursHotelsSubNavbar = ({ showTopbar }) => {
  const { hotelSlug } = useParams();
  const currentHotel = HotelData[hotelSlug];

  if (!currentHotel) return null;

  return (
    <div
      className={`w-full bg-[#193531] sticky top-25 z-50 transition-all duration-300 ${
        showTopbar ? "-mt-0" : "mt-0"
      }`}
    >
      <nav className="flex flex-wrap items-center gap-1 md:gap-2 max-w-[1440px] mx-auto px-3 md:px-10">
        {/* Hotel Name */}
        <span className="text-white cursor-pointer text-[12px] md:text-[15.5px] font-bold whitespace-nowrap">
          {currentHotel.hotelName} |
        </span>

        {/* Sub Menu Links */}
        {currentHotel.subMenu &&
          currentHotel.subMenu.map((item) => (
            <NavLink
              key={item.id}
              to={`/${hotelSlug}/${item.id}`}
              className={({ isActive }) =>
                `text-white text-[12px]  md:text-[15px] hover:text-[#81d2c6] whitespace-nowrap px-1  md:px-2.5 py-1.5 ${
                  isActive ? "bg-black" : ""
                }`
              }
            >
              {item.title}
            </NavLink>
          ))}
      </nav>
    </div>
  );
};

export default OursHotelsSubNavbar;
