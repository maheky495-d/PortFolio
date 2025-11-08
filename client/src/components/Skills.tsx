import { motion } from "framer-motion";
import { SiReact, SiNodedotjs, SiExpress, SiMongodb, SiPython, SiGithub } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { Code } from "lucide-react";

export default function Skills() {
  const technologies = [
    { name: "ReactJs", icon: SiReact, color: "#61DAFB" },
    { name: "NodeJs", icon: SiNodedotjs, color: "#339933" },
    { name: "ExpressJs", icon: SiExpress, color: "#FFFFFF" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "Java", icon: FaJava, color: "#ED8B00" },
    { name: "VS Code", icon: Code, color: "#007ACC" },
    { name: "GitHub", icon: SiGithub, color: "#181717" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 font-poppins">
            Tools and Technologies I use:
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={index}
                className="flex flex-col items-center gap-3 group cursor-pointer"
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ duration: 0.2 }}
                data-testid={`tech-${index}`}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center transition-transform">
                  <Icon className="w-full h-full" style={{ color: tech.color }} />
                </div>
                <p className="text-xs sm:text-sm text-center text-muted-foreground group-hover:text-foreground transition-colors font-medium font-roboto">
                  {tech.name}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
