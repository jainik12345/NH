// /* eslint-disable no-unused-vars */
// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import image from "../../../assets/images/home_image_slider_1.webp";
// import image2 from "../../../assets/images/home_image_slider_2.webp";
// import image3 from "../../../assets/images/home_image_slider_3.webp";
// import KnowMore from "../../../components/Buttons/KnowMore";

// const sectionsData = [
//   {
//     id: 1,
//     image: [image, image2, image3],
//     title: "Renest River Country Resort Manali",
//     desc: "Nestled in the picturesque valleys of the majestic Himalayas, a world of serene landscapes, fresh air, warm hospitality, adventures and memorable experiences await you.",
//   },
//   {
//     id: 2,
//     image: [image2, image3, image],
//     title: "Renest Dunsvirk Court Mussoorie",
//     desc: "Renest Dunsvirk Court Mussoorie is a tranquil destination situated in the heart of Mussoorie that eludes serenity and charm. Our hotel caters to every need of our guests, ensuring a smooth and relaxing stay.",
//   },
//   {
//     id: 3,
//     image: [image3, image2, image],
//     title: "Renest Jaipur",
//     desc: "Renest Jaipur displays a contemporary design, ideally suited for both business and leisure travellers.",
//   },
//   {
//     id: 4,
//     image: [image, image2, image3],
//     title: "Renest Shraddha Inn Shirdi",
//     desc: "A spiritual journey to seek blessings from Shirdi Sai Baba and a weekend getaway from the city grind, this beautiful boutique resort is an oasis of calm for rest and rejuvenation.",
//   },
//   {
//     id: 5,
//     image: [image2, image3, image],
//     title: "Renest Haridwar",
//     desc: "Renest Haridwar is one of the best and the newest hotels situated at the Rishikesh Highway, a perfect blend for leisure and pilgrimage.",
//   },
//   {
//     id: 6,
//     image: [image3, image2, image],
//     title: "Renest Tirupati",
//     desc: "Our property in Tirupati promises to provide our guests with unparalleled service and hospitality.",
//   },
//   {
//     id: 7,
//     image: [image, image2, image3],
//     title: "Renest Gandhidham",
//     desc: "Renest Gandhidham is the ideal stay for business travellers located in close proximity to the popular business districts.",
//   },
//   {
//     id: 8,
//     image: [image2, image3, image],
//     title: "Renest Calangute Goa",
//     desc: "Renest Calangute, Goa is the perfect haven for beach lovers, conveniently situated near the pristine beaches of Goa.",
//   },
// ];

// const AutoImageSlider = ({ images }) => {
//   const [current, setCurrent] = React.useState(0);

//   React.useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % images.length);
//     }, 2500);
//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <div className="w-full h-[300px] md:h-[450px] relative">
//       {images.map((img, index) => (
//         <motion.img
//           key={index}
//           src={img}
//           alt={`slide-${index}`}
//           className={`absolute w-full h-full object-cover transition-opacity duration-700  ${
//             index === current ? "opacity-100 z-10" : "opacity-0 z-0"
//           }`}
//           initial={{ opacity: 0, scale: 1.05 }}
//           animate={{
//             opacity: index === current ? 1 : 0,
//             scale: index === current ? 1 : 1.05,
//           }}
//           transition={{ duration: 0.8, ease: "easeInOut" }}
//         />
//       ))}
//     </div>
//   );
// };

// const HomeOursHotels = () => {
//   const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

