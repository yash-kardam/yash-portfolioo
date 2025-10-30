import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Spotify Interface Clone",
      description: "Full-featured Spotify interface clone with user authentication, playlist management, and music playback using Spotify API. Responsive design with smooth animations. ",
      image: "https://play-lh.googleusercontent.com/tVSs3puT4BzDVQU-gyVaOZU44Wu--qJMj3d0Tnrr1kyMRbJMl4l2e89_JTTOZ1O35zg=w526-h296-rw",
      technologies: ["HTML", "CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yash-kardam/Spotify-interface",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 md:pt-32 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto mb-16 text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              A collection of my recent work, showcasing various technologies and problem-solving approaches
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                {...project}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;
