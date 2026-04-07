import { Briefcase, ExternalLink } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import animeExplorer from "../images/Anime Explorer.png";
import airbnbClone from "../images/airbnb-clone.png";
import pokedex from "../images/pokedex.png";

const projects = [
  {
    title: "Anime Explorer",
    description:
      "A web application for discovering and exploring anime series with detailed information, ratings, and personalized recommendations.",
    image: animeExplorer,
    tags: ["React", "TypeScript", "API Integration", "tailwind CSS"],
    liveUrl: "https://animeexplorer-chi.vercel.app/",
    githubUrl:
      "https://github.com/phurimart14/Final-Front-end-Project-anime-explorer",
    gradient: "from-pink-500 to-purple-600",
  },
  {
    title: "AirBNB Clone",
    description:
      "A fully functional vacation rental platform clone featuring property listings, search filters, booking system, and responsive design.",
    image: airbnbClone,
    tags: ["HTML", "CSS"],
    liveUrl: "https://cloneairbnb-kohl.vercel.app/",
    githubUrl: "https://github.com/phurimart14/cloneairbnb",
    gradient: "from-red-500 to-pink-500",
  },
  {
    title: "Pokédex",
    description:
      "An interactive Pokédex application with search functionality, detailed Pokémon stats, evolution chains, and type-based filtering.",
    image: pokedex,
    tags: ["React", "PokéAPI", "tailwind CSS", "TypeScript"],
    liveUrl: "https://pokedex-do4o1jq5z-phurimart14s-projects.vercel.app/",
    githubUrl: "https://github.com/phurimart14/Pokedex",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 ">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-2xl shadow-lg overflow-hidden border border-blue-500/40 hover:shadow-2xl hover:border-blue-400/60 transition-all duration-300 hover:-translate-y-2 group backdrop-blur-sm flex flex-col"
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

              <div className="p-5 sm:p-6 flex flex-col flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-300 mb-4 leading-relaxed flex-1">
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

                <div className="flex gap-3 ">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors text-sm sm:text-base"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
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
