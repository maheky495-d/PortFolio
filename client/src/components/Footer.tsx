import { Mail } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="py-12 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center space-y-6">
          <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Portfolio
          </div>

          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Mail className="h-5 w-5" />
            <a
              href="mailto:your.email@gmail.com"
              className="hover:text-foreground transition-colors"
              data-testid="link-email"
            >
              your.email@gmail.com
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            © 2025 Your Name. All rights reserved.
          </p>

          <div className="flex items-center justify-center gap-6 pt-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-github"
            >
              <SiGithub className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-linkedin"
            >
              <SiLinkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
