import {
  Code2,
  Palette,
  Layout,
  Sparkles,
  Boxes,
  Layers,
  GitBranch,
} from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";

const skills = [
  {
    name: "HTML",
    icon: Layout,
    description: "Semantic markup",
    color: "from-orange-400 to-orange-500",
  },
  {
    name: "CSS",
    icon: Palette,
    description: "Modern styling",
    color: "from-blue-400 to-blue-500",
  },
  {
    name: "JavaScript",
    icon: Sparkles,
    description: "Dynamic interactivity",
    color: "from-yellow-400 to-yellow-500",
  },
  {
    name: "TypeScript",
    icon: Code2,
    description: "Type-safe code",
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "Tailwind CSS",
    icon: Boxes,
    description: "Utility-first CSS",
    color: "from-cyan-400 to-cyan-500",
  },
  {
    name: "React",
    icon: Layers,
    description: "UI components",
    color: "from-sky-400 to-sky-500",
  },
  {
    name: "Git",
    icon: GitBranch,
    description: "Version control",
    color: "from-orange-500 to-red-500",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    description: "Code collaboration",
    color: "from-gray-600 to-gray-800",
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8 sm:mb-12">
          <Code2 className="text-blue-400" size={28} />
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Skills</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {skills.map((skill) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={skill.name}
                className="bg-gray-800/50 rounded-xl shadow-lg p-5 sm:p-6 border border-blue-500/40 hover:shadow-xl hover:border-blue-400/60 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
              >
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4`}
                >
                  <IconComponent className="text-white" size={24} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                  {skill.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-400">
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
