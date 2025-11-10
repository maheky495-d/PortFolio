import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ExternalLink, Brain, Layers, Globe, Trophy } from "lucide-react";
import { FaJava } from "react-icons/fa";

export default function Certifications() {
  const certifications = [
    {
      title: "Exploratory Data Analysis for Machine Learning",
      issuer: "Coursera",
      link: "https://coursera.org/share/18f3e752a7cdf716c309fb3dfe27a72f",
      icon: Brain,
      iconColor: "#FF6B6B",
      bgGradient: "from-red-500/20 to-pink-500/20",
    },
    {
      title: "Introduction to Java",
      issuer: "Coursera",
      link: "https://www.coursera.org/account/accomplishments/verify/J59UNNQ9ZDJC",
      icon: FaJava,
      iconColor: "#ED8B00",
      bgGradient: "from-orange-500/20 to-yellow-500/20",
    },
    {
      title: "Inheritance and Data Structures in Java",
      issuer: "Coursera",
      link: "https://www.coursera.org/account/accomplishments/verify/AHS9SDJGXELU",
      icon: Layers,
      iconColor: "#4ECDC4",
      bgGradient: "from-cyan-500/20 to-teal-500/20",
    },
    {
      title: "Introduction to HTML, CSS, & JavaScript",
      issuer: "Coursera",
      link: "https://www.coursera.org/account/accomplishments/verify/F71U4T506G87",
      icon: Globe,
      iconColor: "#4A90E2",
      bgGradient: "from-blue-500/20 to-indigo-500/20",
    },
    {
      title: "HackHAZARDS'25",
      issuer: "GiveMyCertificate",
      link: "https://certificate.givemycertificate.com/c/a4f6d40b-bf30-400d-958f-cf47f105fedc",
      icon: Trophy,
      iconColor: "#FFD700",
      bgGradient: "from-yellow-500/20 to-amber-500/20",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="certifications" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2 font-playfair">
            Certifications
          </h2>
          <p className="text-lg text-muted-foreground mt-2 font-space">
            My professional certifications and achievements
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* First 3 Certifications - One Row */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {certifications.slice(0, 3).map((cert, index) => {
              const CertIcon = cert.icon;
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card
                    className="p-6 hover-elevate border-border group cursor-pointer h-full"
                    data-testid={`card-certification-${index}`}
                  >
                    <motion.a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex flex-col h-full">
                        <div className="flex items-start gap-4 mb-4">
                          <motion.div
                            className="flex-shrink-0"
                            whileHover={{ rotate: 5, scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${cert.bgGradient} flex items-center justify-center border border-white/20 shadow-lg`}>
                              <CertIcon className="w-8 h-8" style={{ color: cert.iconColor }} />
                            </div>
                          </motion.div>
                          <div className="flex-1">
                            <h3 className="text-lg md:text-xl font-bold mb-1 text-foreground font-poppins group-hover:text-white transition-colors leading-tight">
                              {cert.title}
                            </h3>
                            <p className="text-sm text-muted-foreground font-roboto mt-1">
                              {cert.issuer}
                            </p>
                          </div>
                        </div>
                        <div className="mt-auto flex items-center gap-2 text-foreground group-hover:text-white transition-colors pt-2">
                          <span className="text-sm font-medium font-space">View Certificate</span>
                          <ExternalLink className="w-4 h-4" />
                        </div>
                      </div>
                    </motion.a>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Last 2 Certifications - Centered */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {certifications.slice(3).map((cert, index) => {
              const CertIcon = cert.icon;
              return (
                <motion.div key={index + 3} variants={itemVariants}>
                  <Card
                    className="p-6 hover-elevate border-border group cursor-pointer h-full"
                    data-testid={`card-certification-${index + 3}`}
                  >
                    <motion.a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex flex-col h-full">
                        <div className="flex items-start gap-4 mb-4">
                          <motion.div
                            className="flex-shrink-0"
                            whileHover={{ rotate: 5, scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${cert.bgGradient} flex items-center justify-center border border-white/20 shadow-lg`}>
                              <CertIcon className="w-8 h-8" style={{ color: cert.iconColor }} />
                            </div>
                          </motion.div>
                          <div className="flex-1">
                            <h3 className="text-lg md:text-xl font-bold mb-1 text-foreground font-poppins group-hover:text-white transition-colors leading-tight">
                              {cert.title}
                            </h3>
                            <p className="text-sm text-muted-foreground font-roboto mt-1">
                              {cert.issuer}
                            </p>
                          </div>
                        </div>
                        <div className="mt-auto flex items-center gap-2 text-foreground group-hover:text-white transition-colors pt-2">
                          <span className="text-sm font-medium font-space">View Certificate</span>
                          <ExternalLink className="w-4 h-4" />
                        </div>
                      </div>
                    </motion.a>
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

