// import React from "react";
// import ImageSlider from "../../../components/HomeOurHotels/ImageSlider";
// import { HotelData } from "../HotelData/HotelData";

// const OursHotelsImageSlider = ({ hotelSlug }) => {
//   const hotelInfo = HotelData[hotelSlug];
//   const images = hotelInfo?.images || [];

//   if (images.length === 0) {
//     return (
//       <div className="w-full h-[60vh] flex items-center justify-center text-gray-500">
//         No images available for this hotel.
//       </div>
//     );
//   }

//   return (
//     <div className="w-full">
//       <ImageSlider images={images} />
//     </div>
//   );
// };

// export default OursHotelsImageSlider;


import React from "react";
import ImageSlider from "../../../components/HomeOurHotels/ImageSlider";
import { useParams } from "react-router-dom";
import { HotelData } from "../HotelData/HotelData";

const OursHotelsImageSlider = () => {
  const { hotelSlug } = useParams(); 
  const hotelInfo = HotelData[hotelSlug];
  const images = hotelInfo?.images || [];

  if (images.length === 0) {
    return (
      <div className="w-full h-[60vh] flex items-center justify-center text-gray-500">
        No images available for this hotel.
      </div>
    );
  }

  return (
    <div className="w-full">
      <ImageSlider images={images} />
    </div>
  );
};

export default OursHotelsImageSlider;
