import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const featuredProjects = [
    {
      title: "Spotify Interface Clone",
      description: "Full-featured Spotify interface clone with user authentication, playlist management, and music playback using Spotify API. Responsive design with smooth animations. ",
      image: "https://play-lh.googleusercontent.com/tVSs3puT4BzDVQU-gyVaOZU44Wu--qJMj3d0Tnrr1kyMRbJMl4l2e89_JTTOZ1O35zg=w526-h296-rw",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />

      {/* Featured Projects Section */}
      <section id="projects-preview" className="py-20 md:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A selection of my recent work showcasing different technologies and approaches
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.title} {...project} delay={index * 0.1} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link to="/projects">
              <Button size="lg" variant="outline" className="group">
                View All Projects
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Skills Marquee Section */}
      <section className="py-16 overflow-hidden">
        <div className="mb-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
        </div>
        
        <div className="relative">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          
          {/* Marquee container */}
          <div className="flex gap-8 animate-marquee whitespace-nowrap">
            {[
              "HTML", "CSS", "Tailwind CSS", "Bootstrap", "Git", "Figma", 
              "VS Code", "Java", "C", "Responsive Design", "UI/UX", 
              "Performance", "Accessibility"
            ].concat([
              "HTML", "CSS", "Tailwind CSS", "Bootstrap", "Git", "Figma", 
              "VS Code", "Java", "C", "Responsive Design", "UI/UX", 
              "Performance", "Accessibility"
            ]).map((skill, index) => (
              <div
                key={index}
                className="inline-flex items-center px-6 py-3 bg-card border border-border rounded-full text-sm font-medium"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-card"></section>
      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center bg-card border border-border rounded-2xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Work <span className="gradient-text">Together</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <Link to="/contact">
              <Button size="lg" className="group">
                Start a Conversation
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
