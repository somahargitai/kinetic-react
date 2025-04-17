import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const GSAPText = () => {
  const textRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, delay: 0.2 }
    );
  }, []);

  return (
    <>
      <h1 ref={textRef} style={{ fontSize: "2.5rem" }}>
        Slide In Text
      </h1>

      <div style={{ textAlign: "right", marginTop: "1rem" }}>
        <a
          href="https://gsap.com/docs/v3/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: "0.675rem",
            textTransform: "uppercase",
            letterSpacing: "1px",
          }}
        >
          GSAP Documentation
        </a>
      </div>

      <div className="navigation">
        <Button onClick={() => navigate("/")}>Back to Home</Button>
      </div>
    </>
  );
};

export default GSAPText;
