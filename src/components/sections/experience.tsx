
import { Calendar, BriefcaseIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function ExperienceSection() {
  const experiences = [
    {
      position: "Intern",
      company: "KPIT Technologies",
      duration: "May 2023 - June 2023",
      description: [
        "Designed an IoT system for optimizing battery management in 6-series lithium batteries.",
        "Enhanced charging, discharging, and thermal regulation through real-time monitoring.",
      ],
    },
  ];

  const achievements = [
    {
      title: "1st Place - Smart GITAM Hackathon",
      description:
        "IoT-based smart classroom for energy saving",
    },
    {
      title: "2nd Place - Hackfest 2024",
      description:
        "Parking Management System using OpenCV and AR",
    },
  ];

  return (
    <section id="experience" className="py-16 bg-muted/20">
      <div className="container px-4 mx-auto">
        <div className="mb-10 text-center">
          <p className="text-accent1 font-semibold mb-2">EXPERIENCE & ACHIEVEMENTS</p>
          <h2 className="text-3xl font-bold">Professional Journey</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <BriefcaseIcon className="mr-2 text-accent1" />
              Work Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="border-accent2/20">
                  <CardContent className="p-6">
                    <div className="flex flex-wrap justify-between items-start mb-2">
                      <h4 className="text-xl font-semibold">{exp.position}</h4>
                      <span className="text-sm text-foreground/70 flex items-center">
                        <Calendar className="mr-1 h-4 w-4" />
                        {exp.duration}
                      </span>
                    </div>
                    <p className="text-accent1 font-medium mb-3">{exp.company}</p>
                    <ul className="list-disc list-inside space-y-2 text-foreground/80">
                      {exp.description.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 text-accent1"
              >
                <path d="M8.21 13.89L7 23l9-9-8.99-2.12z"></path>
                <path d="M16.24 7.76l-2.12 2.12 2.12 2.12 2.12-2.12a1.5 1.5 0 0 0 0-2.12 1.5 1.5 0 0 0-2.12 0z"></path>
                <path d="m9.17 11.95 9.58-9.58"></path>
                <path d="m7.76 16.24 7.07-7.07"></path>
              </svg>
              Achievements
            </h3>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className="border-accent1/20 bg-gradient-to-br from-background to-accent2/5"
                >
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold mb-2">
                      {achievement.title}
                    </h4>
                    <p className="text-foreground/80">{achievement.description}</p>
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
