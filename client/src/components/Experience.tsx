import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import developerIcon from "@assets/generated_images/Developer_role_icon_8506fabb.png";
import secretaryIcon from "@assets/generated_images/Secretary_role_icon_fb24fdac.png";
import codeIcon from "@assets/generated_images/Code_programming_icon_e5b75b0b.png";

export default function Experience() {
  const experiences = [
    {
      icon: developerIcon,
      title: "Developer at Flowall Water Pump Company",
      period: "May 2023 - June 2023",
      responsibilities: [
        "Worked as a Web Developer at Flowall Water Pump Company",
        "In collaboration with Flowell Water Pump Company, I successfully designed and developed a dynamic and engaging minimalist website",
        "I built and crafted a digital landscape for Flowell Water Pump with the primary objective of expanding their market reach",
      ],
    },
    {
      icon: secretaryIcon,
      title: "Secretary of Computer Society and Gaming Club, IAR",
      period: "July-2022 - July 2023",
      responsibilities: [
        "Served as the Secretary of the Computer Science Club at my college",
        "As the Secretary of the Computer Society and Gaming Club at Institute of Advanced Research, Gandhinagar, I bring strong leadership and organizational skills",
        "Successfully coordinated club activities, managed events, and promoted community engagement",
      ],
    },
    {
      icon: codeIcon,
      title: "International Collegiate Programming Contest",
      period: "2022 (MOSCOW)",
      responsibilities: [
        "Participated as Team Member representing our college for the first time in the ICPC Asia Amritapuri First Round Online Programming Region Contest 2022",
        "Secured Rank 1762 out of 4992 teams",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="experience" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2 font-playfair">
            Professional Experiences
          </h2>
          <p className="text-lg text-muted-foreground mt-2 font-space">My journey in the tech world</p>
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card
                className="p-6 md:p-8 hover-elevate border-border"
                data-testid={`card-experience-${index}`}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <motion.img
                      src={exp.icon}
                      alt={exp.title}
                      className="w-16 h-16 rounded-full object-cover"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-foreground font-poppins">{exp.title}</h3>
                    <p className="text-muted-foreground mb-4 font-roboto">{exp.period}</p>
                    <div>
                      <p className="font-semibold mb-2 text-foreground font-space">Responsibilites</p>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, respIndex) => (
                          <motion.li
                            key={respIndex}
                            className="text-muted-foreground flex items-start gap-2"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: respIndex * 0.1 }}
                          >
                            <span className="text-foreground mt-1">•</span>
                            <span>{resp}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
