// /* eslint-disable no-unused-vars */
// import React, { useState } from "react";
// import { TextField, MenuItem } from "@mui/material";
// import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import dayjs from "dayjs";
// import { motion } from "framer-motion";
// import BookNowButton from "../Buttons/BookNow";

// const HotelBooking = () => {
//   const [location, setLocation] = useState("");
//   const [hotel, setHotel] = useState("");
//   const [checkIn, setCheckIn] = useState(null);
//   const [checkOut, setCheckOut] = useState(null);
//   const [promoCode, setPromoCode] = useState("");
//   const [errors, setErrors] = useState({});

//   const handleValidation = (field, value) => {
//     setErrors((prev) => {
//       const newErrors = { ...prev };
//       if (value) {
//         delete newErrors[field];
//       } else {
//         newErrors[field] = `Please select a ${
//           field === "checkIn"
//             ? "check-in date"
//             : field === "checkOut"
//             ? "check-out date"
//             : field
//         }`;
//       }
//       return newErrors;
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newErrors = {};
//     if (!location) newErrors.location = "Please select a location";
//     if (!hotel) newErrors.hotel = "Please select a hotel";
//     if (!checkIn) newErrors.checkIn = "Please select a check-in date";
//     if (!checkOut) newErrors.checkOut = "Please select a check-out date";
//     setErrors(newErrors);
//     if (Object.keys(newErrors).length === 0) {
//       console.log({
//         location,
//         hotel,
//         checkIn: checkIn.format("DD/MM/YYYY"),
//         checkOut: checkOut.format("DD/MM/YYYY"),
//         promoCode,
//       });
//       setLocation("");
//       setHotel("");
//       setCheckIn(null);
//       setCheckOut(null);
//       setPromoCode("");
//     }
//   };

//   return (
//     <div className="w-full  py-2 px-4">
//       <motion.div
//         initial={{ opacity: 0, y: 50 }} 
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         viewport={{ once: true, amount: 0.3 }}
//         className="max-w-[1400px] mx-auto rounded-xl p-6 md:p-10"
//       >
//         <form
//           onSubmit={handleSubmit}
//           className="flex flex-wrap justify-center items-end gap-4"
//         >
//           {/* Location */}
//           <div className="flex flex-col w-full sm:w-[190px] md:w-[220px] lg:w-[250px]">
//             <label className="text-black text-sm mb-1">Location*</label>
//             <TextField
//               select
//               value={location}
//               onChange={(e) => {
//                 setLocation(e.target.value);
//                 handleValidation("location", e.target.value);
//               }}
//               size="small"
//               fullWidth
//               error={!!errors.location}
//               helperText={errors.location}
//               sx={{
//                 backgroundColor: "white",
//                 borderRadius: "6px",
//                 "& .MuiSelect-select:placeholder": {
//                   color: "#9e9e9e",
//                 },
//               }}
//               displayEmpty
//               inputProps={{ "aria-label": "Without label" }}
//             >
//               <MenuItem value="" disabled>
//                 <span style={{ color: "#9e9e9e" }}>Select Location</span>
//               </MenuItem>
//               <MenuItem value="Jaipur">Jaipur</MenuItem>
//               <MenuItem value="Udaipur">Udaipur</MenuItem>
//               <MenuItem value="Mumbai">Mumbai</MenuItem>
//             </TextField>
//           </div>

//           {/* Hotel */}
//           <div className="flex flex-col w-full sm:w-[190px] md:w-[220px] lg:w-[250px]">
//             <label className="text-black text-sm mb-1">Hotel*</label>
//             <TextField
//               select
//               value={hotel}
//               onChange={(e) => {
//                 setHotel(e.target.value);
//                 handleValidation("hotel", e.target.value);
//               }}
//               size="small"
//               fullWidth
//               error={!!errors.hotel}
//               helperText={errors.hotel}
//               sx={{
//                 backgroundColor: "white",
//                 borderRadius: "6px",
//                 "& .MuiSelect-select:placeholder": {
//                   color: "#9e9e9e",
//                 },
//               }}
//               displayEmpty
//               inputProps={{ "aria-label": "Without label" }}
//             >
//               <MenuItem value="" disabled>
//                 <span style={{ color: "#9e9e9e" }}>Select Hotel</span>
//               </MenuItem>
//               <MenuItem value="Renest Jaipur">Renest Jaipur</MenuItem>
//               <MenuItem value="Renest Udaipur">Renest Udaipur</MenuItem>
//               <MenuItem value="Renest Mumbai">Renest Mumbai</MenuItem>
//             </TextField>
//           </div>

