import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import profileImage from "../assets/generated_images/mahek_profile.jpeg"; // ✅ Fixed import
import wavingHand from "../assets/generated_images/Waving_hand_icon_1d9c5e4b.png";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-background pt-20"
    >
      <motion.div
        className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image */}
        <motion.div
          className="mb-8 flex justify-center mt-8 sm:mt-12"
          variants={itemVariants}
        >
          <motion.img
            src={profileImage}
            alt="Profile"
            className="w-48 h-48 sm:w-64 sm:h-64 rounded-full border-4 border-border shadow-2xl object-cover"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
              delay: 0.5,
            }}
            whileHover={{ scale: 1.05 }}
            data-testid="img-profile"
          />
        </motion.div>

        {/* Heading with waving hand */}
        <motion.div
          className="mb-6 flex items-center justify-center gap-2"
          variants={itemVariants}
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-foreground font-poppins">
            Hey! I'm <span className="font-bold">Mahek</span>
          </h2>
          <motion.img
            src={wavingHand}
            alt="👋"
            className="w-8 h-8"
            animate={{
              rotate: [0, 14, -8, 14, -4, 10, 0],
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight font-playfair"
          variants={itemVariants}
        >
          Full-Stack Software Engineer
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-space"
          variants={itemVariants}
        >
          Passionate about designing and developing efficient, scalable web applications.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={itemVariants}
        >
          {/* Contact button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-white text-black hover:bg-white/90 rounded-full px-6 py-4 text-sm sm:text-base font-semibold"
              onClick={scrollToContact}
              data-testid="button-contact"
            >
              Contact me
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>

          {/* Resume button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white hover:text-black rounded-full px-6 py-4 text-sm sm:text-base font-semibold transition-colors"
              data-testid="button-resume"
              onClick={() => {
                const resumeUrl = "/resume.pdf"; // Replace with your actual resume path
                window.open(resumeUrl, "_blank");
              }}
            >
              My Resume
              <Download className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
