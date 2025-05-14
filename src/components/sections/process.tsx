
import { Separator } from "@/components/ui/separator";

export function ProcessSection() {
  const processSteps = [
    {
      icon: "1",
      title: "Business Planning",
      description: "Comprehensive analysis to understand your business needs and objectives",
    },
    {
      icon: "2",
      title: "Design Strategy",
      description: "Creating detailed wireframes and prototypes to visualize the solution",
    },
    {
      icon: "3",
      title: "Grow Your Business",
      description: "Implementing scalable solutions that evolve with your business needs",
    },
  ];

  return (
    <section className="py-16">
      <div className="container px-4 mx-auto">
        <div className="mb-10 text-center">
          <p className="text-accent1 font-semibold mb-2">PROCESS</p>
          <h2 className="text-3xl font-bold">My Working Process</h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto">
          {processSteps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center mb-8 md:mb-0">
              <div className="w-16 h-16 rounded-full bg-accent2 text-white flex items-center justify-center text-2xl font-bold mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-foreground/70 max-w-xs">{step.description}</p>
              
              {index < processSteps.length - 1 && (
                <div className="hidden md:block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100"
                    height="24"
                    viewBox="0 0 100 24"
                    fill="none"
                    className="mx-4"
                  >
                    <path
                      d="M99.0607 13.0607C99.6464 12.4749 99.6464 11.5251 99.0607 10.9393L89.5147 1.3934C88.9289 0.807611 87.9792 0.807611 87.3934 1.3934C86.8076 1.97919 86.8076 2.92893 87.3934 3.51472L95.8787 12L87.3934 20.4853C86.8076 21.0711 86.8076 22.0208 87.3934 22.6066C87.9792 23.1924 88.9289 23.1924 89.5147 22.6066L99.0607 13.0607ZM0 13.5H98V10.5H0V13.5Z"
                      fill="currentColor"
                      className="text-accent1"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
