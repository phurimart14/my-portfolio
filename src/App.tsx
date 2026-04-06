import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Interests } from "./components/Interests";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Interests />
      <Contact />
    </div>
  );
}

export default App;
