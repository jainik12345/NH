/* eslint-disable no-unused-vars */
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Select from "react-select";
import * as Yup from "yup";
import { motion } from "framer-motion";

const countryOptions = [
  { value: "+91", label: "🇮🇳 India" },
  { value: "+92", label: "🇵🇰 Pakistan" },
  { value: "+94", label: "🇱🇰 Sri Lanka" },
];

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  contactNumber: Yup.string()
    .matches(/^\d{10}$/, "Contact Number must be exactly 10 digits")
    .required("Contact Number is required"),
  query: Yup.string().required("Query is required"),
  resume: Yup.mixed().required("Resume is required"),
});
const CareersSection = () => {
  return (
    <div className="w-full pt-10 pb-10 px-4">
      <motion.div
        className="max-w-[1250px] mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center mb-12 px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-5">Work With Us</h1>
          <p className="text-gray-700 text-sm md:text-base leading-7">
            The burgeoning hospitality industry has tremendous opportunities for
            people who desire to make a career in this domain. If you wish to
            make a remarkable milestone in your career, join the team at Renest
            Hotels & Resorts. Be a part of this journey of redefining hotel
            experiences while stepping up in your career.
          </p>
        </div>
        <motion.h2
          className="text-2xl md:text-3xl font-semibold mb-8 text-center"
          variants={itemVariants}
          custom={1}
          initial="hidden"
          animate="visible"
        >
          Please Fill In Your Details
        </motion.h2>
        <Formik
          initialValues={{
            name: "",
            email: "",
            contactNumber: "",
            countryCode: { value: "+91", label: "🇮🇳 India" },
            query: "",
            resume: null,
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            const formData = {
              ...values,
              countryCode: values.countryCode.value,
            };
            console.log(formData);
            resetForm();

            document.getElementById("resumeInput").value = "";
          }}
        >
          {({ setFieldValue, isValid, dirty, values }) => (
            <Form className="space-y-6">
              <div className="grid grid-cols-1 gap-7 w-full md:w-[80%] mx-auto">
                {/* Name */}
                <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-5">
                  <label className="w-full md:w-40 text-base font-medium text-gray-700">
                    Name:
                  </label>
                  <div className="flex-1 w-full">
                    <Field
                      name="name"
                      type="text"
                      className="w-full border rounded px-3 py-2"
                      placeholder="Enter your name"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-5">
                  <label className="w-full md:w-40 text-base font-medium text-gray-700">
                    Email ID:
                  </label>
                  <div className="flex-1 w-full">
                    <Field
                      name="email"
                      type="email"
                      className="w-full border rounded px-3 py-2"
                      placeholder="Enter your email"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                </div>

                {/* Contact Number */}
                <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-5">
                  <label className="w-full md:w-40 text-base font-medium text-gray-700">
                    Contact Number:
                  </label>
                  <div className="flex-1 w-full flex flex-col sm:flex-row gap-3">
                    <div className="w-full sm:w-32">
                      <Select
                        options={countryOptions}
                        name="countryCode"
                        value={values.countryCode}
                        onChange={(option) =>
                          setFieldValue("countryCode", option)
                        }
                      />
                    </div>
                    <div className="flex-1">
                      <Field
                        name="contactNumber"
                        type="text"
                        className="w-full border rounded px-3 py-2"
                        placeholder="Phone number"
                      />
                      <ErrorMessage
                        name="contactNumber"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                  </div>
                </div>

                {/* Query */}
                <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-5">
                  <label className="w-full md:w-40 text-base font-medium text-gray-700">
                    Query:
                  </label>
                  <div className="flex-1 w-full">
                    <Field
                      name="query"
                      as="textarea"
                      rows="3"
                      className="w-full border rounded px-3 py-2"
                      placeholder="Write your query"
                    />
                    <ErrorMessage
                      name="query"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                </div>

                {/* Upload Resume */}
                <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-5">
                  <label className="w-full md:w-40 text-base font-medium text-gray-700">
                    Upload Resume:
                  </label>
                  <div className="flex-1 w-full">
                    <input
                      id="resumeInput"
                      type="file"
                      onChange={(e) =>
                        setFieldValue("resume", e.currentTarget.files[0])
                      }
                      className="w-full border rounded px-3 py-2"
                    />

                    <ErrorMessage
                      name="resume"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="w-full md:w-[80%] mx-auto mt-8 flex justify-center md:justify-end">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}  
                  whileTap={{ scale: 0.95 }}
                  className={`px-10 cursor-pointer py-2 rounded text-white text-xl transition:600 duration-600 font-bold  ${
                    isValid && dirty
                      ? "bg-[#193531] hover:bg-black"
                      : "bg-gray-400 cursor-not-allowed"
                  }`}
                  disabled={!(isValid && dirty)}
                >
                  Submit
                </motion.button>
              </div>
            </Form>
          )}
        </Formik>
      </motion.div>
    </div>
  );
};

export default CareersSection;
