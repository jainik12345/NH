// import React from "react";
// import EmailCalling from "../../../components/HomeOurHotels/EmailCalling";
// import { HotelData } from "../HotelData/HotelData";

// const OursHotelsEmailCalling = ({ hotelSlug }) => {
//   const hotelInfo = HotelData[hotelSlug];

//   if (!hotelInfo) {
//     return (
//       <div className="w-full h-60 flex justify-center items-center text-gray-500">
//         No contact info available for this hotel.
//       </div>
//     );
//   }

//   return (
//     <EmailCalling
//       hotelName={hotelInfo.hotelName}
//       hotelAddress={hotelInfo.hotelAddress}
//       phoneNumber={hotelInfo.phoneNumber}
//       emails={hotelInfo.emails}
//     />
//   );
// };

// export default OursHotelsEmailCalling;

import React from "react";
import EmailCalling from "../../../components/HomeOurHotels/EmailCalling";
import { useParams } from "react-router-dom";
import { HotelData } from "../HotelData/HotelData";

const OursHotelsEmailCalling = () => {
  const { hotelSlug } = useParams(); 
  const hotelInfo = HotelData[hotelSlug]; 

  if (!hotelInfo) {
    return (
      <div className="w-full h-60 flex justify-center items-center text-gray-500">
        No contact info available for this hotel.
      </div>
    );
  }

  return (
    <EmailCalling
      hotelName={hotelInfo.hotelName}
      hotelAddress={hotelInfo.hotelAddress}
      phoneNumber={hotelInfo.phoneNumber}
      emails={hotelInfo.emails}
    />
  );
};

export default OursHotelsEmailCalling;
