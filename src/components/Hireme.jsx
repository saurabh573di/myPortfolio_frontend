import React, { useState } from "react";

const HireMeModal = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "",
    description: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, projectType, description } = form;

    // Validate fields
    const newErrors = {};
    if (!name) newErrors.name = "⚠️ Please enter your name.";
    if (!email) newErrors.email = "⚠️ Please enter your email.";
    if (!projectType) newErrors.projectType = "⚠️ Please select a project type.";
    if (!description) newErrors.description = "⚠️ Please enter project description.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    setSuccessMsg("");

    const base = import.meta.env.VITE_API_URL || "http://localhost:3001";

    try {
      const res = await fetch(`${base}/api/hire`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, projectType, description }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Request failed");
      }

      setSuccessMsg("✅ Request sent successfully!");
      setForm({ name: "", email: "", projectType: "", description: "" });

    } catch (err) {
      console.error("Backend error:", err);
      setErrors({ form: err.message || "Server error. Try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-40"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white p-6 rounded-xl w-full max-w-md dark:bg-gray-800 relative z-50">
        <h2 className="text-2xl font-bold text-center text-black dark:text-white mb-6">
          Hire Me
        </h2>

        {successMsg && <p className="text-green-500 text-center mb-4">{successMsg}</p>}
        {errors.form && <p className="text-red-500 text-center mb-4">{errors.form}</p>}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name Field */}
          <div>
            <label className="block text-black dark:text-white">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              placeholder="Your Name"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-black dark:text-white">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              placeholder="Your Email"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Project Type Field */}
          <div>
            <label className="block text-black dark:text-white">Project Type</label>
            <select
              name="projectType"
              value={form.projectType}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            >
              <option value="">Select a type</option>
              <option>Web Application</option>
              <option>Mobile App</option>
              <option>UI/UX Design</option>
              <option>Full Stack Development</option>
              <option>Other</option>
            </select>
            {errors.projectType && <p className="text-red-500 text-sm mt-1">{errors.projectType}</p>}
          </div>

          {/* Project Description Field */}
          <div>
            <label className="block text-black dark:text-white">Project Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows="3"
              placeholder="Brief description..."
              className="w-full p-2 border rounded-md"
            />
            {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
          </div>

          {/* Buttons */}
          <div className="flex flex-col mt-10 space-y-4">
            <button
              type="submit"
              disabled={loading}
              className={`text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Sending..." : "Send Request"}
            </button>

            <button
              type="button"
              onClick={onClose}
              className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HireMeModal;
