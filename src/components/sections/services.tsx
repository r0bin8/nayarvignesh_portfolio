
import {
  Code,
  MonitorIcon,
  Layers,
} from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      title: "UI/UX Design",
      description:
        "Creating intuitive, accessible and visually appealing interfaces that enhance user experience and engagement",
      icon: MonitorIcon,
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/10 to-pink-500/10",
    },
    {
      title: "Web Development",
      description:
        "Building responsive and interactive websites using modern frontend technologies and best practices",
      icon: Code,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
    },
    {
      title: "IoT Solutions",
      description:
        "Designing and implementing connected devices and systems for real-time monitoring and automation",
      icon: Layers,
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-500/10 to-emerald-500/10",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-muted/20 via-background to-accent1/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent2/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent1/5 rounded-full blur-3xl"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center px-4 py-2 mb-4 text-sm rounded-full bg-accent1/10 border border-accent1/20">
            <span className="animate-pulse mr-2 h-2 w-2 rounded-full bg-accent1"></span>
            <span className="text-accent1 font-medium">WHAT I DO</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Expertise{" "}
            <span className="text-accent2 relative">
              Services
              <span className="absolute bottom-1 left-0 w-full h-3 bg-accent1/20 -z-10"></span>
            </span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            I offer specialized services focused on creating functional, intuitive, 
            and innovative digital solutions to meet your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Background glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative bg-card/90 backdrop-blur-sm border border-border/50 rounded-2xl p-8 text-center hover:border-accent2/50 transition-all duration-500 group-hover:transform group-hover:-translate-y-2 group-hover:shadow-2xl">
                <div className="relative mb-8">
                  <div className={`mx-auto w-20 h-20 bg-gradient-to-br ${service.bgGradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-10 w-10 text-foreground group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  
                  {/* Floating decorative elements */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent1/40 rounded-full animate-ping opacity-0 group-hover:opacity-100"></div>
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-accent2/40 rounded-full animate-pulse opacity-0 group-hover:opacity-100 delay-300"></div>
                </div>
                
                <h3 className="text-xl font-semibold mb-4 group-hover:text-accent2 transition-colors duration-300">{service.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{service.description}</p>
                
                {/* Bottom accent line */}
                <div className={`mt-6 mx-auto w-0 h-1 bg-gradient-to-r ${service.gradient} rounded-full group-hover:w-16 transition-all duration-500`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
