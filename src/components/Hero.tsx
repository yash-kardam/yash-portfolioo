import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects-preview");
    projectsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 flex items-center justify-center gap-2 text-muted-foreground">
              <Terminal className="w-4 h-4" />
              <span className="text-sm font-mono">const developer = new CreativeDev();</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              Hi, I'm{" "}
              <span className="gradient-text">Yashvender Singh</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              A creative developer who builds modern web experiences that solve real problems and delight users
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-10 py-6 px-8 rounded-xl bg-card/50 border border-border backdrop-blur-sm max-w-2xl mx-auto"
            >
              <div className="flex flex-col items-center gap-3">
                <h3 className="text-2xl font-bold text-primary">Lead Engineer & CTO</h3>
                <p className="text-xl font-semibold gradient-text">TechXBharat</p>
                <p className="text-muted-foreground text-center text-lg">
                  Leading technical initiatives and driving innovation in technology strategy and development
                </p>
              </div>
            </motion.div>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
              <Link to="/projects">
                <Button size="lg" className="group">
                  View My Work
                  <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline">
                  Get In Touch
                </Button>
              </Link>
            </div>

            <div className="flex items-center justify-center gap-6">
              <a
                href="https://github.com/yash-kardam/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:yashvender000@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToProjects}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-primary rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.button>
    </section>
  );
};

const Terminal = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" y1="19" x2="20" y2="19" />
  </svg>
);

export default Hero;
