// import React from "react";
// import { NavLink, useLocation } from "react-router-dom";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaMapMarkerAlt,
//   FaWhatsapp,
//   FaEnvelope,
//   FaPhoneAlt,
//   FaTwitter,
//   FaLinkedinIn,
//   FaYoutube,
// } from "react-icons/fa";

// const Footer = () => {
//   const location = useLocation();

//   // Define hotel-specific details
//   const hotelsData = {
//     "/renest-jaipur": {
//       name: "Renest Jaipur",
//       email: "reservations.jaipur@renesthotels.com",
//       phone: "+91 79 0022 2211",
//       address:
//         "Gopal Pura bypass Road, Near Ganga Jamuna Petrol Pump, New Aatish Market, Mansarovar, Jaipur, Rajasthan 302020",
//       socials: {
//         facebook: "https://facebook.com/renestshirdi",
//         instagram: "https://instagram.com/renestshirdi",
//         whatsapp: "https://wa.me/9876543222",
//         location: "https://goo.gl/maps/shirdi",
//         twitter: "https://twitter.com/renestshirdi",
//       },
//     },

//     "/renest-shraddha-inn-shirdi": {
//       name: "Renest Shraddha Inn Shirdi",
//       email: " reservations.shirdi@renesthotels.com",
//       phone: "+91 9823098240",
//       address:
//         "Renest Shraddha Inn Shirdi, Pimpalwadi Rd, Dattanagar, Shirdi, Maharashtra 423109, India",
//       socials: {
//         facebook: "https://facebook.com/renestshirdi",
//         instagram: "https://instagram.com/renestshirdi",
//         whatsapp: "https://wa.me/9876543222",
//         location: "https://goo.gl/maps/shirdi",
//         twitter: "https://twitter.com/renestshirdi",
//       },
//     },

//     "/renest-river-country-resort-manali": {
//       name: "Renest River Country Resort, Manali",
//       email: " reservations@renesthotels.com",
//       phone: "+91 79 0022 2211",
//       address: "NH3, Simsa Village, Manali, Himachal Pradesh 175131, India",
//       socials: {
//         facebook: "https://facebook.com/renestmussoorie",
//         instagram: "https://instagram.com/renestmussoorie",
//         whatsapp: "https://wa.me/9876543233",
//         location: "https://goo.gl/maps/mussoorie",
//         linkedin: "https://linkedin.com/company/renestmussoorie",
//       },
//     },

//     "/renest-dunsvirk-court-mussoorie": {
//       name: "Renest Dunsvirk Court Mussoorie",
//       email: " reservations.mussoorie@renesthotels.com",
//       phone: "+91 79 0022 2211",
//       address:
//         "Vincent Hill, Baroda Estate Near Library Chowk, Mussoorie, Uttarakhand - 248179",
//       socials: {
//         facebook: "https://facebook.com/renestmussoorie",
//         instagram: "https://instagram.com/renestmussoorie",
//         whatsapp: "https://wa.me/9876543233",
//         location: "https://goo.gl/maps/mussoorie",
//         linkedin: "https://linkedin.com/company/renestmussoorie",
//       },
//     },

//     "/renest-tirupati": {
//       name: "Renest Tirupati",
//       email: " info.tirupati@renesthotels.com",
//       phone: "+91 79 0022 2211",
//       address:
//         "#18-8-40/B, Leela Mahal Centre, Tirumula Bypass Road, Tirupati, Andhra Pradesh- 517501",
//       socials: {
//         facebook: "https://facebook.com/renestmussoorie",
//         instagram: "https://instagram.com/renestmussoorie",
//         whatsapp: "https://wa.me/9876543233",
//         location: "https://goo.gl/maps/mussoorie",
//         linkedin: "https://linkedin.com/company/renestmussoorie",
//       },
//     },

