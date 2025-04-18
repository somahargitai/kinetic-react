import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Typewriter from "./pages/Typewriter";
import GsapText from "./pages/GsapText";
import SVGText from "./pages/SvgAnimation";
import MotionDev from "./pages/MotionDev";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/typewriter" element={<Typewriter />} />
          <Route path="/gsap-text" element={<GsapText />} />
          <Route path="/svg-animation" element={<SVGText />} />
          <Route path="/motion-dev" element={<MotionDev />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
