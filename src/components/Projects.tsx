import { Briefcase, ExternalLink } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";

const projects = [
  {
    title: "Anime Explorer",
    description:
      "A web application for discovering and exploring anime series with detailed information, ratings, and personalized recommendations.",
    image:
      "https://images.unsplash.com/photo-1755962270071-d8e353c7ca97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMG1hbmdhJTIwY29sb3JmdWx8ZW58MXx8fHwxNzc0ODQxMzA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "TypeScript", "API Integration", "tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-pink-500 to-purple-600",
  },
  {
    title: "AirBNB Clone",
    description:
      "A fully functional vacation rental platform clone featuring property listings, search filters, booking system, and responsive design.",
    image:
      "https://images.unsplash.com/photo-1594873604892-b599f847e859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzQ4NzQyNTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["HTML", "CSS"],
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-red-500 to-pink-500",
  },
  {
    title: "Pokédex",
    description:
      "An interactive Pokédex application with search functionality, detailed Pokémon stats, evolution chains, and type-based filtering.",
    image:
      "https://images.unsplash.com/photo-1647893977168-6316f6c9ae44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2tlbW9uJTIwY2FyZHMlMjBnYW1lfGVufDF8fHx8MTc3NDk0MzE1MHww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "PokéAPI", "tailwind CSS", "TypeScript"],
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-yellow-500 to-red-500",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8 sm:mb-12">
          <Briefcase className="text-blue-400" size={28} />
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-2xl shadow-lg overflow-hidden border border-blue-500/40 hover:shadow-2xl hover:border-blue-400/60 transition-all duration-300 hover:-translate-y-2 group backdrop-blur-sm"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                ></div>
              </div>

              <div className="p-5 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs sm:text-sm rounded-full border border-blue-400/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors text-sm sm:text-base"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                    aria-label="View GitHub repository"
                  >
                    <SiGithub size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
