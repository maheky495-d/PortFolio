import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import profileImage from "@assets/generated_images/mahek_profile.jpeg";
import { Code, GraduationCap, FolderKanban } from "lucide-react";

export default function About() {
  const infoCards = [
    {
      icon: Code,
      title: "Languages",
      content: (
        <div className="space-y-2">
          <div>
            <span className="font-semibold text-foreground">Frontend:</span>{" "}
            <span className="text-muted-foreground">HTML, CSS, Bootstrap, React, JavaScript</span>
          </div>
          <div>
            <span className="font-semibold text-foreground">Backend:</span>{" "}
            <span className="text-muted-foreground">Node.js, Express.js, MongoDB, Python, Java (OOPs)</span>
          </div>
          <div>
            <span className="font-semibold text-foreground">Other Skills:</span>{" "}
            <span className="text-muted-foreground">AI/ML (TensorFlow, Scikit-learn)</span>
          </div>
        </div>
      ),
    },
    {
      icon: GraduationCap,
      title: "Education",
      content: (
        <p className="text-muted-foreground">
          B.Tech in Information and Communication Technology
        </p>
      ),
    },
    {
      icon: FolderKanban,
      title: "Projects",
      content: (
        <p className="text-muted-foreground">
          Built more than 5 MERN Stack projects
        </p>
      ),
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
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-muted-foreground font-medium mb-2 text-sm uppercase tracking-wider font-roboto">
            Introduction
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground font-playfair">About Me</h2>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-poppins">
            Computer Engineering student specializing in full-stack web development. Skilled in
            developing responsive applications using the MERN stack and proficient in Python for
            backend development and automation. Eager to apply technical knowledge, enhance
            practical experience, and contribute to innovative projects through real world
            technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-start">
          {/* Photo on Left */}
          <motion.div
            className="flex justify-center md:justify-start"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.img
              src={profileImage}
              alt="About me"
              className="rounded-3xl max-w-sm w-full shadow-2xl object-cover border-4 border-white/10"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              data-testid="img-about"
            />
          </motion.div>

          {/* Grid on Right */}
          <motion.div
            className="grid gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {infoCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card
                    className="p-6 hover-elevate border-border h-full"
                    data-testid={`card-info-${index}`}
                  >
                    <div className="flex items-start gap-4">
                      <motion.div
                        className="flex-shrink-0"
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Icon className="w-8 h-8 text-foreground" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-xl mb-3 text-foreground font-space">
                          {card.title}
                        </h3>
                        <div className="text-sm font-roboto">
                          {card.content}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