//           {/* Check In */}
//           <div className="flex flex-col w-full sm:w-[170px] md:w-[200px] lg:w-[220px]">
//             <label className="text-black text-sm mb-1">Check In*</label>
//             <LocalizationProvider dateAdapter={AdapterDayjs}>
//               <DatePicker
//                 value={checkIn}
//                 onChange={(newValue) => {
//                   setCheckIn(newValue);
//                   handleValidation("checkIn", newValue);
//                   if (newValue && (!checkOut || newValue.isAfter(checkOut))) {
//                     setCheckOut(null);
//                   }
//                 }}
//                 minDate={dayjs()}
//                 format="DD/MM/YYYY"
//                 slotProps={{
//                   textField: {
//                     size: "small",
//                     fullWidth: true,
//                     placeholder: "Select Date",
//                     error: !!errors.checkIn,
//                     helperText: errors.checkIn,
//                     sx: {
//                       backgroundColor: "white",
//                       borderRadius: "6px",
//                     },
//                   },
//                 }}
//               />
//             </LocalizationProvider>
//           </div>

//           {/* Check Out */}
//           <div className="flex flex-col w-full sm:w-[170px] md:w-[200px] lg:w-[220px]">
//             <label className="text-black text-sm mb-1">Check Out*</label>
//             <LocalizationProvider dateAdapter={AdapterDayjs}>
//               <DatePicker
//                 value={checkOut}
//                 onChange={(newValue) => {
//                   setCheckOut(newValue);
//                   handleValidation("checkOut", newValue);
//                 }}
//                 minDate={checkIn ? checkIn.add(1, "day") : dayjs()}
//                 format="DD/MM/YYYY"
//                 slotProps={{
//                   textField: {
//                     size: "small",
//                     fullWidth: true,
//                     placeholder: "Select Date",
//                     error: !!errors.checkOut,
//                     helperText: errors.checkOut,
//                     sx: {
//                       backgroundColor: "white",
//                       borderRadius: "6px",
//                     },
//                   },
//                 }}
//               />
//             </LocalizationProvider>
//           </div>

//           {/* Promo Code */}
//           <div className="flex flex-col w-full sm:w-[160px] md:w-[180px] lg:w-[200px]">
//             <label className="text-black text-sm mb-1">Promo Code</label>
//             <TextField
//               value={promoCode}
//               onChange={(e) => setPromoCode(e.target.value)}
//               placeholder="Enter Promo Code"
//               size="small"
//               fullWidth
//               sx={{
//                 backgroundColor: "white",
//                 borderRadius: "6px",
//               }}
//             />
//           </div>

//           {/* Book Now Button */}
//           <div className="w-full mt-3 md:mt-7 sm:w-auto">
//             <BookNowButton
//               width="180px"
//               paddingX="2rem"
//               paddingY="0.55rem"
//               fontSize="16px"
//               children="Book Now"
//             />
//           </div>
//         </form>
//       </motion.div>
//     </div>
//   );
// };

// export default HotelBooking;

/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { TextField, MenuItem } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import BookNowButton from "../Buttons/BookNow";

