import "./App.css";
import Body from "./components/meio/Body";
import Footer from "./components/baixo/Footer";

import Particles from "./components/Particles";
import NavBar from "./components/top/NavBar";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden ">
      <div className="fixed inset-0 -z-10 bg-black">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      <NavBar />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
