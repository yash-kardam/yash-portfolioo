import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { Code2, Palette, Lightbulb, Rocket } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const About = () => {
  const skills = [
    { category: "Frontend", items: ["HTML", "CSS", "Tailwind CSS", "Bootstrap"] },
    { category: "Tools", items: ["Git", "Figma", "VS Code"] },
    { category: "Programming Lang", items: ["Java", "C"] },
    { category: "Concepts", items: ["Responsive Design", "UI/UX", "Performance", "Accessibility"] },
  ];

  const values = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that others can understand and build upon",
    },
    {
      icon: Palette,
      title: "Design Thinking",
      description: "Bridging the gap between design and development with user-centric solutions",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Staying curious and exploring new technologies to solve problems creatively",
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Building fast, optimized experiences that delight users on every device",
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
              About <span className="gradient-text">Me</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Passionate developer with a love for creating beautiful, functional web experiences
            </p>
          </motion.div>

          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-5xl mx-auto mb-20"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="relative w-full aspect-square rounded-lg overflow-hidden border-2 border-primary/20">
                  <img
                    src={profileImg}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary rounded-lg -z-10" />
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold mb-4">My Story</h2>
                <p className="text-muted-foreground">
                  I'm a frontend developer with a passion for building web applications that make a difference. 
                  With several years of experience, I've worked on projects ranging from Personal Projects to 
                  Startup Level applications.
                </p>
                <p className="text-muted-foreground">
                  My journey into web development started with a curiosity about how things work on the internet. 
                  That curiosity evolved into a career where I get to combine technical expertise with creative 
                  problem-solving every day.
                </p>
                <p className="text-muted-foreground">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                  projects, or sharing knowledge with the developer community.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-6xl mx-auto mb-20"
          >
            <h2 className="text-3xl font-bold mb-12 text-center">What I Value</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="bg-card border border-border rounded-lg p-6 hover-lift"
                >
                  <value.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Skills & Technologies</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="bg-card border border-border rounded-lg p-6"
                >
                  <h3 className="text-xl font-bold mb-4 text-primary">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default About;
