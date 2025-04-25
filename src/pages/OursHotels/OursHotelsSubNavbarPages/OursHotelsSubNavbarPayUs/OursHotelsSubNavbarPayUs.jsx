// import React from "react";
// import OursHotelsSubNavbar from "../../OursHotelsSubNavbar/OursHotelsSubNavbar";

// const OursHotelsSubNavbarPayUs = () => {
//   return (
//     <div className="flex flex-col justify-center items-center">
//       <OursHotelsSubNavbar />

//       <div className="w-full bg-orange-50 shadow-md pt-10 pb-10">
//         <div className="max-w-[1440px] mx-auto text-center">
//           Pay Us Page
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OursHotelsSubNavbarPayUs;

import React from "react";
import { useParams } from "react-router-dom";
import { SubNavbarHotelData } from "../../HotelData/SubNavbarHotelData";
import OursHotelsSubNavbar from "../../OursHotelsSubNavbar/OursHotelsSubNavbar";

const OursHotelsSubNavbarPayUs = () => {
  const { hotelSlug } = useParams();
  const hotelInfo = SubNavbarHotelData[hotelSlug];

  if (!hotelInfo || !hotelInfo.navbarPayus) {
    return (
      <div className="text-center py-10">Payment information not found.</div>
    );
  }

  const { payustitle, payusDescription } = hotelInfo.navbarPayus;

  return (
    <div className="flex flex-col justify-center items-center">
      {/* <OursHotelsSubNavbar /> */}

      <div className="w-full shadow-md py-12 px-4 flex items-center">
        <div className="max-w-[1250px] mx-auto text-center space-y-6">
          <h2
            className="text-2xl md:text-3xl pb-1 md:pb-6  text-black"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {payustitle}
          </h2>
          <p className="text-[14px] md:text-[16px] text-black text-justify leading-relaxed">
            {payusDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OursHotelsSubNavbarPayUs;
