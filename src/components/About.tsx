import { User } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8 sm:mb-12">
          <User className="text-blue-400" size={28} />
          <h2 className="text-3xl sm:text-4xl font-bold text-white">About Me</h2>
        </div>

        <div className="bg-gray-800/50 rounded-2xl shadow-lg p-6 sm:p-8 md:p-12 border border-blue-500/40 backdrop-blur-sm">
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            Hello! I'm <span className="font-semibold text-blue-400">Phurimart Sudanich</span>, 
            a passionate frontend developer dedicated to creating engaging and intuitive web 
            experiences. I love bringing ideas to life through code and design, combining 
            technical expertise with creative problem-solving.
          </p>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed mt-4 sm:mt-6">
            When I'm not coding, you'll find me exploring the worlds of gaming, enjoying music, 
            or diving into anime. These interests inspire my creative approach to development 
            and keep me motivated to learn and grow.
          </p>
        </div>
      </div>
    </section>
  );
}