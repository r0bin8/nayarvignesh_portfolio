
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function SkillsSection() {
  const technicalSkills = [
    { name: "HTML/CSS", proficiency: 90, color: "from-orange-500 to-red-500" },
    { name: "JavaScript", proficiency: 85, color: "from-yellow-500 to-orange-500" },
    { name: "Python", proficiency: 80, color: "from-blue-500 to-green-500" },
    { name: "C", proficiency: 75, color: "from-purple-500 to-blue-500" },
    { name: "SQL", proficiency: 70, color: "from-green-500 to-teal-500" },
    { name: "IoT", proficiency: 80, color: "from-accent2 to-accent1" },
  ];

  const softSkills = [
    "Teamwork",
    "Adaptability", 
    "Problem-Solving",
    "Communication",
    "Analytical Thinking",
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent2/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent1/5 rounded-full blur-3xl"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center px-4 py-2 mb-4 text-sm rounded-full bg-accent2/10 border border-accent2/20">
            <span className="animate-pulse mr-2 h-2 w-2 rounded-full bg-accent2"></span>
            <span className="text-accent2 font-medium">MY SKILLS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical{" "}
            <span className="text-accent1 relative">
              Expertise
              <span className="absolute bottom-1 left-0 w-full h-3 bg-accent2/20 -z-10"></span>
            </span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Continuously expanding my technical toolkit with modern technologies and best practices
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h3 className="text-3xl font-semibold mb-8 flex items-center">
              <div className="w-8 h-8 rounded-lg bg-accent2/20 mr-3"></div>
              Technical Skills
            </h3>
            <div className="space-y-8">
              {technicalSkills.map((skill, index) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between mb-3">
                    <span className="font-semibold text-lg">{skill.name}</span>
                    <span className="text-foreground/70 font-medium">
                      {skill.proficiency}%
                    </span>
                  </div>
                  <div className="relative">
                    <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse`}
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-3xl font-semibold mb-8 flex items-center">
              <div className="w-8 h-8 rounded-lg bg-accent1/20 mr-3"></div>
              Soft Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {softSkills.map((skill, index) => (
                <Card
                  key={skill}
                  className="border border-accent1/20 hover:border-accent1/60 transition-all duration-300 group bg-card/80 backdrop-blur-sm hover:shadow-xl hover:shadow-accent1/10"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-accent1/10 mx-auto mb-4 flex items-center justify-center group-hover:bg-accent1/20 transition-colors">
                      <span className="text-2xl">💡</span>
                    </div>
                    <h4 className="text-lg font-medium group-hover:text-accent1 transition-colors">{skill}</h4>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
