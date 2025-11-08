import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import rideHailingThumb from "@assets/generated_images/Ride-hailing_app_thumbnail_035be8e4.png";
import rewardSystemThumb from "@assets/generated_images/Reward_system_app_thumbnail_2f036bf0.png";
import microservicesThumb from "@assets/generated_images/Microservices_project_thumbnail_d529c43f.png";
import saasThumb from "@assets/stock_images/modern_saas_website__541fc753.jpg";
import ecommerceThumb from "@assets/stock_images/modern_saas_website__5e4c2813.jpg";
import zentryThumb from "@assets/stock_images/modern_saas_website__2f59a11a.jpg";

export default function Projects() {
  const projects = [
    {
      title: "Ride-hailing Application",
      thumbnail: rideHailingThumb,
      tags: ["ReactJs", "Google-maps-API", "SocketIO", "ExpressJs", "MongoDB", "Monolithic"],
      link: "#",
    },
    {
      title: "Reward System Application",
      thumbnail: rewardSystemThumb,
      tags: ["ReactJs", "ExpressJs", "MongoDB", "NodeJs"],
      link: "#",
    },
    {
      title: "Micro-Services",
      thumbnail: microservicesThumb,
      tags: ["RabbitMQ", "Microservices-architecture", "RESTFUL-WEBSERVICES", "Express-http-proxy", "MongoDB", "Amqplib"],
      link: "#",
    },
    {
      title: "Xora- Saas Frontend",
      thumbnail: saasThumb,
      tags: ["ReactJs", "TailwindCSS"],
      link: "#",
    },
    {
      title: "E-commerce Frontend",
      thumbnail: ecommerceThumb,
      tags: ["ReactJs", "TailwindCSS"],
      link: "#",
    },
    {
      title: "Zentry Clone",
      thumbnail: zentryThumb,
      tags: ["GSAP", "ReactJs", "TailwindCSS"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Development Showcase</h2>
          <p className="text-lg text-muted-foreground">A glimpse into my development endeavors</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-elevate group cursor-pointer"
              data-testid={`card-project-${index}`}
            >
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center text-primary hover:underline font-medium"
                  data-testid={`link-project-${index}`}
                >
                  Look now <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
