import React from "react";
import HomeSliderSection from "./HomeSliderSection/HomeSliderSection";
import EmailCalling from "../../components/HomeOurHotels/EmailCalling";
import HotelBooking from "../../components/HomeOurHotels/HotelBooking";
import HomeAboutHotel from "./HomeAboutHotel/HomeAboutHotel";
import HomeRestaurantsBars from "./HomeRestaurantsBars/HomeRestaurantsBars";
import HomeOurRoomsCategories from "./HomeOurRoomsCategories/HomeOurRoomsCategories";
import HomeOursHotels from "./HomeOursHotels/HomeOursHotels";

const HomePage = () => {
  return (
    <div>
      <HomeSliderSection />
      <HotelBooking /> 
      <EmailCalling
        hotelName="Renest Jaipur"
        hotelAddress="123, Pink City, Jaipur, Rajasthan, 302001"
        phoneNumber="+91 98765 43210"
        emails={["info@renestjaipur.com", "support@renestjaipur.com"]}
      />
      <HomeAboutHotel/>
      <HomeOursHotels/>
      <HomeRestaurantsBars/>
      <HomeOurRoomsCategories/>  
      {/* Not */} 
      
    </div>
  );
};

export default HomePage;
