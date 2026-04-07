import { Mail } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { FaLinkedin } from "react-icons/fa";
import { useScrollReveal } from "../hooks/useScrollReveal";

const contactMethods = [
  {
    name: "Email",
    icon: Mail,
    value: "phurimart14@gmail.com",
    href: "mailto:phurimart14@gmail.com",
    color: "from-red-500 to-orange-500",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    value: "linkedin.com/in/phurimart",
    href: "https://linkedin.com/in/phurimart",
    color: "from-blue-600 to-blue-700",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    value: "github.com/phurimart14",
    href: "https://github.com/phurimart14",
    color: "from-gray-700 to-gray-900",
  },
];

export function Contact() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const ref = useScrollReveal();

  return (
    <section ref={ref} className="reveal py-16 sm:py-20 px-4 sm:px-6 bg-black/20">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8 sm:mb-12">
          <Mail className="text-blue-400" size={28} />
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Get In Touch
          </h2>
        </div>

        <div className="bg-gray-800/50 rounded-2xl shadow-lg p-6 sm:p-8 md:p-12 border border-blue-500/40 backdrop-blur-sm">
          <p className="text-base sm:text-lg text-gray-300 mb-8 sm:mb-10 text-center">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          <div className="space-y-4">
            {contactMethods.map((method) => {
              const IconComponent = method.icon;
              return (
                <a
                  key={method.name}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6 rounded-xl bg-gray-700/30 hover:bg-gray-700/50 hover:shadow-md transition-all duration-300 group border border-blue-500/30 hover:border-blue-400/50"
                >
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br ${method.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="text-white" size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-white mb-1 text-sm sm:text-base">
                      {method.name}
                    </h3>
                    <p className="text-blue-400 group-hover:text-blue-300 text-xs sm:text-sm md:text-base truncate">
                      {method.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        <footer className="mt-12 sm:mt-16">
          {/* Navigation Links */}
          <nav className="mb-8">
            <ul className="flex flex-wrap justify-center gap-4 sm:gap-8">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm sm:text-base"
                >
                  About Me
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm sm:text-base"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm sm:text-base"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("interests")}
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm sm:text-base"
                >
                  Interests
                </button>
              </li>
            </ul>
          </nav>

          {/* Copyright */}
          <div className="text-center text-gray-500 text-sm sm:text-base border-t border-gray-700/50 pt-8">
            <p>© 2026 Phurimart Sudanich. Built with React & Tailwind CSS.</p>
          </div>
        </footer>
      </div>
    </section>
  );
}
