/* eslint-disable no-unused-vars */
// import React, { useState } from "react";
// import image1 from "../../../assets/images/about_image_1.webp";
// import image2 from "../../../assets/images/about_image_2.webp";
// import image3 from "../../../assets/images/about_image_1.webp";
// import image4 from "../../../assets/images/about_image_2.webp";
// import image5 from "../../../assets/images/about_image_1.webp";
// import image6 from "../../../assets/images/about_image_2.webp";
// import { IoClose } from "react-icons/io5";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// const AboutHeroSection = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [modalImages, setModalImages] = useState([]);
//   const [animateOut, setAnimateOut] = useState(false);

//   const sectionOneImages = [image1, image2, image3];
//   const sectionTwoImages = [image4, image5, image6];

//   const openModal = (index, imagesArray) => {
//     setCurrentImageIndex(index);
//     setModalImages(imagesArray);
//     setIsModalOpen(true);
//     setAnimateOut(false);
//   };

//   const closeModal = () => {
//     setAnimateOut(true);
//     setTimeout(() => {
//       setIsModalOpen(false);
//       setAnimateOut(false);
//     }, 400);
//   };

//   const goToNextImage = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % modalImages.length);
//   };

//   const goToPreviousImage = () => {
//     setCurrentImageIndex(
//       (prevIndex) => (prevIndex - 1 + modalImages.length) % modalImages.length
//     );
//   };

//   const renderImageGrid = (images, onClickImage) => (
//     <div className="md:w-[40%] w-full flex flex-col space-y-4">
//       <div>
//         <img
//           src={images[0]}
//           alt="Main"
//           className="w-full h-48 object-cover rounded-lg cursor-pointer"
//           onClick={() => onClickImage(0)}
//         />
//       </div>
//       <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
//         <div className="md:w-1/2 w-full">
//           <img
//             src={images[1]}
//             alt="Second"
//             className="w-full h-40 object-cover rounded-lg cursor-pointer"
//             onClick={() => onClickImage(1)}
//           />
//         </div>
//         <div className="md:w-1/2 w-full">
//           <img
//             src={images[2]}
//             alt="Third"
//             className="w-full h-40 object-cover rounded-lg cursor-pointer"
//             onClick={() => onClickImage(2)}
//           />
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <>
//       <div className="relative">
//         <div className="w-full bg-amber-50 shadow-md py-10">
//           <div className="max-w-[1250px] mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-10 gap-10">
//             <div className="md:w-2/3 w-full text-center md:text-left flex items-center">
//               <div>
//                 <h1 className="text-2xl md:text-2xl font-bold mb-4 text-center">
//                   Welcome to Renest Hotels and Resorts
//                 </h1>
//                 <p className="text-base md:text-[16px] text-justify leading-8">
//                   Renest Hotels & Resorts offers boutique accommodations in

//                 </p>
//               </div>
//             </div>

//             {renderImageGrid(sectionOneImages, (index) =>
//               openModal(index, sectionOneImages)
//             )}
//           </div>
//         </div>

//         <div className="w-full bg-amber-50 shadow-md py-10">
//           <div className="max-w-[1250px] mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-10 gap-10">

//             {renderImageGrid(sectionTwoImages, (index) =>
//               openModal(index, sectionTwoImages)
//             )}

//             <div className="md:w-2/3 w-full text-center md:text-left flex items-center">
//               <div>
//                 <h1 className="text-2xl md:text-2xl font-bold mb-4 text-center">
//                   What makes us Unique
//                 </h1>
//                 <p className="text-base md:text-[16px] text-justify leading-9">
//                   We care deeply about our people and the ecosystems they are a
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="w-full bg-amber-50 shadow-md py-10">
//           <div className="max-w-[1250px] mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-10 gap-10">

//             <div className="md:w-2/3 w-full text-center md:text-left flex items-center">
//               <div>
//                 <h1 className="text-2xl md:text-2xl font-bold mb-4 text-center md:text-center">
//                   Our History
//                 </h1>
//                 <p className="text-base md:text-[16px] text-justify leading-8">
//                   Spearheaded by Mr Rajkumar Rai, Unique Mercantile India Ltd
//                   Resorts.
//                 </p>
//               </div>
//             </div>

//             <div className="md:w-[40%] w-full">
//               <img
//                 src={image1}
//                 alt="Our History"
//                 className="w-full h-72 object-cover rounded-lg"
//               />
//             </div>
//           </div>
//         </div>

