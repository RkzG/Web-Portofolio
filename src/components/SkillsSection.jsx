import { cn } from "@/lib/utils";
import { act, useState } from "react";
const skills = [
  //Frontend Skills
  { name: "HTML/CSS", level: 95, category: "Frontend" },
  { name: "Javascript", level: 95, category: "Frontend" },
  { name: "ReactJs", level: 80, category: "Frontend" },
  { name: "VueJs", level: 80, category: "Frontend" },
  { name: "Bootstrap", level: 90, category: "Frontend" },
  { name: "TypeScript", level: 85, category: "Frontend" },
  { name: "Tailwind CSS", level: 80, category: "Frontend" },
  { name: "Next.js", level: 80, category: "Frontend" },

  //Backend Skills
  { name: "Node.JS", level: 90, category: "Backend" },
  { name: "Express", level: 90, category: "Backend" },
  { name: "Golang", level: 95, category: "Backend" },
  { name: "MongoDB", level: 85, category: "Backend" },
  { name: "PostgreSQL", level: 90, category: "Backend" },
  { name: "Laravel", level: 70, category: "Backend" },
  { name: "PHP", level: 70, category: "Backend" },
  { name: "Automated Tested", level: 80, category: "Backend" },
  { name: "Microservices", level: 90, category: "Backend" },
  { name: "REST API", level: 90, category: "Backend" },
  { name: "Redis", level: 80, category: "Backend" },
  { name: "MySql", level: 70, category: "Backend" },

  //Tools
  { name: "Git/Github", level: 95, category: "Tools" },
  { name: "Docker", level: 90, category: "Tools" },
  { name: "Figma", level: 95, category: "Tools" },
  { name: "Jenkins", level: 60, category: "Tools" },
  { name: "Sonarqube", level: 60, category: "Tools" },
  { name: "Scrum", level: 90, category: "Tools" },
  { name: "Postman", level: 90, category: "Tools" },
];

const categories = ["all", "Frontend", "Backend", "Tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary">
      <div className="container max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