const HotelBooking = () => {
  const [location, setLocation] = useState("Jaipur"); // default value set
  const [hotel, setHotel] = useState("Renest Jaipur"); // default value set
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [promoCode, setPromoCode] = useState("");
  const [errors, setErrors] = useState({});

  const handleValidation = (field, value) => {
    setErrors((prev) => {
      const newErrors = { ...prev };
      if (value) {
        delete newErrors[field];
      } else {
        newErrors[field] = `Please select a ${
          field === "checkIn"
            ? "check-in date"
            : field === "checkOut"
            ? "check-out date"
            : field
        }`;
      }
      return newErrors;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!location) newErrors.location = "Please select a location";
    if (!hotel) newErrors.hotel = "Please select a hotel";
    if (!checkIn) newErrors.checkIn = "Please select a check-in date";
    if (!checkOut) newErrors.checkOut = "Please select a check-out date";
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      console.log({
        location,
        hotel,
        checkIn: checkIn.format("DD/MM/YYYY"),
        checkOut: checkOut.format("DD/MM/YYYY"),
        promoCode,
      });
      setLocation("Jaipur");
      setHotel("Renest Jaipur");
      setCheckIn(null);
      setCheckOut(null);
      setPromoCode("");
    }
  };

  return (
    <div className="w-full  "> 
      <div className="max-w-[1400px] mx-auto rounded-xl p-6 md:p-10 ">
        <form
          onSubmit={handleSubmit}
          className="flex flex-wrap justify-center items-end gap-4"
        >
          {/* Location */}
          <div className="flex flex-col w-full sm:w-[190px] md:w-[220px] lg:w-[250px]">
            <label className="text-black text-sm mb-1">Location*</label>
            <TextField
              select
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
                handleValidation("location", e.target.value);
              }}
              size="small"
              fullWidth
              error={!!errors.location}
              helperText={errors.location}
              sx={{
                backgroundColor: "white",
                borderRadius: "6px",
              }}
            >
              <MenuItem value="Jaipur">Jaipur</MenuItem>
              <MenuItem value="Udaipur">Udaipur</MenuItem>
              <MenuItem value="Mumbai">Mumbai</MenuItem>
            </TextField>
          </div>

          {/* Hotel */}
          <div className="flex flex-col w-full sm:w-[190px] md:w-[220px] lg:w-[250px]">
            <label className="text-black text-sm mb-1">Hotel*</label>
            <TextField
              select
              value={hotel}
              onChange={(e) => {
                setHotel(e.target.value);
                handleValidation("hotel", e.target.value);
              }}
              size="small"
              fullWidth
              error={!!errors.hotel}
              helperText={errors.hotel}
              sx={{
                backgroundColor: "white",
                borderRadius: "6px",
              }}
            >
              <MenuItem value="Renest Jaipur">Renest Jaipur</MenuItem>
              <MenuItem value="Renest Udaipur">Renest Udaipur</MenuItem>
              <MenuItem value="Renest Mumbai">Renest Mumbai</MenuItem>
            </TextField>
          </div>

          {/* Check In */}
          <div className="flex flex-col w-full sm:w-[170px] md:w-[200px] lg:w-[220px]">
            <label className="text-black text-sm mb-1">Check In*</label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={checkIn}
                onChange={(newValue) => {
                  setCheckIn(newValue);
                  handleValidation("checkIn", newValue);
                  if (newValue && (!checkOut || newValue.isAfter(checkOut))) {
                    setCheckOut(null);
                  }
                }}
                minDate={dayjs()}
                format="DD/MM/YYYY"
                slotProps={{
                  textField: {
                    size: "small",
                    fullWidth: true,
                    error: !!errors.checkIn,
                    helperText: errors.checkIn,
                    sx: {
                      backgroundColor: "white",
                      borderRadius: "6px",
                    },
                  },
                }}
              />
            </LocalizationProvider>
          </div>

          {/* Check Out */}
          <div className="flex flex-col w-full sm:w-[170px] md:w-[200px] lg:w-[220px]">
            <label className="text-black text-sm mb-1">Check Out*</label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={checkOut}
                onChange={(newValue) => {
                  setCheckOut(newValue);
                  handleValidation("checkOut", newValue);
                }}
                minDate={checkIn ? checkIn.add(1, "day") : dayjs()}
                format="DD/MM/YYYY"
                slotProps={{
                  textField: {
                    size: "small",
                    fullWidth: true,
                    error: !!errors.checkOut,
                    helperText: errors.checkOut,
                    sx: {
                      backgroundColor: "white",
                      borderRadius: "6px",
                    },
                  },
                }}
              />
            </LocalizationProvider>
          </div>

          {/* Promo Code */}
          <div className="flex flex-col w-full sm:w-[160px] md:w-[180px] lg:w-[200px]">
            <label className="text-black text-sm mb-1">Promo Code</label>
            <TextField
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              placeholder="Enter Promo Code"
              size="small"
              fullWidth
              sx={{
                backgroundColor: "white",
                borderRadius: "6px",
              }}
            />
          </div>

          {/* Book Now Button */}
          <div className="w-full mt-3 md:mt-7 sm:w-auto">
            <BookNowButton
              width="180px"
              paddingX="2rem"
              paddingY="0.55rem"
              fontSize="16px"
              children="Book Now"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default HotelBooking;
