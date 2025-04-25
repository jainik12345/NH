/* eslint-disable no-unused-vars */
// import React from "react";
// import { useParams } from "react-router-dom";
// import { SubNavbarHotelData } from "../../HotelData/SubNavbarHotelData";
// import OursHotelsSubNavbar from "../../OursHotelsSubNavbar/OursHotelsSubNavbar";

// const OursHotelsSubNavbarContactUs = () => {
//   const { hotelSlug } = useParams();
//   const hotelInfo = SubNavbarHotelData[hotelSlug];

//   if (!hotelInfo || !hotelInfo.navbarContactUs) {
//     return (
//       <div className="text-center py-10">Contact Us information not found.</div>
//     );
//   }

//   const contactData = hotelInfo.navbarContactUs;

//   return (
//     <div className="flex flex-col justify-center items-center">
//       {/* <OursHotelsSubNavbar /> */}

//       <div className="w-full shadow-md py-10">
//         <div className="max-w-[1250px] mx-auto px-4 space-y-12">
//           {/* Heading */}
//           <div className="text-center">
//             <h2 className="text-3xl md:text-4xl font-serif text-rose-900">
//               Contact Us - {hotelInfo.hotelName}
//             </h2>
//           </div>

//           {/* Address and Image Section */}
//           <div className="flex flex-col md:flex-row items-center justify-between gap-10">
//             {/* Left: Address */}
//             <div className="w-full md:w-1/2 space-y-4 text-gray-800 text-center md:text-left">
//               <h3 className="text-2xl font-semibold">Address</h3>
//               <p className="whitespace-pre-line">{contactData.address}</p>
//               <p>
//                 <span className="font-semibold">Email:</span>{" "}
//                 {contactData.email}
//               </p>
//               <p>
//                 <span className="font-semibold">Phone:</span>{" "}
//                 {contactData.number}
//               </p>
//             </div>

//             {/* Right: Image */}
//             {contactData.image && contactData.image.length > 0 && (
//               <div className="w-full md:w-1/2 flex justify-center">
//                 <img
//                   src={contactData.image[0]}
//                   alt="Hotel Location"
//                   className="w-full max-w-[700px] h-[380px] object-cover "
//                 />
//               </div>
//             )}
//           </div>

//           {/* Hotel Amenities Section */}
//           <div className="space-y-8">
//             <h3 className="text-2xl text-center font-semibold text-rose-900">
//               Hotel Amenities
//             </h3>

//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//               {contactData.hotelAmenities.map((amenity, index) => (
//                 <div
//                   key={index}
//                   className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition"
//                 >
//                   <amenity.icon className="text-3xl text-rose-600" />
//                   <p className="text-base md:text-lg">{amenity.text}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OursHotelsSubNavbarContactUs;

import React from "react";
import { useParams } from "react-router-dom";
import { SubNavbarHotelData } from "../../HotelData/SubNavbarHotelData";
import { motion } from "framer-motion";

const OursHotelsSubNavbarContactUs = () => {
  const { hotelSlug } = useParams();
  const hotelInfo = SubNavbarHotelData[hotelSlug];

  if (!hotelInfo || !hotelInfo.navbarContactUs) {
    return (
      <div className="text-center py-10 text-black text-lg">
        Contact Us information not found.
      </div>
    );
  }

  const contactData = hotelInfo.navbarContactUs;

  return (
    <div className="flex flex-col justify-center items-center px-2 sm:px-4 md:px-6">
      <div className="w-full py-10">
        <div className="max-w-[1250px] mx-auto space-y-12">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-serif text-center text-black"
          >
            Contact Us - {hotelInfo.hotelName}
          </motion.h2>

          {/* Address + Image */}
          <div className="flex flex-col md:flex-row gap-10 items-center justify-between">
            {/* Address */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2 text-gray-800 space-y-4 text-center md:text-left"
            >
              <h3 className="text-2xl font-semibold">Address</h3>
              <p className="whitespace-pre-line">{contactData.address}</p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                {contactData.email}
              </p>
              <p>
                <span className="font-semibold">Phone:</span>{" "}
                {contactData.number}
              </p>
            </motion.div>

            {/* Image */}
            {contactData.image?.[0] && (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full md:w-1/2 flex justify-center"
              >
                <img
                  src={contactData.image[0]}
                  alt="Hotel Location"
                  className="w-full max-w-[700px] h-[280px] sm:h-[320px] md:h-[380px] object-cover  shadow"
                />
              </motion.div>
            )}
          </div>

          {/* Hotel Amenities */}
          <div className="space-y-8">
            <h3
              className="text-3xl text-center  text-black"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Hotel Amenities
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {contactData.hotelAmenities.map((amenity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-center gap-4 p-4 bg-white rounded-lg shadow hover:shadow-md transition"
                >
                  <amenity.icon className="text-3xl text-green-700" />
                  <p className="text-base md:text-lg">{amenity.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OursHotelsSubNavbarContactUs;