//     "/renest-gandhidham": {
//       name: "Renest Gandhidham",
//       email: " reservations.gandhidham@renesthotels.com",
//       phone: "+91 79 0022 2211",
//       address:
//         "Plot No.78, Sector 8, Behind Tagore Garden, Tagore Road, Sector 8, Gandhidham, Gujarat 370201, India",
//       socials: {
//         facebook: "https://facebook.com/renestmussoorie",
//         instagram: "https://instagram.com/renestmussoorie",
//         whatsapp: "https://wa.me/9876543233",
//         location: "https://goo.gl/maps/mussoorie",
//         linkedin: "https://linkedin.com/company/renestmussoorie",
//       },
//     },

//     "/renest-haridwar": {
//       name: "Renest Haridwar",
//       email: " reservations.haridwar@renesthotels.com",
//       phone: "+91 79 0022 2211",
//       address:
//         "Highway, Haridwar - Dehradun Rd, adjoining Shridhar Ashram, Dudhadhari Chowk, Haridwar, Uttarakhand - 249410",
//       socials: {
//         facebook: "https://facebook.com/renestmussoorie",
//         instagram: "https://instagram.com/renestmussoorie",
//         whatsapp: "https://wa.me/9876543233",
//         location: "https://goo.gl/maps/mussoorie",
//         linkedin: "https://linkedin.com/company/renestmussoorie",
//       },
//     },

//     "/renest-calangute-goa": {
//       name: "Renest Calangute, Goa",
//       email: " reservations@renesthotels.com",
//       phone: "+91 79 0022 2211",
//       address: "2/8-C, Village Calangute, Naika Vaddo, Bardez, Goa - 403516",
//       socials: {
//         facebook: "https://facebook.com/renestmussoorie",
//         instagram: "https://instagram.com/renestmussoorie",
//         whatsapp: "https://wa.me/9876543233",
//         location: "https://goo.gl/maps/mussoorie",
//         linkedin: "https://linkedin.com/company/renestmussoorie",
//       },
//     },
//   };

//   const hotelInfo =
//     Object.entries(hotelsData).find(([path]) =>
//       location.pathname.startsWith(path)
//     )?.[1] || null;

//   const isWhatsNewActive = location.pathname.startsWith("/whats-new");

//   const footerLinks = [
//     { label: "Home", to: "/" },
//     { label: "About", to: "/about-us" },
//     { label: "Offer", to: "/offers" },
//     { label: "Partner With Us", to: "/partner-with-us" },
//     { label: "Contact Us", to: "/contact-us" },
//     { label: "Career", to: "/careers" },
//     { label: "What's New", to: "/whats-new" },
//     { label: "Media Room", to: "/media-room" },
//     { label: "Privacy Policy", to: "/private-policy" },
//     { label: "Terms & Conditions", to: "/terms-conditions" },
//     { label: "Manage Booking", to: "/manage-booking" },
//   ];

//   return (
//     <footer className="w-full bg-[#193531] shadow-md pt-10 pb-5 text-center">
//       <div className="max-w-[1440px] mx-auto px-4">
//         {/* Hotel Name */}
//         <h2 className="text-[22px] font-bold text-white mb-2">
//           {hotelInfo ? hotelInfo.name : "Renest Hotels & Resorts"}
//         </h2>

//         {hotelInfo && (
//           <p className="text-sm text-gray-300 mb-5">{hotelInfo.address}</p>
//         )}

//         <div className="flex flex-col md:flex-row justify-center items-center text-white gap-3 text-sm md:text-base mb-6">
//           <a
//             href={`mailto:${
//               hotelInfo ? hotelInfo.email : "reservations@renesthotels.com"
//             }`}
//             className="flex items-center gap-2 group text-white"
//           >
//             <div className="w-6 h-6 flex items-center justify-center bg-white border border-white rounded-md">
//               <FaEnvelope size={14} className="text-[#193531]" />
//             </div>
//             <span className="relative">
//               {hotelInfo ? hotelInfo.email : "reservations@renesthotels.com"}
//               <span className="absolute left-0 -bottom-0.5 h-[1px] w-0 bg-white group-hover:w-full transition-all duration-600 ease-in-out"></span>
//             </span>
//           </a>

