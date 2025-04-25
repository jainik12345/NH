import React from 'react'
import image_slider_1 from "../../../assets/images/home_image_slider_1.webp";
import image_slider_2 from "../../../assets/images/home_image_slider_2.webp";
import image_slider_3 from "../../../assets/images/home_image_slider_3.webp";
import ImageSlider from '../../../components/HomeOurHotels/ImageSlider';

const HomeSliderSection = () => {
  const images = [image_slider_1, image_slider_2, image_slider_3];

  return (
    <div>
      <ImageSlider images={images} />
  </div>
  )
}

export default HomeSliderSection
