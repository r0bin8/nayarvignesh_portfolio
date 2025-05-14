
import { useState } from "react";
import { Eye, Code as CodeIcon, Link as LinkIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function ProjectsSection() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "VZT Tools Web Application",
      description:
        "Multi-feature web app: language conversion, QR code generation, image creation, and voice-to-text integration. Focus on accessibility and interactive UX.",
      image: "/placeholder.svg",
      category: "web",
      technologies: ["HTML", "CSS", "JavaScript", "APIs"],
      demo: "#",
      code: "#",
    },
    {
      title: "Cyclone Detection System",
      description:
        "AI-based system using YOLO object detection. Trained on satellite images for cyclone pattern recognition.",
      image: "/placeholder.svg",
      category: "ai",
      technologies: ["Python", "YOLO", "Computer Vision"],
      demo: "#",
      code: "#",
    },
    {
      title: "Smart Classroom IoT System",
      description:
        "IoT-based smart classroom for energy saving. Implemented sensors and automation for efficient resource management.",
      image: "/placeholder.svg",
      category: "iot",
      technologies: ["IoT", "Arduino", "Sensors", "Cloud"],
      demo: "#",
      code: "#",
    },
    {
      title: "Parking Management System",
      description:
        "Parking Management System using OpenCV and AR. Real-time monitoring and space allocation for efficient parking.",
      image: "/placeholder.svg",
      category: "ar",
      technologies: ["OpenCV", "AR", "Python", "Mobile"],
      demo: "#",
      code: "#",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const filterOptions = [
    { value: "all", label: "All Projects" },
    { value: "web", label: "Web Design" },
    { value: "iot", label: "IoT Projects" },
    { value: "ai", label: "AI/ML" },
    { value: "ar", label: "AR/VR" },
  ];

  return (
    <section id="projects" className="py-16">
      <div className="container px-4 mx-auto">
        <div className="mb-10 text-center">
          <p className="text-accent1 font-semibold mb-2">PORTFOLIO</p>
          <h2 className="text-3xl font-bold">Digital Product Showcases</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filterOptions.map((option) => (
            <Button
              key={option.value}
              variant={filter === option.value ? "default" : "outline"}
              onClick={() => setFilter(option.value)}
              className={
                filter === option.value
                  ? "bg-accent2 hover:bg-accent2/90"
                  : ""
              }
            >
              {option.label}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden border-border/50 group hover:border-accent1/50 transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-opacity duration-300">
                  <Button size="sm" variant="secondary" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <Eye className="mr-2 h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                  <Button size="sm" variant="secondary" asChild>
                    <a href={project.code} target="_blank" rel="noopener noreferrer">
                      <CodeIcon className="mr-2 h-4 w-4" /> View Code
                    </a>
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-foreground/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
