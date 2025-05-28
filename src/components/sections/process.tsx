
import { Separator } from "@/components/ui/separator";

export function ProcessSection() {
  const processSteps = [
    {
      icon: "1",
      title: "Business Planning",
      description: "Comprehensive analysis to understand your business needs and objectives",
      color: "from-blue-500 to-purple-500",
      bgColor: "from-blue-500/10 to-purple-500/10",
    },
    {
      icon: "2", 
      title: "Design Strategy",
      description: "Creating detailed wireframes and prototypes to visualize the solution",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-500/10 to-pink-500/10",
    },
    {
      icon: "3",
      title: "Grow Your Business",
      description: "Implementing scalable solutions that evolve with your business needs",
      color: "from-pink-500 to-orange-500",
      bgColor: "from-pink-500/10 to-orange-500/10",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent1/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent2/5 rounded-full blur-3xl"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center px-4 py-2 mb-4 text-sm rounded-full bg-accent2/10 border border-accent2/20">
            <span className="animate-pulse mr-2 h-2 w-2 rounded-full bg-accent2"></span>
            <span className="text-accent2 font-medium">PROCESS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My Working{" "}
            <span className="text-accent1 relative">
              Process
              <span className="absolute bottom-1 left-0 w-full h-3 bg-accent2/20 -z-10"></span>
            </span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A structured approach to delivering exceptional results through proven methodologies
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center group relative">
              {/* Background glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${step.bgColor} rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150`}></div>
              
              <div className="relative z-10 space-y-6">
                {/* Step number with gradient */}
                <div className="relative">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} text-white flex items-center justify-center text-3xl font-bold group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {step.icon}
                  </div>
                  <div className="absolute -inset-2 rounded-full border-2 border-dashed border-current opacity-0 group-hover:opacity-100 animate-spin transition-opacity duration-300"></div>
                </div>
                
                <div className="max-w-xs">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-accent2 transition-colors duration-300">{step.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{step.description}</p>
                </div>
              </div>
              
              {/* Arrow connector - only show between steps */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-24 h-0.5 bg-gradient-to-r from-accent1/50 to-accent2/50">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-accent2/50 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
