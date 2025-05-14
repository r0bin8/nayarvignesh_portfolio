
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function SkillsSection() {
  const technicalSkills = [
    { name: "HTML/CSS", proficiency: 90 },
    { name: "JavaScript", proficiency: 85 },
    { name: "Python", proficiency: 80 },
    { name: "C", proficiency: 75 },
    { name: "SQL", proficiency: 70 },
    { name: "IoT", proficiency: 80 },
  ];

  const softSkills = [
    "Teamwork",
    "Adaptability",
    "Problem-Solving",
    "Communication",
    "Analytical Thinking",
  ];

  return (
    <section id="skills" className="py-16">
      <div className="container px-4 mx-auto">
        <div className="mb-10 text-center">
          <p className="text-accent1 font-semibold mb-2">MY SKILLS</p>
          <h2 className="text-3xl font-bold">Technical Expertise</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-foreground/70">
                      {skill.proficiency}%
                    </span>
                  </div>
                  <Progress value={skill.proficiency} className="h-2" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Soft Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {softSkills.map((skill) => (
                <Card
                  key={skill}
                  className="border border-accent2/20 hover:border-accent2/60 transition-colors"
                >
                  <CardContent className="p-6">
                    <h4 className="text-lg font-medium text-center">{skill}</h4>
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
