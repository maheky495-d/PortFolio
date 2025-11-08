import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { Link } from "wouter";

export default function Footer() {
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
    hidden: { opacity: 0, y: 20 },
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
    <footer className="py-12 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <Link
              href="/contacts"
              className="text-3xl font-bold text-foreground hover:opacity-80 transition-opacity cursor-pointer inline-block font-poppins"
              data-testid="link-contacts"
            >
              Portfolio
            </Link>
          </motion.div>

          <motion.div
            className="flex items-center justify-center gap-2 text-muted-foreground"
            variants={itemVariants}
          >
            <Mail className="h-5 w-5" />
            <a
              href="mailto:Maheky495@gmail.com"
              className="hover:text-foreground transition-colors"
              data-testid="link-email"
            >
              Maheky495@gmail.com
            </a>
          </motion.div>

          <motion.p
            className="text-sm text-muted-foreground font-roboto"
            variants={itemVariants}
          >
            © 2025 Mahek Yadav. All rights reserved.
          </motion.p>

          <motion.div
            className="flex items-center justify-center gap-6 pt-4"
            variants={itemVariants}
          >
            <motion.a
              href="https://github.com/maheky495-d"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              data-testid="link-github"
            >
              <SiGithub className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/mahek-yadav-3a6bba307"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              data-testid="link-linkedin"
            >
              <SiLinkedin className="h-6 w-6" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
