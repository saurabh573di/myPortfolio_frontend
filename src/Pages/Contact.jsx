import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

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
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "", general: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { name, email, mobile, message } = formData;

    // Basic validation
    const newErrors = {};
    if (!name) newErrors.name = "⚠️ Please enter your name.";
    if (!email) newErrors.email = "⚠️ Please enter your email.";
    if (!message) newErrors.message = "⚠️ Please enter your message.";

    if (Object.keys(newErrors).length > 0) {
      setErrors((prev) => ({ ...prev, ...newErrors }));
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(`${API_URL}/api/contact/send-message`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, mobile }),
      });

      const data = await res.json();
      setLoading(false);

      if (!res.ok || !data.success) {
        throw new Error(data.error || data.message || "Request failed");
      }

      setSuccessMsg("✅ Message sent successfully!");
      setFormData({ name: "", email: "", mobile: "", message: "" });

      setTimeout(() => setSuccessMsg(""), 3000); // hide after 3 sec
    } catch (err) {
      console.error("Contact form error:", err);
      setLoading(false);
      setErrors((prev) => ({
        ...prev,
        general: err.message || "Something went wrong!",
      }));
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

        {successMsg && <p className="text-green-500 text-center mb-4">{successMsg}</p>}
        {errors.general && <p className="text-red-500 text-center mb-4">{errors.general}</p>}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
          {/* Name */}
          <label htmlFor="name" className="font-semibold text-gray-700 dark:text-gray-200 mb-1">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className={`${inputBaseClasses} ${errors.name ? "border-red-500 shadow-red-500/80" : "border-gray-400 dark:border-gray-600"} ${glowingShadow}`}
            autoComplete="off"
          />
          {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}

          {/* Email */}
          <label htmlFor="email" className="font-semibold text-gray-700 dark:text-gray-200 mb-1">
            Email ID
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email ID"
            value={formData.email}
            onChange={handleChange}
            className={`${inputBaseClasses} ${errors.email ? "border-red-500 shadow-red-500/80" : "border-gray-400 dark:border-gray-600"} ${glowingShadow}`}
            autoComplete="off"
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}

          {/* Mobile */}
          <label htmlFor="mobile" className="font-semibold text-gray-700 dark:text-gray-200 mb-1">
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
            className={`${inputBaseClasses} ${errors.mobile ? "border-red-500 shadow-red-500/80" : "border-gray-400 dark:border-gray-600"} ${glowingShadow}`}
            autoComplete="off"
          />
          {errors.mobile && <span className="text-red-500 text-sm">{errors.mobile}</span>}

          {/* Message */}
          <label htmlFor="message" className="font-semibold text-gray-700 dark:text-gray-200 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className={`${inputBaseClasses} ${errors.message ? "border-red-500 shadow-red-500/80" : "border-gray-400 dark:border-gray-600"} ${glowingShadow} resize-none`}
          ></textarea>
          {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded transition"
          >
            {loading ? "Sending..." : "Send Message"}
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
          <a href="mailto:rawatvijaysingh964@gmail.com" className="hover:underline">
            22bca0036@gmail.com
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
