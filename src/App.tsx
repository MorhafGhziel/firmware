import { Layout } from "./components/Layout";
import { HomePage } from "./components/HomePage";
import { DiscoverProjects } from "./components/DiscoverProjects";
import { CreateProject } from "./components/CreateProject";
import { Portfolio } from "./components/Portfolio";
import { AdminPanel } from "./components/AdminPanel";
import { ProjectDetails } from "./components/ProjectDetails";
import { FundingProcess } from "./components/FundingProcess";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

type PageType =
  | "home"
  | "discover"
  | "create"
  | "portfolio"
  | "admin"
  | "project";

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>("home");
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [particles, setParticles] = useState<
    Array<{ id: number; x: number; y: number; size: number; delay: number }>
  >([]);

  // Generate floating particles
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        delay: Math.random() * 4,
      }));
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  const navigateToPage = (page: PageType) => {
    setCurrentPage(page);
    if (page !== "project") {
      setSelectedProject(null);
    }
  };

  const navigateToProject = (projectId: string) => {
    setSelectedProject(projectId);
    setCurrentPage("project");
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <HomePage
            onProjectClick={navigateToProject}
            onNavigate={navigateToPage}
          />
        );
      case "discover":
        return <DiscoverProjects onProjectClick={navigateToProject} />;
      case "create":
        return <CreateProject />;
      case "portfolio":
        return <Portfolio onProjectClick={navigateToProject} />;
      case "admin":
        return <AdminPanel onProjectClick={navigateToProject} />;
      case "project":
        return (
          <motion.main
            className="container mx-auto px-4 py-8 max-w-7xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Background decoration */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
              <motion.div
                className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl morph"
                animate={{
                  x: [0, 30, 0],
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-300/10 rounded-full blur-3xl morph"
                animate={{
                  x: [0, -40, 0],
                  y: [0, 25, 0],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

            <div className="relative z-10">
              <ProjectDetails projectId={selectedProject} />
              <FundingProcess />
            </div>
          </motion.main>
        );
      default:
        return (
          <HomePage
            onProjectClick={navigateToProject}
            onNavigate={navigateToPage}
          />
        );
    }
  };

  return (
    <div className="relative">
      {/* Scan line effect */}
      <div className="scan-line"></div>

      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 4 + particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* Morphing background shapes */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div
          className="absolute top-10 right-20 w-32 h-32 bg-gradient-to-r from-cyan-200/20 to-cyan-400/20 morph"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-r from-cyan-300/20 to-cyan-500/20 morph"
          animate={{
            rotate: [360, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Glitch effect overlay */}
      <motion.div
        className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent z-40"
        animate={{
          x: [-100, window.innerWidth + 100],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 3,
          ease: "easeInOut",
        }}
      />

      {/* Layout with Header and Content */}
      <Layout currentPage={currentPage} onNavigate={navigateToPage}>
        {renderPage()}
      </Layout>
    </div>
  );
}
