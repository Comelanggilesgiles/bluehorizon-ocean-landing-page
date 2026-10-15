import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { DepthExplorer } from "./components/DepthExplorer";
import { Stats } from "./components/Stats";
import { Expeditions } from "./components/Expeditions";
import { Newsletter } from "./components/Newsletter";
import { Footer } from "./components/Footer";
import { WaveDivider } from "./components/Bubbles";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-abyss text-foam selection:bg-aqua">
      <Navbar />
      <main>
        <Hero />
        <WaveDivider className="-mt-24" />
        <Features />
        <DepthExplorer />
        <Stats />
        <Expeditions />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
