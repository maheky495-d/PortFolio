import { Switch, Route } from "wouter";
import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";

const SectionPage = ({ sectionId }: { sectionId: string }) => {
  useEffect(() => {
    const scrollToSection = () => {
      if (sectionId === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    const raf = requestAnimationFrame(scrollToSection);
    return () => cancelAnimationFrame(raf);
  }, [sectionId]);

  return <Home />;
};

const HomePage = () => <SectionPage sectionId="home" />;
const AboutPage = () => <SectionPage sectionId="about" />;
const ProjectsPage = () => <SectionPage sectionId="projects" />;
const CertificationsPage = () => <SectionPage sectionId="certifications" />;
const ContactPage = () => <SectionPage sectionId="contact" />;

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/projects" component={ProjectsPage} />
      <Route path="/certifications" component={CertificationsPage} />
      <Route path="/contact" component={ContactPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <TooltipProvider>
      <Toaster />
      <Router />
    </TooltipProvider>
  );
}

export default App;
