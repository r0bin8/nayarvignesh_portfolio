
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="container px-4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="max-w-xl animate-fade-in">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Hi, I'm{" "}
            <span className="text-accent2 underline decoration-accent1">
              Nayar Vignesh
            </span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Developer & IoT Enthusiast
          </h2>
          <p className="text-foreground/80 text-lg mb-8">
            Crafting modern web solutions & intelligent systems. A passionate Computer Science student 
            focused on creating efficient and innovative solutions to real-world problems.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="px-6 bg-accent2 hover:bg-accent2/90">
              <a href="#contact">Contact Me</a>
            </Button>
            <Button variant="outline" className="px-6">
              <a href="#projects" className="flex items-center">
                View My Projects <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
        <div className="relative hidden md:block">
          <div className="w-72 h-72 md:w-96 md:h-96 mx-auto relative">
            <div className="absolute inset-0 rounded-full bg-accent2/20 animate-pulse"></div>
            <div className="absolute inset-4 rounded-full bg-accent1/10"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="/placeholder.svg"
                alt="Nayar Vignesh"
                className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-accent1"
              />
            </div>
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-5 right-10 w-10 h-10 rounded-full bg-accent1"></div>
              <div className="absolute bottom-10 left-5 w-6 h-6 rounded-full bg-accent2"></div>
              <div className="absolute top-1/2 right-0 w-4 h-4 rounded-full bg-accent2"></div>
              <div className="absolute bottom-5 right-20 w-8 h-8 rounded-full bg-accent1"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