//           {/* Phone */}
//           <a
//             href={`tel:${hotelInfo ? hotelInfo.phone : "1234567890"}`}
//             className="flex items-center gap-2 group text-white"
//           >
//             <div className="w-6 h-6 flex items-center justify-center bg-white border border-white rounded-md">
//               <FaPhoneAlt size={14} className="text-[#193531]" />
//             </div>
//             <span className="relative">
//               {hotelInfo ? hotelInfo.phone : "1234567890"}
//               <span className="absolute left-0 -bottom-0.5 h-[1px] w-0 bg-white group-hover:w-full transition-all duration-600 ease-in-out"></span>
//             </span>
//           </a>
//         </div>

//         {/* Get in Touch */}
//         <h3 className="text-lg py-4 text-white md:text-xl font-semibold mb-3">
//           Get in Touch
//         </h3>

//         {/* Social Links */}
//         <div className="flex justify-center gap-4 mb-6">
//           {/* Facebook */}
//           <a
//             href={
//               hotelInfo?.socials?.facebook ||
//               "https://www.facebook.com/renesthotels"
//             }
//             target="_blank"
//             rel="noopener noreferrer"
//             className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-[#3b5998]/80 text-[#3b5998] hover:text-white transition rounded-md"
//           >
//             <FaFacebookF size={20} />
//           </a>

//           {/* Instagram */}
//           <a
//             href={
//               hotelInfo?.socials?.instagram ||
//               "https://www.instagram.com/renesthotels"
//             }
//             target="_blank"
//             rel="noopener noreferrer"
//             className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-[#E1306C]/80 text-[#E1306C] hover:text-white transition rounded-md"
//           >
//             <FaInstagram size={20} />
//           </a>

//           {/* Twitter */}
//           <a
//             href={
//               hotelInfo?.socials?.twitter || "https://twitter.com/renesthotels"
//             }
//             target="_blank"
//             rel="noopener noreferrer"
//             className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-[#1DA1F2]/80 text-[#1DA1F2] hover:text-white transition rounded-md"
//           >
//             <FaTwitter size={20} />
//           </a>

//           {/* LinkedIn */}
//           <a
//             href={
//               hotelInfo?.socials?.linkedin ||
//               "https://www.linkedin.com/company/renesthotels"
//             }
//             target="_blank"
//             rel="noopener noreferrer"
//             className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-[#0077B5]/80 text-[#0077B5] hover:text-white transition rounded-md"
//           >
//             <FaLinkedinIn size={20} />
//           </a>

//           {/* WhatsApp */}
//           <a
//             href={
//               hotelInfo?.socials?.whatsapp || "https://wa.me/918000000000" // your main whatsapp number
//             }
//             target="_blank"
//             rel="noopener noreferrer"
//             className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-[#25D366]/80 text-[#25D366] hover:text-white transition rounded-md"
//           >
//             <FaWhatsapp size={20} />
//           </a>

//           {/* Location */}
//           <a
//             href={
//               hotelInfo?.socials?.location || "https://goo.gl/maps/mainlocation" // your main location
//             }
//             target="_blank"
//             rel="noopener noreferrer"
//             className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-[#EA4335]/80 text-[#EA4335] hover:text-white transition rounded-md"
//           >
//             <FaMapMarkerAlt size={20} />
//           </a>
//         </div>

//         {/* Horizontal Line */}
//         <hr className="border-t border-gray-300 mb-6" />