//         {isModalOpen && (
//           <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-xl p-4">
//             <div
//               className={`relative bg-transparent rounded-lg w-full max-w-[100%] max-h-[100%] md:h-[100%] flex flex-col justify-center items-center shadow-xl transform transition-all duration-500 ${
//                 animateOut
//                   ? "translate-y-[100%] opacity-0"
//                   : "translate-y-0 opacity-100"
//               }`}
//             >
//               <button
//                 className="absolute top-4 right-4 text-3xl text-gray-600 hover:text-black cursor-pointer"
//                 onClick={closeModal}
//               >
//                 <IoClose />
//               </button>
//               <div className="flex items-center justify-between w-full px-4 md:px-6 gap-4">
//                 <button
//                   className="text-2xl text-gray-700 hover:text-black transition cursor-pointer"
//                   onClick={goToPreviousImage}
//                 >
//                   <FaArrowLeft />
//                 </button>
//                 <img
//                   src={modalImages[currentImageIndex]}
//                   alt={`Modal ${currentImageIndex + 1}`}
//                   className="max-h-[70vh] w-full object-contain rounded-lg"
//                 />
//                 <button
//                   className="text-2xl text-gray-700 hover:text-black transition cursor-pointer"
//                   onClick={goToNextImage}
//                 >
//                   <FaArrowRight />
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default AboutHeroSection;

