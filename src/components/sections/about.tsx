
import {
  BookOpen,
  Code,
  Globe,
  MapPin,
  User,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function AboutSection() {
  const educationData = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "GITAM University, Bengaluru",
      years: "2021-2025",
      grade: "CGPA: 8.21",
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Sri Sathyam Junior College, Sullurpeta",
      years: "2019-2021",
      grade: "GPA: 89.3",
    },
  ];

  return (
    <section id="about" className="py-16 bg-muted/20">
      <div className="container px-4 mx-auto">
        <div className="mb-10 text-center">
          <p className="text-accent1 font-semibold mb-2">ABOUT ME</p>
          <h2 className="text-3xl font-bold">
            Designing Solutions, Not Just Visuals
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="order-2 lg:order-1">
            <div className="flex items-start mb-6">
              <User className="text-accent2 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Personal Bio</h3>
                <p className="text-foreground/80">
                  A highly motivated Computer Science student with expertise in web 
                  development, IoT, and programming. Passionate about leveraging technical 
                  knowledge to solve real-world problems efficiently and innovatively. Adept 
                  at collaborating in dynamic environments and continuously learning emerging 
                  technologies to drive impactful solutions.
                </p>
              </div>
            </div>

            <div className="flex items-start mb-6">
              <BookOpen className="text-accent2 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <div className="space-y-4">
                  {educationData.map((edu, index) => (
                    <div key={index} className="space-y-1">
                      <h4 className="font-semibold">{edu.degree}</h4>
                      <p className="text-sm text-foreground/80">
                        {edu.institution}
                      </p>
                      <div className="flex justify-between text-sm text-foreground/70">
                        <span>{edu.years}</span>
                        <span>{edu.grade}</span>
                      </div>
                      {index < educationData.length - 1 && (
                        <Separator className="my-2" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start">
                <Globe className="text-accent2 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Languages</h3>
                  <p className="text-foreground/80">English, Telugu, Tamil</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="text-accent2 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Location</h3>
                  <p className="text-foreground/80">Bengaluru, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <Card className="border-2 border-accent1/20 overflow-hidden bg-card/50 backdrop-blur-sm">
              <CardContent className="p-0">
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop"
                  alt="Nayar Vignesh"
                  className="w-full h-96 object-cover"
                />
              </CardContent>
            </Card>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full border-8 border-background bg-accent2/20 z-0"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full border-8 border-background bg-accent1/20 z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
