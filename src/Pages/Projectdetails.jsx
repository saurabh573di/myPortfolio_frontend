import React from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const roleIcons = {
  UI: "🎨",
  Frontend: "⚛️",
  Backend: "🖥️",
  Fullstack: "🔧",
};

const projects = [
 {
  id: 1,
  name: " CRUD App",
  roles: ["Frontend"],
  photos: [
    "https://images.unsplash.com/photo-1591012911202-0d4b6e44b0b2?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1581091012184-1a2c8c06f0d7?auto=format&fit=crop&w=800&q=80"
  ],
  overview: `A frontend CRUD application for managing employee records, developed using React and Tailwind CSS with JSON Server as a mock backend. Users can register, login, manage employee records, and logout.`,
  details: `🔐 User Authentication:
Login and signup with session-based authentication using local state.

👤 Employee Management:
Create, Read, Update, and Delete employee records through JSON Server.

🚪 Logout:
Secure logout to end user sessions.

📱 Responsive Design:
Mobile-first responsive UI using Tailwind CSS.`,

  tools: "React.js, JSON Server, Tailwind CSS",
  futureImprovements:
    "Add search and filter employees, implement sorting, and add form validations.",
  keyFeatures: "Login/Signup, CRUD operations for employees, Logout, Responsive UI, JSON Server integration."
}
,

  {
    id: 2,
    name: "My Portfolio",
    roles: ["Frontend"],
    photos: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    ],
    overview: `My Portfolio is a personal website built to showcase my skills, projects, and professional experience. It highlights my journey as a developer with an intuitive and responsive design.`,
    details: `🌟 Showcase Projects:
Displays a collection of my personal and collaborative projects with detailed descriptions and images.

📄 Professional Summary:
Includes my education, skills, and work experience sections to give an overview of my career path.

📱 Responsive Design:
Optimized for all device sizes ensuring smooth user experience on mobile, tablet, and desktop.

🔗 Contact & Social Links:
Easy access to my email, LinkedIn, GitHub, and other social profiles.

🎨 Modern UI/UX:
Clean and minimalistic interface using Tailwind CSS for fast and customizable styling.`,
    tools: "React.js, Tailwind CSS, React Router, Framer Motion (for animations)",
    futureImprovements: `- Add blog section for sharing tech articles and tutorials.
- Implement dark mode toggle for better user experience.
- Integrate contact form with backend email service.
- Add multi-language support.`,
    keyFeatures: `Project showcase with live links,
Skills and experience summary,
Responsive layout,
Smooth animations and transitions,
Social media and contact integration.`,
  },

  {
    id: 3,
    name: "Project Three",
    roles: ["Frontend"],
    photos: [
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    ],
    overview: `DevFinder is a GitHub user finder app that fetches public user data using GitHub API.`,
    details: `🔎 Search GitHub Users:
Live search with username.

📊 View User Stats:
Followers, repos, following, etc.

🌐 API Integration:
Uses GitHub public API.`,
    tools: "React.js, Tailwind CSS, GitHub API",
    futureImprovements: "Add dark mode toggle, rate limit handling, search history.",
    keyFeatures: "API integration, live search, user profile view.",
  },

 
];

const ProjectDetailsPage = () => {
  const { state } = useLocation();
  const selectedProject = projects.find((p) => p.name === state?.project?.name);

  if (!selectedProject) {
    return (
      <div className="text-center py-20 text-gray-900 dark:text-white">
        Project not found!
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto p-8 space-y-20 bg-gray-100 dark:bg-gray-900">
      <motion.div
        className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="text-4xl font-bold mb-4 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Project ID: {selectedProject.id} | Project Title: {selectedProject.name}
        </motion.h1>

        {/* Roles */}
        <motion.div
          className="flex flex-wrap gap-6 mb-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {selectedProject.roles.map((role, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-medium text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <span className="text-2xl">{roleIcons[role] || "❓"}</span>
              <span>{role}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Photos */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {selectedProject.photos.map((url, idx) => (
            <motion.img
              key={idx}
              src={url}
              alt={`Screenshot ${idx + 1}`}
              className="rounded-lg shadow-md w-full h-64 object-cover"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
            />
          ))}
        </motion.div>

        {/* Info Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {[
            { title: "Project Overview", content: selectedProject.overview },
            { title: "Project Details", content: selectedProject.details },
            { title: "Tools & Technology", content: selectedProject.tools },
            { title: "Future Improvements", content: selectedProject.futureImprovements },
            { title: "Key Features", content: selectedProject.keyFeatures },
          ].map((section, secIdx) => (
            <motion.div
              key={secIdx}
              className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg border border-gray-300 dark:border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: secIdx * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {section.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
                {section.content}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProjectDetailsPage;