//         {/* Footer Navigation Links */}
//         <div className="flex flex-wrap justify-center gap-5 text-sm md:text-base text-white mb-6">
//           {footerLinks.map((item, index) => (
//             <NavLink
//               key={index}
//               to={item.to}
//               className={({ isActive }) => {
//                 const active =
//                   isActive || (item.to === "/whats-new" && isWhatsNewActive);
//                 return `relative cursor-pointer group transition pb-1 ${
//                   active ? "font-semibold" : ""
//                 }`;
//               }}
//             >
//               {({ isActive }) => {
//                 const active =
//                   isActive || (item.to === "/whats-new" && isWhatsNewActive);
//                 return (
//                   <>
//                     {item.label}
//                     <span
//                       className={`absolute left-0 -bottom-0.5 h-[2px] bg-white transition-all duration-500 ease-in-out ${
//                         active ? "w-full" : "w-0 group-hover:w-full"
//                       }`}
//                     ></span>
//                   </>
//                 );
//               }}
//             </NavLink>
//           ))}
//         </div>

//         {/* Copyright */}
//         <p className="text-xs md:text-sm text-white">
//           © Unique Mercantile India Ltd. All rights reserved.
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const location = useLocation();

  const hotelsData = {
    "/renest-jaipur": {
      name: "Renest Jaipur",
      email: "reservations.jaipur@renesthotels.com",
      phone: "+91 79 0022 2211",
      address:
        "Gopal Pura bypass Road, Near Ganga Jamuna Petrol Pump, New Aatish Market, Mansarovar, Jaipur, Rajasthan 302020",
      socials: {
        facebook: "https://facebook.com/renestshirdi",
        instagram: "https://instagram.com/renestshirdi",
        whatsapp: "https://wa.me/9876543222",
        location: "https://goo.gl/maps/shirdi",
        twitter: "https://twitter.com/renestshirdi",
      },
    },

    "/renest-shraddha-inn-shirdi": {
      name: "Renest Shraddha Inn Shirdi",
      email: " reservations.shirdi@renesthotels.com",
      phone: "+91 9823098240",
      address:
        "Renest Shraddha Inn Shirdi, Pimpalwadi Rd, Dattanagar, Shirdi, Maharashtra 423109, India",
      socials: {
        facebook: "https://facebook.com/renestshirdi",
        instagram: "https://instagram.com/renestshirdi",
        whatsapp: "https://wa.me/9876543222",
        location: "https://goo.gl/maps/shirdi",
        twitter: "https://twitter.com/renestshirdi",
      },
    },

    "/renest-river-country-resort-manali": {
      name: "Renest River Country Resort, Manali",
      email: " reservations@renesthotels.com",
      phone: "+91 79 0022 2211",
      address: "NH3, Simsa Village, Manali, Himachal Pradesh 175131, India",
      socials: {
        facebook: "https://facebook.com/renestmussoorie",
        instagram: "https://instagram.com/renestmussoorie",
        whatsapp: "https://wa.me/9876543233",
        location: "https://goo.gl/maps/mussoorie",
        linkedin: "https://linkedin.com/company/renestmussoorie",
      },
    },

    "/renest-dunsvirk-court-mussoorie": {
      name: "Renest Dunsvirk Court Mussoorie",
      email: " reservations.mussoorie@renesthotels.com",
      phone: "+91 79 0022 2211",
      address:
        "Vincent Hill, Baroda Estate Near Library Chowk, Mussoorie, Uttarakhand - 248179",
      socials: {
        facebook: "https://facebook.com/renestmussoorie",
        instagram: "https://instagram.com/renestmussoorie",
        whatsapp: "https://wa.me/9876543233",
        location: "https://goo.gl/maps/mussoorie",
        linkedin: "https://linkedin.com/company/renestmussoorie",
      },
    },

    "/renest-tirupati": {
      name: "Renest Tirupati",
      email: " info.tirupati@renesthotels.com",
      phone: "+91 79 0022 2211",
      address:
        "#18-8-40/B, Leela Mahal Centre, Tirumula Bypass Road, Tirupati, Andhra Pradesh- 517501",
      socials: {
        facebook: "https://facebook.com/renestmussoorie",
        instagram: "https://instagram.com/renestmussoorie",
        whatsapp: "https://wa.me/9876543233",
        location: "https://goo.gl/maps/mussoorie",
        linkedin: "https://linkedin.com/company/renestmussoorie",
      },
    },

    "/renest-gandhidham": {
      name: "Renest Gandhidham",
      email: " reservations.gandhidham@renesthotels.com",
      phone: "+91 79 0022 2211",
      address:
        "Plot No.78, Sector 8, Behind Tagore Garden, Tagore Road, Sector 8, Gandhidham, Gujarat 370201, India",
      socials: {
        facebook: "https://facebook.com/renestmussoorie",

        whatsapp: "https://wa.me/9876543233",
        location: "https://goo.gl/maps/mussoorie",
        linkedin: "https://linkedin.com/company/renestmussoorie",
      },
    },

    "/renest-haridwar": {
      name: "Renest Haridwar",
      email: " reservations.haridwar@renesthotels.com",
      phone: "+91 79 0022 2211",
      address:
        "Highway, Haridwar - Dehradun Rd, adjoining Shridhar Ashram, Dudhadhari Chowk, Haridwar, Uttarakhand - 249410",
      socials: {
        facebook: "https://facebook.com/renestmussoorie",
        instagram: "https://instagram.com/renestmussoorie",
        whatsapp: "https://wa.me/9876543233",
        location: "https://goo.gl/maps/mussoorie",
      },
    },

    "/renest-calangute-goa": {
      name: "Renest Calangute, Goa",
      email: " reservations@renesthotels.com",
      phone: "+91 79 0022 2211",
      address: "2/8-C, Village Calangute, Naika Vaddo, Bardez, Goa - 403516",
      socials: {
        facebook: "https://facebook.com/renestmussoorie",
        instagram: "https://instagram.com/renestmussoorie",
      },
    },
  };

  const hotelInfo =
    Object.entries(hotelsData).find(([path]) =>
      location.pathname.startsWith(path)
    )?.[1] || null;

  const isWhatsNewActive = location.pathname.startsWith("/whats-new");

  const footerLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about-us" },
    { label: "Offer", to: "/offers" },
    { label: "Partner With Us", to: "/partner-with-us" },
    { label: "Contact Us", to: "/contact-us" },
    { label: "Career", to: "/careers" },
    { label: "What's New", to: "/whats-new" },
    { label: "Media Room", to: "/media-room" },
    { label: "Privacy Policy", to: "/private-policy" },
    { label: "Terms & Conditions", to: "/terms-conditions" },
    { label: "Manage Booking", to: "/manage-booking" },
  ];

  const renderSocialIcons = () => {
    if (hotelInfo) {
      return (
        <>
          {hotelInfo.socials.facebook && (
            <a
              href={hotelInfo.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-[#3b5998]/80 text-[#3b5998] hover:text-white transition rounded-md"
            >
              <FaFacebookF size={20} />
            </a>
          )}
          {hotelInfo.socials.instagram && (
            <a
              href={hotelInfo.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-[#E1306C]/80 text-[#E1306C] hover:text-white transition rounded-md"
            >
              <FaInstagram size={20} />
            </a>
          )}
          {hotelInfo.socials.twitter && (
            <a
              href={hotelInfo.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-[#1DA1F2]/80 text-[#1DA1F2] hover:text-white transition rounded-md"
            >
              <FaTwitter size={20} />
            </a>
          )}
          {hotelInfo.socials.linkedin && (
            <a
              href={hotelInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-[#0077B5]/80 text-[#0077B5] hover:text-white transition rounded-md"
            >
              <FaLinkedinIn size={20} />
            </a>
          )}
          {hotelInfo.socials.whatsapp && (
            <a
              href={hotelInfo.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-[#25D366]/80 text-[#25D366] hover:text-white transition rounded-md"
            >
              <FaWhatsapp size={20} />
            </a>
          )}
          {hotelInfo.socials.location && (
            <a
              href={hotelInfo.socials.location}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-[#EA4335]/80 text-[#EA4335] hover:text-white transition rounded-md"
            >
              <FaMapMarkerAlt size={20} />
            </a>
          )}
        </>
      );
    } else {
      return (
        <>
          <a
            href="https://www.facebook.com/renesthotels"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-[#3b5998]/80 text-[#3b5998] hover:text-white transition rounded-md"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://www.instagram.com/renesthotels"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-[#E1306C]/80 text-[#E1306C] hover:text-white transition rounded-md"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://twitter.com/renesthotels"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-[#1DA1F2]/80 text-[#1DA1F2] hover:text-white transition rounded-md"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://www.linkedin.com/company/renesthotels"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-[#0077B5]/80 text-[#0077B5] hover:text-white transition rounded-md"
          >
            <FaLinkedinIn size={20} />
          </a>
          <a
            href="https://wa.me/918000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-[#25D366]/80 text-[#25D366] hover:text-white transition rounded-md"
          >
            <FaWhatsapp size={20} />
          </a>
          <a
            href="https://goo.gl/maps/mainlocation"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-[#EA4335]/80 text-[#EA4335] hover:text-white transition rounded-md"
          >
            <FaMapMarkerAlt size={20} />
          </a>
        </>
      );
    }
  };

  return (
    <footer className="w-full bg-[#193531] shadow-md pt-10 pb-5 text-center">
      <div className="max-w-[1440px] mx-auto px-4">
        {/* Hotel Name */}
        <h2 className="text-[22px] font-bold text-white mb-2">
          {hotelInfo ? hotelInfo.name : "Renest Hotels & Resorts"}
        </h2>

        {hotelInfo && (
          <p className="text-sm text-gray-300 mb-5">{hotelInfo.address}</p>
        )}

        <div className="flex flex-col md:flex-row justify-center items-center text-white gap-3 text-sm md:text-base mb-6">
          <a
            href={`mailto:${
              hotelInfo ? hotelInfo.email : "reservations@renesthotels.com"
            }`}
            className="flex items-center gap-2 group text-white"
          >
            <div className="w-6 h-6 flex items-center justify-center bg-white border border-white rounded-md">
              <FaEnvelope size={14} className="text-[#193531]" />
            </div>
            <span className="relative">
              {hotelInfo ? hotelInfo.email : "reservations@renesthotels.com"}
            </span>
          </a>

          {/* Phone */}
          <a
            href={`tel:${hotelInfo ? hotelInfo.phone : "1234567890"}`}
            className="flex items-center gap-2 group text-white"
          >
            <div className="w-6 h-6 flex items-center justify-center bg-white border border-white rounded-md">
              <FaPhoneAlt size={14} className="text-[#193531]" />
            </div>
            <span className="relative">
              {hotelInfo ? hotelInfo.phone : "1234567890"}
            </span>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-6">
          {renderSocialIcons()}
        </div>

        {/* Horizontal Line */}
        <hr className="border-t border-gray-300 mb-6" />

        {/* Footer Navigation Links */}
        <div className="flex flex-wrap justify-center gap-5 text-sm md:text-base text-white mb-6">
          {footerLinks.map((item, index) => (
            <NavLink
              key={index}
              to={item.to}
              className={({ isActive }) => {
                const active =
                  isActive || (item.to === "/whats-new" && isWhatsNewActive);
                return `relative cursor-pointer group transition pb-1 ${
                  active ? "font-semibold" : ""
                }`;
              }}
            >
              {item.label}
              <span
                className={`absolute left-0 -bottom-0 h-[1.5px] bg-white transition-all duration-600 ease-in-out ${
                  (item.to === "/whats-new" && isWhatsNewActive) ||
                  item.to === location.pathname
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              ></span>
            </NavLink>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-xs md:text-sm text-white">
          © Unique Mercantile India Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
