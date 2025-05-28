
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
    <section id="about" className="py-20 bg-gradient-to-br from-background via-muted/10 to-accent2/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-accent1/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent2/5 rounded-full blur-3xl"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center px-4 py-2 mb-4 text-sm rounded-full bg-accent1/10 border border-accent1/20">
            <span className="animate-pulse mr-2 h-2 w-2 rounded-full bg-accent1"></span>
            <span className="text-accent1 font-medium">ABOUT ME</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Designing Solutions, Not Just{" "}
            <span className="text-accent2 relative">
              Visuals
              <span className="absolute bottom-1 left-0 w-full h-3 bg-accent1/20 -z-10"></span>
            </span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Passionate about creating meaningful digital experiences through innovation and technical excellence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-8">
            <div className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-accent2/10 flex items-center justify-center mr-4 group-hover:bg-accent2/20 transition-colors">
                <User className="text-accent2 w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-3">Personal Bio</h3>
                <p className="text-foreground/80 leading-relaxed">
                  A highly motivated Computer Science student with expertise in web 
                  development, IoT, and programming. Passionate about leveraging technical 
                  knowledge to solve real-world problems efficiently and innovatively. Adept 
                  at collaborating in dynamic environments and continuously learning emerging 
                  technologies to drive impactful solutions.
                </p>
              </div>
            </div>

            <div className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-accent1/10 flex items-center justify-center mr-4 group-hover:bg-accent1/20 transition-colors">
                <BookOpen className="text-accent1 w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-4">Education</h3>
                <div className="space-y-6">
                  {educationData.map((edu, index) => (
                    <Card key={index} className="border border-border/50 bg-card/80 backdrop-blur-sm hover:border-accent2/30 transition-all duration-300">
                      <CardContent className="p-6">
                        <h4 className="font-semibold text-lg mb-2">{edu.degree}</h4>
                        <p className="text-foreground/80 mb-2">{edu.institution}</p>
                        <div className="flex justify-between text-sm">
                          <span className="text-accent1 font-medium">{edu.years}</span>
                          <span className="text-accent2 font-medium">{edu.grade}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-accent2/10 flex items-center justify-center mr-4 group-hover:bg-accent2/20 transition-colors">
                  <Globe className="text-accent2 w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Languages</h3>
                  <p className="text-foreground/80">English, Telugu, Tamil</p>
                </div>
              </div>

              <div className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-accent1/10 flex items-center justify-center mr-4 group-hover:bg-accent1/20 transition-colors">
                  <MapPin className="text-accent1 w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Location</h3>
                  <p className="text-foreground/80">Bengaluru, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto">
              {/* Animated background elements */}
              <div className="absolute -top-8 -left-8 w-full h-full rounded-3xl bg-gradient-to-br from-accent1/20 to-accent2/20 blur-xl animate-pulse"></div>
              <div className="absolute -bottom-8 -right-8 w-full h-full rounded-3xl bg-gradient-to-tl from-accent2/20 to-accent1/20 blur-xl animate-pulse delay-1000"></div>
              
              {/* Main image container */}
              <Card className="relative z-10 border-2 border-accent1/20 overflow-hidden bg-card/90 backdrop-blur-sm hover:border-accent1/40 transition-all duration-500 group">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src="https://i.pinimg.com/736x/48/d5/d3/48d5d33f5b439bf6a956a38fa42ab4fa.jpg"
                      alt="Nayar Vignesh - Professional Illustration"
                      className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-accent2/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Floating decorative elements */}
              <div className="absolute -top-4 right-8 w-12 h-12 rounded-2xl bg-accent1/40 backdrop-blur-md rotate-12 animate-bounce"></div>
              <div className="absolute bottom-8 -left-6 w-10 h-10 rounded-xl bg-accent2/40 backdrop-blur-md -rotate-12 animate-pulse"></div>
              <div className="absolute top-1/3 -right-4 w-8 h-8 rounded-full bg-accent1/60 animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
