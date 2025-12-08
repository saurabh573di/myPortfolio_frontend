import React, { useState, useMemo, useEffect } from "react";
import "../styles/rotate.css";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: 1,
    name: " CRUD App",
    category: "Web Development",
    description: "using React and Tailwind CSS  and json server a crud app ..",
    imageUrl:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "My Portfolio",
    category: "web devlopment",
    description: "A React and tailwind website.",
    imageUrl:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Project Three",
    category: "Web Development",
    description:
      "An e-commerce site with cart, login, and payment features using MERN stack.",
    imageUrl:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  },
  
];

const ProjectsPage = () => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [animateImages, setAnimateImages] = useState(false);

  const categories = useMemo(() => {
    const cats = projects.map((p) => p.category);
    return ["All", ...Array.from(new Set(cats))];
  }, []);

  const filteredProjects = useMemo(() => {
    const searchTerm = searchInput.toLowerCase().trim();

    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;

      const matchesSearch =
        project.name.toLowerCase().includes(searchTerm) ||
        project.category.toLowerCase().includes(searchTerm);

      return matchesCategory && matchesSearch;
    });
  }, [searchInput, selectedCategory]);

  const handleImageClick = (project) => {
    navigate(`/projects/${project.id}`, { state: { project } });
  };

  useEffect(() => {
    setAnimateImages(true);
  }, []);

  return (
    <section className="w-full py-10 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <div className="w-fit mx-auto pb-1 px-2 rounded-md text-3xl font-extrabold text-gray-900 dark:text-white">
        Projects Portfolio
      </div>
      <p className="text-center text-gray-700 dark:text-gray-300 mt-4 mb-8 text-lg font-medium max-w-xl mx-auto">
        Search projects by title or filter by category
      </p>

      {/* Search & Filter */}
      <div className="max-w-7xl mx-auto mb-8 flex flex-col sm:flex-row justify-between gap-4 items-center px-4">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-48 p-2 rounded-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <div className="flex w-full sm:w-64 items-center relative">
          <span className="absolute left-3 text-gray-400 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
              />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search projects..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="flex-grow p-2 pl-10 rounded-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          />
        </div>
      </div>

      {/* Projects List */}
      <div className="flex flex-col items-center">
        {filteredProjects.length === 0 ? (
          <p className="text-center text-gray-600 dark:text-gray-400 px-4">
            No projects found.
          </p>
        ) : (
          filteredProjects.map((project, index) => {
            const isEven = index % 2 !== 0;
            return (
              <div
                key={project.id}
                className={`xl:w-[80%] sm:w-[85%] w-[90%] mx-auto flex flex-col md:flex-row lg:gap-4 gap-2 justify-center items-start mt-6 group ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`md:w-[50%] w-full rounded-md overflow-hidden relative group ${
                    animateImages ? "fade-right-animation" : ""
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div
                    onClick={() => handleImageClick(project)}
                    className="cursor-pointer"
                    title={`Go to ${project.name}`}
                  >
                    <img
                      src={project.imageUrl}
                      alt={project.name}
                      className="w-full h-[300px] object-cover md:rounded-md image-zoom-hover"
                    />
                  </div>

                  <div className="w-full bg-white dark:bg-gray-100 text-gray-900 dark:text-gray-800 text-center py-4 border-t border-gray-300 dark:border-gray-700">
                    <h2 className="text-xl font-semibold">{project.name}</h2>
                    <p className="text-sm text-gray-600 mt-1">
                      {project.category}
                    </p>
                  </div>
                </div>

                <div className="md:w-[50%] w-full p-6 flex flex-col justify-start rounded-md bg-gray-100 dark:bg-gray-800 shadow-lg">
                  <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
                    {project.name}
                  </h2>
                  <p className="text-md mt-2 font-medium text-gray-600 dark:text-gray-300">
                    {project.category}
                  </p>
                  <p className="text-sm mt-4 text-gray-700 dark:text-gray-400">
                    {project.description}
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
};

export default ProjectsPage;