//   React.useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth <= 768);
//     handleResize(); // run once on mount
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const generatePath = (title) => {
//     return (
//       "/" +
//       title
//         .toLowerCase()
//         .replace(/[^\w\s-]/g, "")
//         .trim()
//         .replace(/\s+/g, "-")
//     );
//   };

//   return (
//     <div className="w-full shadow-md pt-10 pb-10">
//       <div className="max-w-[1250px] mx-auto px-4">
//         <h2
//           className="text-3xl md:text-4xl text-center"
//           style={{ fontFamily: "'Playfair Display', serif" }}
//         >
//           Our Hotels
//         </h2>
//         {sectionsData.map((section, index) => (
//           <div
//             key={section.id}
//             className={`flex flex-col md:flex-row items-center my-12 ${
//               index % 2 !== 0 ? "md:flex-row-reverse" : ""
//             }`}
//           >
//             <motion.div
//               initial={{
//                 opacity: 0,
//                 scale: isMobile ? 1 : 0.9,
//                 x: isMobile ? 0 : index % 2 === 0 ? -100 : 100,
//               }}
//               whileInView={{
//                 opacity: 1,
//                 scale: 1,
//                 x: 0,
//               }}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//               viewport={{ once: true, amount: 0.4 }}
//               className="w-full md:w-[60%] relative overflow-hidden shadow-lg"
//             >
//               <AutoImageSlider images={section.image} />
//             </motion.div>

//             <motion.div
//               initial={{
//                 opacity: 0,
//                 y: isMobile ? 20 : 50,
//               }}
//               whileInView={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
//               viewport={{ once: true, amount: 0.4 }}
//               className="w-full md:w-[40%] mt-6 md:mt-0 md:px-8 text-center md:text-center"
//             >
//               <h2
//                 className="text-3xl mb-4"
//                 style={{ fontFamily: "'Playfair Display', serif" }}
//               >
//                 {section.title}
//               </h2>
//               <p className="text-black leading-6 mb-6">{section.desc}</p>

//               <div>
//                 <Link to={generatePath(section.title)}>
//                   <KnowMore text="Know More" />
//                 </Link>
//               </div>
//             </motion.div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HomeOursHotels;

/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import image from "../../../assets/images/home_image_slider_1.webp";
import image2 from "../../../assets/images/home_image_slider_2.webp";
import image3 from "../../../assets/images/home_image_slider_3.webp";
import KnowMore from "../../../components/Buttons/KnowMore";

const sectionsData = [
  {
    id: 1,
    image: [image, image2, image3],
    title: "Renest River Country Resort Manali",
    desc: "Nestled in the picturesque valleys of the majestic Himalayas, a world of serene landscapes, fresh air, warm hospitality, adventures and memorable experiences await you.",
  },
  {
    id: 2,
    image: [image2, image3, image],
    title: "Renest Dunsvirk Court Mussoorie",
    desc: "Renest Dunsvirk Court Mussoorie is a tranquil destination situated in the heart of Mussoorie that eludes serenity and charm. Our hotel caters to every need of our guests, ensuring a smooth and relaxing stay.",
  },
  {
    id: 3,
    image: [image3, image2, image],
    title: "Renest Jaipur",
    desc: "Renest Jaipur displays a contemporary design, ideally suited for both business and leisure travellers.",
  },
  {
    id: 4,
    image: [image, image2, image3],
    title: "Renest Shraddha Inn Shirdi",
    desc: "A spiritual journey to seek blessings from Shirdi Sai Baba and a weekend getaway from the city grind, this beautiful boutique resort is an oasis of calm for rest and rejuvenation.",
  },
  {
    id: 5,
    image: [image2, image3, image],
    title: "Renest Haridwar",
    desc: "Renest Haridwar is one of the best and the newest hotels situated at the Rishikesh Highway, a perfect blend for leisure and pilgrimage.",
  },
  {
    id: 6,
    image: [image3, image2, image],
    title: "Renest Tirupati",
    desc: "Our property in Tirupati promises to provide our guests with unparalleled service and hospitality.",
  },
  {
    id: 7,
    image: [image, image2, image3],
    title: "Renest Gandhidham",
    desc: "Renest Gandhidham is the ideal stay for business travellers located in close proximity to the popular business districts.",
  },
  {
    id: 8,
    image: [image2, image3, image],
    title: "Renest Calangute Goa",
    desc: "Renest Calangute, Goa is the perfect haven for beach lovers, conveniently situated near the pristine beaches of Goa.",
  },
];

const AutoImageSlider = ({ images }) => {
  const [current, setCurrent] = React.useState(0);
  const [intervalId, setIntervalId] = React.useState(null);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2500);
    setIntervalId(interval);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleNext = () => {
    clearInterval(intervalId); // Clear interval on arrow click
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    clearInterval(intervalId); // Clear interval on arrow click
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full h-[300px] md:h-[450px] relative">
      {images.map((img, index) => (
        <motion.img
          key={index}
          src={img}
          alt={`slide-${index}`}
          className={`absolute w-full h-full object-cover transition-opacity duration-700  ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{
            opacity: index === current ? 1 : 0,
            scale: index === current ? 1 : 1.05,
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      ))}

      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute cursor-pointer left-4 top-1/2 transform -translate-y-1/2 text-white z-10"
      >
        <FaAngleLeft size={30} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute cursor-pointer right-4 top-1/2 transform -translate-y-1/2 text-white z-10"
      >
        <FaAngleRight size={30} />
      </button>
    </div>
  );
};

const HomeOursHotels = () => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generatePath = (title) => {
    return (
      "/" +
      title
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-")
    );
  };

  return (
    <div className="w-full shadow-md pt-10 pb-10">
      <div className="max-w-[1250px] mx-auto px-4">
        <h2
          className="text-3xl md:text-4xl text-center"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Our Hotels
        </h2>
        {sectionsData.map((section, index) => (
          <div
            key={section.id}
            className={`flex flex-col md:flex-row items-center my-12 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: isMobile ? 1 : 0.9,
                x: isMobile ? 0 : index % 2 === 0 ? -100 : 100,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                x: 0,
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
              className="w-full md:w-[60%] relative overflow-hidden shadow-lg"
            >
              <AutoImageSlider images={section.image} />
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                y: isMobile ? 20 : 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.4 }}
              className="w-full md:w-[40%] mt-6 md:mt-0 md:px-8 text-center md:text-center"
            >
              <h2
                className="text-3xl mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {section.title}
              </h2>
              <p className="text-black leading-6 mb-6">{section.desc}</p>

              <div>
                <Link to={generatePath(section.title)}>
                  <KnowMore text="Know More" />
                </Link>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeOursHotels;
