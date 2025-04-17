import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import "../styles/Typewriter.css";

function Typewriter() {
  const fullText =
    "This is a typewriter effect demonstration. It's a simple example of kinetic typography.";

  const navigate = useNavigate();

  const [key, setKey] = useState(0);

  const resetTypewriter = () => {
    // Force a re-render by toggling a state

    // Increment the key to trigger a re-render of the typewriter element
    setKey((prevKey) => prevKey + 1);
  };

  return (
    <div className="typewriter-page">
      <h1>Typewriter Effect</h1>

      <h2 key={key} className="typewriter">
        Hello, I'm your animated heading.
      </h2>

      <div className="typewriter-controls">
        <Button onClick={resetTypewriter}>Restart Animation</Button>
      </div>

      <div className="navigation">
        <Button onClick={() => navigate("/")}>Back to Home</Button>
      </div>
    </div>
  );
}

export default Typewriter;
