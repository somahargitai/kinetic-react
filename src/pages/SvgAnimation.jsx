import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import "../styles/SvgAnimation.css";

const SVGText = () => {
  const navigate = useNavigate();

  return (
    <div className="svg-animation-page">
      <h1>SVG Text Animation</h1>

      <div className="svg-container">
        <svg viewBox="0 0 600 100" width="100%" height="200">
          <text
            x="50%"
            y="75"
            fontSize="120"
            fontFamily="'EB Garamond', serif"
            fontWeight="600"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeDasharray="1000"
            strokeDashoffset="1000"
            textAnchor="middle"
            className="svg-animated-text"
          >
            Elegant
          </text>
        </svg>
      </div>

      <div className="animation-info">
        <p>
          This animation uses the elegant EB Garamond font from Google Fonts.
        </p>
        <p>
          The SVG text is animated using CSS stroke-dasharray and
          stroke-dashoffset properties.
        </p>
      </div>

      <div className="navigation">
        <Button onClick={() => navigate("/")}>Back to Home</Button>
      </div>
    </div>
  );
};

export default SVGText;
