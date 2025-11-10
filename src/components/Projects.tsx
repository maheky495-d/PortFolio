import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { SiDjango, SiPython, SiReact } from "react-icons/si";

export default function Projects() {
  const projects = [
    {
      title: "Django Job Portal",
      description: "A career recommendation portal built with Django for job seekers and employers.",
      tags: ["Django", "Python", "HTML", "CSS", "JavaScript"],
      link: "https://github.com/maheky495-d/django_job",
      icon: SiDjango,
      iconColor: "#092E20",
      bgGradient: "from-green-600/20 to-emerald-600/20",
    },
    {
      title: "JobSphere",
      description: "A full-stack job portal application with React frontend and Node.js backend.",
      tags: ["ReactJs", "NodeJs", "ExpressJs", "MongoDB", "JavaScript", "CSS", "HTML"],
      link: "https://github.com/maheky495-d/JobSphere",
      icon: SiReact,
      iconColor: "#61DAFB",
      bgGradient: "from-cyan-500/20 to-blue-500/20",
    },
    {
      title: "UnoMaster",
      description: "A Python-based card game application implementing the classic Uno game logic.",
      tags: ["Python", "Game Development"],
      link: "https://github.com/maheky495-d/UnoMaster",
      icon: SiPython,
      iconColor: "#3776AB",
      bgGradient: "from-blue-500/20 to-indigo-500/20",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="projects" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
                  <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2 font-playfair text-glow">
            Development Showcase
          </h2>
          <p className="text-lg text-muted-foreground mt-2 font-space">
            A glimpse into my development endeavors
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => {
            const ProjectIcon = project.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card
                  className="overflow-hidden hover-elevate group cursor-pointer border-border h-full flex flex-col shadow-lg hover:shadow-2xl transition-all duration-300 border-white/10 hover:border-white/20 glow-effect glow-effect-hover shiny-border shiny-border-hover"
                  data-testid={`card-project-${index}`}
                >
                  <div className="aspect-video overflow-hidden bg-gradient-to-br from-black/50 to-black/80 relative flex items-center justify-center">
                    <motion.div
                      className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${project.bgGradient} flex items-center justify-center border border-white/20 shadow-2xl`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ProjectIcon className="w-12 h-12 icon-glow icon-glow-hover" style={{ color: project.iconColor }} />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold mb-2 text-foreground font-poppins group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                    {project.description && (
                      <p className="text-sm text-muted-foreground mb-4 font-roboto line-clamp-2">
                        {project.description}
                      </p>
                    )}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className="text-xs font-medium border-white/20"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-foreground hover:text-white font-medium mt-auto group/link"
                      data-testid={`link-project-${index}`}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      View on GitHub{" "}
                      <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                    </motion.a>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
