import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@assets/generated_images/Professional_profile_headshot_6e95066a.png";
import wavingHand from "@assets/generated_images/Waving_hand_icon_1d9c5e4b.png";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="mb-8 flex justify-center">
          <img
            src={profileImage}
            alt="Profile"
            className="w-64 h-64 rounded-full border-8 border-white/20 shadow-2xl object-cover"
            data-testid="img-profile"
          />
        </div>

        <div className="mb-4 flex items-center justify-center gap-2">
          <h2 className="text-xl md:text-2xl font-semibold text-white/90">
            Hey! I'm <span className="font-bold">Your Name</span>
          </h2>
          <img src={wavingHand} alt="👋" className="w-8 h-8 animate-bounce" />
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
          Full-Stack Software Engineer
          <br />
          <span className="text-white/90">based in India</span>
        </h1>

        <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto">
          Passionate about designing and developing efficient, scalable web applications.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-white text-purple-600 hover:bg-white/90 rounded-full px-8 py-6 text-lg font-semibold"
            onClick={scrollToContact}
            data-testid="button-contact"
          >
            Contact me
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-white/10 text-white border-2 border-white/30 hover:bg-white/20 backdrop-blur-sm rounded-full px-8 py-6 text-lg font-semibold"
            data-testid="button-resume"
          >
            My Resume
            <Download className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
