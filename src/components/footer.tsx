
import { Link } from "react-router-dom";
import { Github, Linkedin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t border-border">
      <div className="container px-4 mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="font-bold text-xl">
              Nayar Vignesh
            </Link>
            <p className="mt-4 text-foreground/70 max-w-sm">
              A passionate Computer Science student & developer focused on creating
              modern web solutions and intelligent IoT systems.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-foreground/70 hover:text-accent1 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-foreground/70">
              <li>Bengaluru, India</li>
              <li>
                <a href="mailto:vigneshnayar01@gmail.com" className="hover:text-accent1 transition-colors">
                  vigneshnayar01@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+918555915986" className="hover:text-accent1 transition-colors">
                  +91 8555915986
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/70">
            © {currentYear} Nayar Vignesh. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://github.com/r0bin8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-accent1 transition-colors"
            >
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/vignesh-nayar-019a20243"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-accent1 transition-colors"
            >
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
