import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion"; // Add this import

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
    general: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "", general: "" }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  let hasError = false;
  const newErrors = {
    name: "",
    email: "",
    mobile: "",
    message: "",
    general: "",
  };

  if (!formData.name.trim()) {
    newErrors.name = "Name is required";
    hasError = true;
  }
  if (!formData.email.trim()) {
    newErrors.email = "Email is required";
    hasError = true;
  }
  if (!formData.mobile.trim()) {
    newErrors.mobile = "Mobile number is required";
    hasError = true;
  }
  if (!formData.message.trim()) {
    newErrors.message = "Message is required";
    hasError = true;
  }

  if (hasError) {
    setErrors(newErrors);
    return;
  }

  try {
    // change POST URL to backend route
    const base = import.meta.env.VITE_API_URL || "http://localhost:3001";

    const res = await fetch(`${base}/api/contact/send-message`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, mobile, message }),
    });

    const data = await res.json();

    if (res.ok) {
      alert("Message sent! Thank you.");
      setFormData({ name: "", email: "", mobile: "", message: "" });
    } else {
      setErrors((prev) => ({ ...prev, general: data.error || "Failed to send message." }));
    }
  } catch (err) {
    setErrors((prev) => ({ ...prev, general: "Server error. Try again later." }));
  }
};

  // Shared classes for inputs and textarea
  const inputBaseClasses =
    "px-4 py-3 rounded-md border bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-0 transition duration-300";

  const glowingShadow =
    "hover:shadow-[0_0_10px_2px_rgba(220,38,38,0.6),0_0_20px_4px_rgba(139,92,246,0.7)] focus:shadow-[0_0_10px_2px_rgba(220,38,38,0.9),0_0_20px_4px_rgba(139,92,246,0.9)]";

  return (
    <motion.section
      className="max-w-7xl mx-auto p-8 pt-20 bg-white dark:bg-gray-900 rounded-lg min-h-[80vh] flex flex-col md:flex-row gap-10 transition-colors duration-300"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Left: Contact Form */}
      <motion.div
        className="md:w-[40%] bg-white dark:bg-gray-800 rounded-lg p-8 flex flex-col mt-6"
        style={{
          boxShadow:
            "0 8px 15px rgba(139, 92, 246, 0.5), " +
            "-8px 0 15px rgba(139, 92, 246, 0.4), " +
            "8px 0 15px rgba(139, 92, 246, 0.4), " +
            "0 -8px 10px 3px #fff",
        }}
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
          Contact Form
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
          {/* Name */}
          <label
            htmlFor="name"
            className="font-semibold text-gray-700 dark:text-gray-200 mb-1"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className={`${inputBaseClasses} ${
              errors.name
                ? "border-red-500 shadow-red-500/80"
                : "border-gray-400 dark:border-gray-600"
            } ${glowingShadow}`}
            autoComplete="off"
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name}</span>
          )}

          {/* Email */}
          <label
            htmlFor="email"
            className="font-semibold text-gray-700 dark:text-gray-200 mb-1"
          >
            Email ID
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email ID"
            value={formData.email}
            onChange={handleChange}
            className={`${inputBaseClasses} ${
              errors.email
                ? "border-red-500 shadow-red-500/80"
                : "border-gray-400 dark:border-gray-600"
            } ${glowingShadow}`}
            autoComplete="off"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email}</span>
          )}

          {/* Mobile */}
          <label
            htmlFor="mobile"
            className="font-semibold text-gray-700 dark:text-gray-200 mb-1"
          >
            Mobile Number
          </label>
          <input
            id="mobile"
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            pattern="[0-9]{10}"
            title="Enter 10 digit mobile number"
            className={`${inputBaseClasses} ${
              errors.mobile
                ? "border-red-500 shadow-red-500/80"
                : "border-gray-400 dark:border-gray-600"
            } ${glowingShadow}`}
            autoComplete="off"
          />
          {errors.mobile && (
            <span className="text-red-500 text-sm">{errors.mobile}</span>
          )}

          {/* Message */}
          <label
            htmlFor="message"
            className="font-semibold text-gray-700 dark:text-gray-200 mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className={`${inputBaseClasses} ${
              errors.message
                ? "border-red-500 shadow-red-500/80"
                : "border-gray-400 dark:border-gray-600"
            } ${glowingShadow} resize-none`}
          ></textarea>
          {errors.message && (
            <span className="text-red-500 text-sm">{errors.message}</span>
          )}

          {errors.general && (
            <small className="text-red-500 -mt-2">{errors.general}</small>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded transition"
          >
            Send Message
          </button>
        </form>
      </motion.div>

      {/* Right: Contact Info */}
      <motion.div
        className="md:w-1/2 bg-white dark:bg-gray-800 rounded-lg p-8 flex flex-col justify-center gap-8 shadow-none"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          Contact Details
        </h2>
        <div className="flex items-center gap-4 text-gray-700 dark:text-gray-200 text-lg">
          <span className="text-2xl">📍</span>
          <span> Garur, Bageshwar, Uttarakhand, India</span>
        </div>
        <div className="flex items-center gap-4 text-gray-700 dark:text-gray-200 text-lg">
          <span className="text-2xl">📧</span>
          <a
            href="mailto:rawatvijaysingh964@gmail.com"
            className="hover:underline"
          >
           saurabhsinghdosad20@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-4 text-gray-700 dark:text-gray-200 text-lg">
          <span className="text-2xl">📞</span>
          <a href="tel:+918006106542" className="hover:underline">
           7895072404
          </a>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ContactPage;
