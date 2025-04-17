import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import SVGText from "./SvgAnimation";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <h1>Kinetic Typography</h1>
      <p>Check the examples below to learn more about kinetic typography</p>
      <div className="navigation">
        <h2>Navigate to:</h2>
        <div className="button-container">
          <Button onClick={() => navigate("/typewriter")}>
            Typewriter Page
          </Button>
          <Button onClick={() => navigate("/framer-motion-text")}>
            Framer Motion Text
          </Button>
          <Button onClick={() => navigate("/gsap-text")}>GSAP Text</Button>
          <Button onClick={() => navigate("/svg-animation")}>
            SVG Animation
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