import React, { useState } from "react";
import { motion } from "framer-motion";
import image1 from "../../../assets/images/about_image_1.webp";
import image2 from "../../../assets/images/about_image_2.webp";
import image3 from "../../../assets/images/about_image_1.webp";
import image4 from "../../../assets/images/about_image_2.webp";
import image5 from "../../../assets/images/about_image_1.webp";
import image6 from "../../../assets/images/about_image_2.webp";
import { IoClose } from "react-icons/io5";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const AboutHeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [modalImages, setModalImages] = useState([]);
  const [animateOut, setAnimateOut] = useState(false);

  const sectionOneImages = [image1, image2, image3];
  const sectionTwoImages = [image4, image5, image6];

  const [direction, setDirection] = useState(0);

  const openModal = (index, imagesArray) => {
    if (window.innerWidth <= 768) return;
    setCurrentImageIndex(index);
    setModalImages(imagesArray);
    setIsModalOpen(true);
    setAnimateOut(false);
  };

  const closeModal = () => {
    setAnimateOut(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setAnimateOut(false);
    }, 400);
  };

  // const goToNextImage = () => {
  //   setCurrentImageIndex((prevIndex) => (prevIndex + 1) % modalImages.length);
  // };

  // const goToPreviousImage = () => {
  //   setCurrentImageIndex(
  //     (prevIndex) => (prevIndex - 1 + modalImages.length) % modalImages.length
  //   );
  // };
  const goToNextImage = () => {
    setDirection(1);
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % modalImages.length);
  };

  const goToPreviousImage = () => {
    setDirection(-1);
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + modalImages.length) % modalImages.length
    );
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  const imageVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      position: "absolute",
    }),
    center: {
      x: 0,
      opacity: 1,
      position: "relative",
      transition: { duration: 0.5 },
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      position: "absolute",
      transition: { duration: 0.4 },
    }),
  };

  const renderImageGrid = (images, onClickImage) => (
    <motion.div
      className="md:w-[40%] w-full flex flex-col space-y-4"
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div>
        <img
          src={images[0]}
          alt="Main"
          className="w-full h-48 object-cover rounded-lg cursor-pointer"
          onClick={() => onClickImage(0)}
        />
      </div>
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
        <div className="md:w-1/2 w-full">
          <img
            src={images[1]}
            alt="Second"
            className="w-full h-40 object-cover rounded-lg cursor-pointer"
            onClick={() => onClickImage(1)}
          />
        </div>
        <div className="md:w-1/2 w-full">
          <img
            src={images[2]}
            alt="Third"
            className="w-full h-40 object-cover rounded-lg cursor-pointer"
            onClick={() => onClickImage(2)}
          />
        </div>
      </div>
    </motion.div>
  );

  return (
    <>
      <div className="relative pt-10 pb-10 ">
        {/* Section 1 */}
        <motion.div
          className="w-full py-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-[1250px] mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-10 gap-10">
            <motion.div
              className="md:w-2/3 w-full text-center md:text-left flex items-center"
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div>
                <h1 className="text-2xl md:text-2xl font-bold mb-4 text-center">
                  Welcome to Renest Hotels and Resorts
                </h1>
                <p className="text-base md:text-[16px] text-justify leading-8">
                  Renest Hotels & Resorts offers unique boutique accommodations
                  that provide immersive nature experiences in picturesque
                  locations across India. With a focus on blending natural
                  aesthetics and sustainability, our hotels go beyond the
                  conventional four walls. From the spiritual towns of Shirdi,
                  Tirupati, and Haridwar to the popular hill station of Manali
                  and the business hubs of Jaipur and Gandhidham, we strive to
                  deliver unforgettable holiday experiences. We have recently
                  expanded to Mussoorie and our future plans include
                  establishing a presence in Goa, Leh, and Jim Corbett. At
                  Renest Hotels & Resorts, we invite all types of travellers to
                  indulge in exceptional stays that embrace the beauty of
                  nature.
                </p>
              </div>
            </motion.div>

            {renderImageGrid(sectionOneImages, (index) =>
              openModal(index, sectionOneImages)
            )}
          </div>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          className="w-full  py-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="max-w-[1250px] mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-10 gap-10">
            {renderImageGrid(sectionTwoImages, (index) =>
              openModal(index, sectionTwoImages)
            )}

            <motion.div
              className="md:w-2/3 w-full text-center md:text-left flex items-center"
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div>
                <h1 className="text-2xl md:text-2xl font-bold mb-4 text-center">
                  What makes us Unique
                </h1>
                <p className="text-base md:text-[16px] text-justify leading-9">
                  We care deeply about our people and the ecosystems they are a
                  part of. We want you to experience this magic first hand. From
                  growing our own organic produce, recycling rainwater,
                  establishing in-house bottling plants, vertical gardens and
                  open skylights, we have incorporated sustainable measures to
                  preserve and protect our environment.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Section 3 */}
        <motion.div
          className="w-full  py-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="max-w-[1250px] mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-10 gap-10">
            <motion.div
              className="md:w-2/3 w-full text-center md:text-left flex items-center"
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div>
                <h1 className="text-2xl md:text-2xl font-bold mb-4 text-center md:text-center">
                  Our History
                </h1>
                <p className="text-base md:text-[16px] text-justify leading-8">
                  Spearheaded by Mr Rajkumar Rai, Unique Mercantile India Ltd
                  (UMIL) was established in 1996 and it's head office stationed
                  at Ahmedabad, Gujarat. The company launched its insurance
                  vertical in 2001 and saw profits that fuelled them to invest
                  in a new hospitality vertical soon after. UMIL boasts of
                  diversified portfolio in the last 25 years in Insurance, Real
                  Estate, Hospitality & Vacations. UMIL also operates the
                  internationally acclaimed Wyndham hotels in India with Howard
                  Johnson, Bangalore and kolkata, Ramada Udaipur Resort & Spa
                  and UMIL's very own home-grown brand - Renest Hotels and
                  Resorts
                </p>
              </div>
            </motion.div>

            <motion.div
              className="md:w-[40%] w-full"
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src={image1}
                alt="Our History"
                className="w-full h-72 object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Modal */}
        {isModalOpen && (
          // <motion.div
          //   className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-xl p-4"
          //   initial={{ opacity: 0 }}
          //   animate={{ opacity: 1 }}
          //   exit={{ opacity: 0 }}
          //   transition={{ duration: 0.5 }}
          // >
          //   <div
          //     className={`relative bg-transparent rounded-lg w-full max-w-[100%] max-h-[100%] md:h-[100%] flex flex-col justify-center items-center shadow-xl transform transition-all duration-500 ${
          //       animateOut
          //         ? "translate-y-[100%] opacity-0"
          //         : "translate-y-0 opacity-100"
          //     }`}
          //   >
          //     <button
          //       className="absolute top-4 right-4 text-3xl text-gray-600 hover:text-black cursor-pointer"
          //       onClick={closeModal}
          //     >
          //       <IoClose />
          //     </button>
          //     <div className="flex items-center justify-between w-full px-4 md:px-6 gap-4">
          //       <button
          //         className="text-2xl text-gray-700 hover:text-black transition cursor-pointer"
          //         onClick={goToPreviousImage}
          //       >
          //         <FaArrowLeft />
          //       </button>
          //       <img
          //         src={modalImages[currentImageIndex]}
          //         alt={`Modal ${currentImageIndex + 1}`}
          //         className="max-h-[70vh] w-full object-contain rounded-lg"
          //       />
          //       <button
          //         className="text-2xl text-gray-700 hover:text-black transition cursor-pointer"
          //         onClick={goToNextImage}
          //       >
          //         <FaArrowRight />
          //       </button>
          //     </div>
          //   </div>
          // </motion.div>

          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-xl p-4"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div
              className={`relative bg-transparent rounded-lg w-full max-w-[100%] max-h-[100%] md:h-[100%] flex flex-col justify-center items-center shadow-xl`}
            >
              <button
                className="absolute top-4 right-4 text-3xl text-gray-600 hover:text-black cursor-pointer"
                onClick={closeModal}
              >
                <IoClose />
              </button>

              <div className="relative flex items-center justify-between w-full px-4 md:px-6 gap-4 overflow-hidden">
                <button
                  className="text-2xl text-gray-700 hover:text-black transition cursor-pointer z-10"
                  onClick={goToPreviousImage}
                >
                  <FaArrowLeft />
                </button>

                <div className="relative w-full h-full flex items-center justify-center">
                  <motion.img
                    key={currentImageIndex}
                    src={modalImages[currentImageIndex]}
                    alt={`Modal ${currentImageIndex + 1}`}
                    className="max-h-[70vh] w-full object-contain rounded-lg"
                    custom={direction}
                    variants={imageVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                  />
                </div>

                <button
                  className="text-2xl text-gray-700 hover:text-black transition cursor-pointer z-10"
                  onClick={goToNextImage}
                >
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default AboutHeroSection;
