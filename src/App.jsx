import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Typewriter from "./pages/Typewriter";
import FramerMotionText from "./pages/FramerMotionText";
import GsapText from "./pages/GsapText";
import SVGText from "./pages/SvgAnimation";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/typewriter" element={<Typewriter />} />
          <Route path="/framer-motion-text" element={<FramerMotionText />} />
          <Route path="/gsap-text" element={<GsapText />} />
          <Route path="/svg-animation" element={<SVGText />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
