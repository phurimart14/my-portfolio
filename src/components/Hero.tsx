import { useState, useEffect } from "react";
import { ChevronDown, Briefcase, Download } from "lucide-react";

export function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypeingSpeed] = useState(150);

  const title = ["Frontend Developer", "Creative Designer"];

  useEffect(() => {
    const handleTyping = () => {
      const currentIndex = loopNum % title.length;
      const fullText = title[currentIndex];

      if (isDeleting) {
        // Delete from right to left
        setText(fullText.substring(0, text.length - 1));
        setTypeingSpeed(75);
      } else {
        // Type from Left to Right
        setText(fullText.substring(0, text.length + 1));
        setTypeingSpeed(150);
      }

      // Check if word is complete
      if (!isDeleting && text === fullText) {
        // Pause at end
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownloadCV = () => {
    // Create a link element and trigger download
    // In a real scenario, replace with actual CV file path
    const link = document.createElement("a");
    link.href = "#"; // Replace with actual CV file path
    link.download = "Phurimart_Sudanich_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 relative">
      <div className="text-center space-y-4 sm:space-y-6 max-w-3xl">
        <div className="space-y-2">
          <p className="text-blue-400 text-base sm:text-lg font-medium tracking-wide h-7 sm:h-8">
            {text}
            <span className="animate-pulse">|</span>
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
            Phurimart Sudanich
          </h1>
        </div>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed px-4">
          Crafting beautiful and functional web experiences with modern
          technologies
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <button
            onClick={scrollToProjects}
            className="flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 font-semibold w-full sm:w-auto"
          >
            <Briefcase size={20} />
            <span>View Projects</span>
          </button>
          <button
            onClick={handleDownloadCV}
            className="flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gray-800/50 text-white border border-blue-500/40 rounded-lg hover:bg-gray-700/50 hover:border-blue-400/60 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 font-semibold backdrop-blur-sm w-full sm:w-auto"
          >
            <Download size={20} />
            <span>Download CV</span>
          </button>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 sm:bottom-12 animate-bounce text-blue-400 hover:text-blue-300 transition-colors"
        aria-label="Scroll to content"
      >
        <ChevronDown size={40} />
      </button>
    </section>
  );
}
