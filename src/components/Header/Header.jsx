/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaPlus, FaMinus } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import BookNowButton from "../Buttons/BookNow";
import RenestLogo from "../../assets/images/Renest_Hotels_Logo.avif";
import FloatingButtons from "./../ScrollToTop/FloatingButtons";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import OursHotelsSubNavbar from "../../pages/OursHotels/OursHotelsSubNavbar/OursHotelsSubNavbar";

const hotelsData = {
  Jaipur: ["Renest Jaipur"],
  Tirupati: ["Renest Tirupati"],
  Shirdi: ["Renest Shraddha Inn Shirdi"],
  Gandhidham: ["Renest Gandhidham"],
  Manali: ["Renest River Country Resort Manali"],
  Haridwar: ["Renest Haridwar"],
  Mussoorie: ["Renest Dunsvirk Court Mussoorie"],
  Goa: ["Renest Calangute Goa"],
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hotelsOpenMobile, setHotelsOpenMobile] = useState(false);
  const [hotelsHover, setHotelsHover] = useState(false);
  const [showTopbar, setShowTopbar] = useState(true);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleHotelsMobile = () => setHotelsOpenMobile(!hotelsOpenMobile);
  const handleBook = () => console.log("Click Btn");
  const location = useLocation();

  const isWhatsNewActive = location.pathname.startsWith("/whats-new");

  const navItems = [
    // { label: "Home", path: "/" },
    { label: "About Us", path: "/about-us" },
    { label: "Offer", path: "/offers" },
    { label: "Partner With Us", path: "/partner-with-us" },
    { label: "Contact Us", path: "/contact-us" },
    { label: "Careers", path: "/careers" },
    { label: "What's New", path: "/whats-new" },
  ];
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTopbar(true);
    }, 100000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="top-0 left-0 sticky z-50">
      {/* Animate Topbar */}

      <div>
        <AnimatePresence>
          {showTopbar && (
            <motion.div
              initial={{ height: 0, opacity: 0, y: -50 }}
              animate={{ height: "auto", opacity: 1, y: 0 }}
              exit={{ height: 0, opacity: 0, y: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="bg-[#193531] text-white text-sm px-4 py-2 flex justify-between items-center"
            >
              <div className="flex items-center gap-2">
                <span>
                  Safety and Hygiene Preparedness by Renest Hotels & Resorts
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span>Central Reservations Number: +91-7900222211</span>
                <button
                  onClick={() => setShowTopbar(false)}
                  className="text-white cursor-pointer"
                >
                  <FaTimes size={18} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.header
        initial={{ y: 0 }}
        animate={{ y: showTopbar ? 0 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="sticky top-0 bg-white shadow-md"
      >
        <div className="max-w-[1440px] mx-auto flex justify-between items-center px-4 py-2 md:py-3">
          {/* Logo */}
          <div className=" w-[15%] lg:w-[20%] flex items-center justify-start">
            <NavLink
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <img
                src={RenestLogo}
                alt="Renest Hotels Logo"
                className="w-20 h-13 md:h-15 cursor-pointer"
              />
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          {/* <div className="w-[70%] hidden md:flex justify-between items-center relative">
            <ul className="flex gap-6 text-gray-800 font-medium">
              <li
                className="relative flex items-center gap-1"
                onMouseEnter={() => setHotelsHover(true)}
                onMouseLeave={() => setHotelsHover(false)}
              >
                <span className="cursor-pointer relative group text-gray-800 hover:text-[#193531] flex items-center gap-1">
                  Our Hotels
                  <motion.span
                    initial={false}
                    animate={{ rotate: hotelsHover ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="inline-block"
                  >
                    {hotelsHover ? (
                      <FaAngleUp size={20} />
                    ) : (
                      <FaAngleDown size={20} />
                    )}
                  </motion.span>
                  <span className="block h-[2px] bg-[#193531] transition-transform duration-600 scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left"></span>
                </span>


                <AnimatePresence>
                  {hotelsHover && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-13.5 pt-10  left-0 mt-2 w-[600px] bg-sky-50 p-5 grid grid-cols-2 gap-5"
                    >
                      {Object.entries(hotelsData).map(([city, hotels]) => (
                        <div key={city}>
                          <h3 className="font-semibold text-gray-900 mb-2">
                            {city}
                          </h3>
                          <ul className="space-y-1">
                            {hotels.map((hotel) => (
                              <li
                                key={hotel}
                                className="group relative text-gray-600 text-sm cursor-pointer"
                              >
                                <NavLink
                                  to={`/${hotel
                                    .toLowerCase()
                                    .replace(/\s+/g, "-")}`}
                                  onClick={() => {
                                    
                                    setHotelsHover(false);
                                  }}
                                  className="group-hover:text-[#193531] transition-colors duration-300"
                                >
                                  {hotel}
                                </NavLink>
                                <span className="absolute left-0 bottom-0 h-[1.5px] w-full bg-[#193531] transform scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left transition-transform duration-600"></span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              {navItems.map((item) => (
                <li key={item.path} className="relative">
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `relative group transition-all duration-300 ${
                        isActive ||
                        (item.path === "/whats-new" && isWhatsNewActive)
                          ? "text-[#193531]"
                          : "text-gray-800"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {item.label}
                        <span
                          className={`block h-[2px] bg-[#193531] transition-transform duration-600 origin-right group-hover:origin-left ${
                            isActive ||
                            (item.path === "/whats-new" && isWhatsNewActive)
                              ? "scale-x-100"
                              : "scale-x-0 group-hover:scale-x-100"
                          }`}
                        ></span>
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div>
              <BookNowButton onClick={handleBook} />
            </div>
          </div> */}

          <div className=" w-[90%] lg:w-[80%] max-w-[1200px] hidden md:flex justify-between items-center relative px-4 lg:px-6 xl:px-8  ">
            <ul className="flex flex-wrap gap-4 md:gap-5 text-gray-800  font-medium">
              <li
                className="relative  flex items-center gap-1"
                onMouseEnter={() => setHotelsHover(true)}
                onMouseLeave={() => setHotelsHover(false)}
              >
                <span className="cursor-pointer relative group text-gray-800 hover:text-[#193531] flex items-center gap-1 text-[14px] md:text-[16px]">
                  Our Hotels
                  <motion.span
                    initial={false}
                    animate={{ rotate: hotelsHover ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="inline-block"
                  >
                    {hotelsHover ? (
                      <FaAngleUp size={18} />
                    ) : (
                      <FaAngleDown size={18} />
                    )}
                  </motion.span>
                  <span className="block h-[2px] bg-[#193531] transition-transform duration-600 scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left"></span>
                </span>

                {/* Popup menu */}
                <AnimatePresence>
                  {hotelsHover && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      // className="absolute top-[100%] left-0 mt- w-[90vw] max-w-[600px] bg-sky-50 p-5 grid grid-cols-1 sm:grid-cols-2 gap-5 shadow-md rounded-md z-50"
                      className="absolute top-12 pt-12  left-0 mt-2 w-[600px] bg-sky-50 p-5 grid grid-cols-2 gap-5"
                    >
                      {Object.entries(hotelsData).map(([city, hotels]) => (
                        <div key={city}>
                          <h3 className="font-semibold text-gray-900 mb-2">
                            {city}
                          </h3>
                          <ul className="space-y-1">
                            {hotels.map((hotel) => (
                              <li
                                key={hotel}
                                className="group relative text-gray-600 text-sm cursor-pointer"
                              >
                                <NavLink
                                  to={`/${hotel
                                    .toLowerCase()
                                    .replace(/\s+/g, "-")}`}
                                  onClick={() => setHotelsHover(false)}
                                  className="group-hover:text-[#193531] transition-colors duration-300"
                                >
                                  {hotel}
                                </NavLink>
                                <span className="absolute left-0 bottom-0 h-[1.5px] w-full bg-[#193531] transform scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left transition-transform duration-600"></span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              {navItems.map((item) => (
                <li key={item.path} className="relative">
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `relative group transition-all duration-300 text-[14px] md:text-[16px] ${
                        isActive ||
                        (item.path === "/whats-new" && isWhatsNewActive)
                          ? "text-[#193531]"
                          : "text-gray-800"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {item.label}
                        <span
                          className={`block h-[2px] bg-[#193531] transition-transform duration-600 origin-right group-hover:origin-left ${
                            isActive ||
                            (item.path === "/whats-new" && isWhatsNewActive)
                              ? "scale-x-100"
                              : "scale-x-0 group-hover:scale-x-100"
                          }`}
                        ></span>
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="ml-4">
              <BookNowButton onClick={handleBook} />
            </div>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-lg px-4 py-5">
            <ul className="flex flex-col gap-4 text-gray-800 font-medium">
              <li>
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={toggleHotelsMobile}
                >
                  Our Hotels
                  {hotelsOpenMobile ? <FaMinus /> : <FaPlus />}
                </div>

                <AnimatePresence>
                  {hotelsOpenMobile && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      className="overflow-hidden mt-2 pl-4"
                    >
                      {Object.entries(hotelsData).map(([city, hotels]) => (
                        <div key={city} className="mb-2">
                          <h3 className="font-semibold text-gray-900 text-sm">
                            {city}
                          </h3>
                          <ul className="pl-2">
                            {hotels.map((hotel) => (
                              <li
                                key={hotel}
                                className="text-gray-600 text-sm mt-1"
                              >
                                <NavLink
                                  to={`/${hotel
                                    .toLowerCase()
                                    .replace(/\s+/g, "-")}`}
                                  onClick={() => {
                                    setMenuOpen(false);
                                    setHotelsOpenMobile(false);
                                  }}
                                  className="hover:text-[#193531] transition-colors duration-300"
                                >
                                  {hotel}
                                </NavLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `transition-all duration-300 ${
                        isActive ||
                        (item.path === "/whats-new" && isWhatsNewActive)
                          ? "text-red-600"
                          : "text-gray-800"
                      }`
                    }
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <BookNowButton onClick={handleBook} />
            </div>
          </div>
        )}

        <FloatingButtons />
      </motion.header>
      {/* Add the subnavbar below the topbar */}
      <div>
        <OursHotelsSubNavbar showTopbar={showTopbar} />
      </div>
    </div>
  );
};

export default Header;
