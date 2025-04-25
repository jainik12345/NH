import React from "react";
// import { useParams } from "react-router-dom";
import OursHotelsImageSlider from "./OursHotelsImageSlider/OursHotelsImageSlider";
import OursHotelsOverview from "./OursHotelsOverview/OursHotelsOverview";
import HotelBooking from "./../../components/HomeOurHotels/HotelBooking";
import OursHotelsEmailCalling from "./OursHotelsEmailCalling/OursHotelsEmailCalling";
import OursHotelsRooms from "./OursHotelsRooms/OursHotelsRooms";
import OursHotelsDining from "./OursHotelsDining/OursHotelsDining";
import OursHotelsMeetingsEvents from "./OursHotelsMeetingsEvents/OursHotelsMeetingsEvents";
import OursHotelsAmenities from "./OursHotelsAmenities/OursHotelsAmenities";
import OursHotelsSubNavbar from "./OursHotelsSubNavbar/OursHotelsSubNavbar";

const OursHotels = () => {
  // const { hotelSlug } = useParams();
  // const hotelName = hotelSlug
  //   .replace(/-/g, " ")
  //   .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        {/* <h1 className="text-3xl font-bold mb-4 text-[#193531]">{hotelName}</h1> */}
        {/* <OursHotelsSubNavbar />  */}
        <OursHotelsImageSlider />
        <HotelBooking />
        <OursHotelsEmailCalling />
        <OursHotelsOverview />
        <OursHotelsRooms />
        <OursHotelsDining />
        <OursHotelsMeetingsEvents />
        <OursHotelsAmenities />
      </div>
    </>
  );
};

export default OursHotels;
