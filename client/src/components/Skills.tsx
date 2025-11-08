import { SiReact, SiNodedotjs, SiExpress, SiMongodb, SiRabbitmq, SiSocketdotio, SiGreensock, SiGithub } from "react-icons/si";
import { Code } from "lucide-react";

export default function Skills() {
  const technologies = [
    { name: "ReactJS", icon: SiReact, color: "#61DAFB" },
    { name: "NodeJS", icon: SiNodedotjs, color: "#339933" },
    { name: "ExpressJS", icon: SiExpress, color: "#000000" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "RabbitMQ", icon: SiRabbitmq, color: "#FF6600" },
    { name: "WebSocket", icon: SiSocketdotio, color: "#010101" },
    { name: "GSAP", icon: SiGreensock, color: "#88CE02" },
    { name: "VS Code", icon: Code, color: "#007ACC" },
    { name: "GitHub", icon: SiGithub, color: "#181717" },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Tools and Technologies I use:
          </h2>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-8 md:gap-12">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center gap-3 group cursor-pointer"
                data-testid={`tech-${index}`}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center transition-transform group-hover:scale-110">
                  <Icon className="w-full h-full" style={{ color: tech.color }} />
                </div>
                <p className="text-sm text-center text-muted-foreground group-hover:text-foreground transition-colors">
                  {tech.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
