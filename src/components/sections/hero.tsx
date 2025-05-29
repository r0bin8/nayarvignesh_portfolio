
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-1/4 w-64 h-64 bg-accent1/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-1/4 w-72 h-72 bg-accent2/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container px-4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="max-w-xl animate-fade-in">
          <div className="inline-flex items-center px-3 py-1 mb-6 text-sm rounded-full bg-accent2/10 border border-accent2/20">
            <span className="animate-pulse mr-2 h-2 w-2 rounded-full bg-accent2"></span>
            <span className="text-accent2">Developer</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Hi, I'm{" "}
            <span className="relative">
              <span className="text-accent2">Nayar Vignesh</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-accent1/20 -z-10"></span>
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-medium mb-6 text-foreground/90">
            Crafting digital experiences & intelligent systems
          </h2>
          
          <p className="text-foreground/70 text-lg mb-8 leading-relaxed">
            A passionate Computer Science student focused on creating efficient 
            and innovative solutions to real-world problems through modern web technologies 
            and IoT systems.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <Button size="lg" className="bg-accent2 hover:bg-accent2/90 shadow-lg shadow-accent2/20">
              <a href="#contact" className="flex items-center">Contact Me</a>
            </Button>
            <Button size="lg" variant="outline" className="border-accent1/20 hover:bg-accent1/10 hover:border-accent1/30 transition-all">
              <a href="#projects" className="flex items-center">
                View My Projects <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-accent2/20 hover:bg-accent2/10 hover:border-accent2/30 transition-all">
              <a 
                href="https://drive.google.com/file/d/1P1fDA-8xysEOQMnOVNpGQaBW9jkOXf3k/view?usp=drive_link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Download className="mr-2 h-4 w-4" /> Resume
              </a>
            </Button>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/r0bin8" 
              target="_blank" 
              rel="noreferrer" 
              className={cn(
                "flex items-center justify-center w-10 h-10 rounded-full",
                "bg-foreground/5 hover:bg-foreground/10 transition-colors"
              )}
            >
              <Github size={20} className="text-foreground/80" />
            </a>
            <a 
              href="https://www.linkedin.com/in/vignesh-nayar-019a20243" 
              target="_blank" 
              rel="noreferrer" 
              className={cn(
                "flex items-center justify-center w-10 h-10 rounded-full",
                "bg-foreground/5 hover:bg-foreground/10 transition-colors"
              )}
            >
              <Linkedin size={20} className="text-foreground/80" />
            </a>
            <a 
              href="mailto:vigneshnayar01@gmail.com" 
              className={cn(
                "flex items-center justify-center w-10 h-10 rounded-full",
                "bg-foreground/5 hover:bg-foreground/10 transition-colors"
              )}
            >
              <Mail size={20} className="text-foreground/80" />
            </a>
          </div>
        </div>
        
        <div className="relative hidden md:block">
          <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto">
            {/* Abstract shape behind profile image */}
            <div className="absolute -top-6 -left-6 w-full h-full rounded-full bg-accent2/30 blur-md"></div>
            <div className="absolute -bottom-6 -right-6 w-full h-full rounded-full bg-accent1/30 blur-md"></div>
            
            {/* Rotating border effect */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-accent2/50 animate-[spin_20s_linear_infinite]"></div>
            
            {/* Profile image container with transparent/dark background */}
            <div className="absolute inset-4 rounded-full bg-black/20 backdrop-blur-sm p-2 z-10">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-foreground/10">
                <img
                  src="https://i.postimg.cc/KvjWWfBB/IMG-9109-removebg-preview.jpg"
                  alt="Nayar Vignesh"
                  className="w-full h-full object-cover bg-transparent"
                />
              </div>
            </div>
            
            {/* Floating decorative elements */}
            <div className="absolute -top-4 right-10 w-10 h-10 rounded-lg bg-accent1/40 backdrop-blur-md rotate-12 animate-bounce"></div>
            <div className="absolute bottom-10 -left-8 w-8 h-8 rounded-md bg-accent2/40 backdrop-blur-md -rotate-12 animate-pulse"></div>
            <div className="absolute top-1/3 -right-4 w-6 h-6 rounded-full bg-accent2/60 animate-pulse"></div>
          </div>
          
          {/* Badge */}
          <div className="absolute bottom-0 right-10 bg-card py-2 px-4 rounded-full shadow-lg flex items-center gap-2 border border-border">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium">Available for projects</span>
          </div>
        </div>
      </div>
    </section>
  );
}
