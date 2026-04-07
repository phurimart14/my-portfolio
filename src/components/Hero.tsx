import { useState, useEffect, useRef } from "react";
import { ChevronDown, Briefcase, Download } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

export function Hero() {
  const ref = useScrollReveal();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypeingSpeed] = useState(150);

  const title = ["Frontend Developer", "Creative Designer"];

  // Particle effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
    }[] = [];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 1.5 + 0.5,
      });
    }

    let animId: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(96, 165, 250, 0.6)";
        ctx.fill();
      });

      // Draw lines between nearby particles
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(96, 165, 250, ${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
    <section
      ref={ref}
      className=" reveal min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 relative"
    >
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />
      {/* Content */}
      <div className="text-center space-y-4 sm:space-y-6 max-w-3xl relative z-10">
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
        className="absolute bottom-8 sm:bottom-12 animate-bounce text-blue-400 hover:text-blue-300 transition-colors z-10"
        aria-label="Scroll to content"
      >
        <ChevronDown size={40} />
      </button>
    </section>
  );
}
