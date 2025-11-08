import { Card } from "@/components/ui/card";
import profileImage from "@assets/generated_images/Professional_profile_headshot_6e95066a.png";
import codeIcon from "@assets/generated_images/Code_programming_icon_e5b75b0b.png";
import eduIcon from "@assets/generated_images/Education_graduation_icon_c1377e83.png";
import projectIcon from "@assets/generated_images/Projects_folder_icon_bb5a68c8.png";

export default function About() {
  const infoCards = [
    {
      icon: codeIcon,
      title: "Languages",
      description: "C++, HTML, CSS, JavaScript (Frontend and Backend frameworks)",
    },
    {
      icon: eduIcon,
      title: "Education",
      description: "B.Tech in Information and Communication Technology",
    },
    {
      icon: projectIcon,
      title: "Projects",
      description: "Built more than 5 MERN Stack projects",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-4">
          <p className="text-primary font-medium mb-2">Introduction</p>
          <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
          <div className="flex justify-center">
            <img
              src={profileImage}
              alt="About me"
              className="rounded-3xl max-w-md w-full shadow-xl object-cover"
              data-testid="img-about"
            />
          </div>

          <div>
            <blockquote className="text-lg md:text-xl text-muted-foreground mb-8 italic">
              "As a self-taught software engineer from India, I have dedicated 1.5 years+ to mastering
              full-stack development. My passion lies in creating scalable, user-centric web applications.
              Continuously seeking to expand my skill set, I am eager to contribute innovative solutions
              and collaborate with dynamic teams."
            </blockquote>

            <div className="grid gap-6">
              {infoCards.map((card, index) => (
                <Card
                  key={index}
                  className="p-6 flex items-start gap-4 hover-elevate"
                  data-testid={`card-info-${index}`}
                >
                  <img src={card.icon} alt={card.title} className="w-12 h-12" />
                  <div>
                    <h3 className="font-semibold text-xl mb-1">{card.title}</h3>
                    <p className="text-muted-foreground">{card.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
