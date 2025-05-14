
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
    },
    {
      title: "Web Development",
      description:
        "Building responsive and interactive websites using modern frontend technologies and best practices",
      icon: Code,
    },
    {
      title: "IoT Solutions",
      description:
        "Designing and implementing connected devices and systems for real-time monitoring and automation",
      icon: Layers,
    },
  ];

  return (
    <section className="py-16 bg-muted/20">
      <div className="container px-4 mx-auto">
        <div className="mb-10 text-center">
          <p className="text-accent1 font-semibold mb-2">WHAT I DO</p>
          <h2 className="text-3xl font-bold">Expertise Services</h2>
          <p className="mt-4 text-foreground/80 max-w-2xl mx-auto">
            I offer specialized services focused on creating functional, intuitive, 
            and innovative digital solutions to meet your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-8 text-center hover:border-accent2/50 transition-all duration-300 hover:shadow-md hover:shadow-accent2/5"
            >
              <div className="mx-auto w-16 h-16 bg-accent2/10 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="h-8 w-8 text-accent2" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-foreground/70">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
