import { useState } from "react";
import { Gamepad2, Music, Tv, Heart } from "lucide-react";
import umamusumeImage from "../images/interestimage/umamusume.jpg";
import yorushikaImage from "../images/interestimage/Yorushika_Logo.jpg";
import bleachImage from "../images/interestimage/bleach.png";
import { useScrollReveal } from "../hooks/useScrollReveal";

type InterestTab = "gaming" | "music" | "anime";

interface InterestDetail {
  title: string;
  description: string;
  image: string;
  details: string[];
  icon: typeof Gamepad2;
  gradient: string;
}

const interestDetails: Record<InterestTab, InterestDetail> = {
  gaming: {
    title: "Umamusume Pretty Derby",
    description:
      "A unique horse racing simulation game that combines idol training with competitive racing. Train your umamusume to become the best racer and idol!",
    image: umamusumeImage,
    details: [
      "Genre: Sports, Simulation, Rhythm",
      "Platform: Mobile, PC",
      "Developer: Cygames",
      "Favorite aspect: Character training and story depth",
    ],
    icon: Gamepad2,
    gradient: "from-purple-500 to-pink-500",
  },
  music: {
    title: "Yorushika",
    description:
      "A Japanese rock duo known for their poetic lyrics and emotional melodies. Their music perfectly blends storytelling with beautiful instrumentals.",
    image: yorushikaImage,
    details: [
      "Genre: Rock, Alternative",
      "Members: n-buna (composer), suis (vocalist)",
      "Notable songs: Hana ni Bourei, Nautilus",
      "Favorite aspect: Emotional storytelling and vocal delivery",
    ],
    icon: Music,
    gradient: "from-blue-500 to-cyan-500",
  },
  anime: {
    title: "Bleach",
    description:
      "An epic supernatural action anime following Ichigo Kurosaki's journey as a Soul Reaper. Features incredible sword battles and compelling character development.",
    image: bleachImage,
    details: [
      "Genre: Action, Supernatural, Adventure",
      "Studio: Studio Pierrot",
      "Episodes: 366 + Thousand-Year Blood War",
      "Favorite aspect: Epic sword fights and Bankai reveals",
    ],
    icon: Tv,
    gradient: "from-indigo-500 to-purple-500",
  },
};

export function Interests() {
  const ref = useScrollReveal();
  const [activeTab, setActiveTab] = useState<InterestTab>("gaming");
  const currentInterest = interestDetails[activeTab];
  const IconComponent = currentInterest.icon;

  return (
    <section ref={ref} id="interests" className="reveal py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8 sm:mb-12">
          <Heart className="text-blue-400" size={28} />
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Interests
          </h2>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8 justify-center">
          <button
            onClick={() => setActiveTab("gaming")}
            className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base ${
              activeTab === "gaming"
                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105"
                : "bg-gray-800/50 text-gray-300 border border-blue-500/40 hover:border-purple-400/60 hover:shadow-md backdrop-blur-sm"
            }`}
          >
            <Gamepad2 size={18} />
            <span>Gaming</span>
          </button>
          <button
            onClick={() => setActiveTab("music")}
            className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base ${
              activeTab === "music"
                ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg scale-105"
                : "bg-gray-800/50 text-gray-300 border border-blue-500/40 hover:border-blue-400/60 hover:shadow-md backdrop-blur-sm"
            }`}
          >
            <Music size={18} />
            <span>Music</span>
          </button>
          <button
            onClick={() => setActiveTab("anime")}
            className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base ${
              activeTab === "anime"
                ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg scale-105"
                : "bg-gray-800/50 text-gray-300 border border-blue-500/40 hover:border-indigo-400/60 hover:shadow-md backdrop-blur-sm"
            }`}
          >
            <Tv size={18} />
            <span>Anime</span>
          </button>
        </div>

        {/* Content Card */}
        <div className="bg-gray-800/50 rounded-2xl shadow-xl overflow-hidden border border-blue-500/40 backdrop-blur-sm">
          <div className="md:flex">
            {/* Image Section */}
            <div className="md:w-2/5 relative h-64 md:h-auto">
              <img
                src={currentInterest.image}
                alt={currentInterest.title}
                className="w-full h-full object-cover"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-br ${currentInterest.gradient} opacity-20`}
              ></div>
            </div>

            {/* Details Section */}
            <div className="md:w-3/5 p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br ${currentInterest.gradient} flex items-center justify-center`}
                >
                  <IconComponent className="text-white" size={20} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {currentInterest.title}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
                {currentInterest.description}
              </p>

              <div className="space-y-3">
                {currentInterest.details.map((detail, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 text-sm sm:text-base text-gray-400"
                  >
                    <div
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${currentInterest.gradient} mt-2 flex-shrink-0`}
                    ></div>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
