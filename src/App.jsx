import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutSection from "./components/About";
import ProjectsPage from "./Pages/Project";
import ProjectDetailsPage from "./Pages/Projectdetails";
import ContactPage from "./Pages/Contact";
import Footer from "./components/Footer";
import Home from "./Pages/Home";



const App = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home route */}
          <Route path="/about" element={<AboutSection />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectDetailsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
