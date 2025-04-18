import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const text = "Motion.dev Text";

const MotionDevText = ({ text }) => {
  const navigate = useNavigate();
  const letters = text.split("");

  return (
    <>
      <div style={{ display: "flex", overflow: "hidden" }}>
        {letters.map((char, index) => (
          <motion.span
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.05 }}
            style={{ display: "inline-block", fontSize: "2rem" }}
          >
            {char}
          </motion.span>
        ))}
      </div>

      <div style={{ textAlign: "right", marginTop: "1rem" }}>
        <a
          href="https://motion.dev/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: "0.675rem",
            textTransform: "uppercase",
            letterSpacing: "1px",
          }}
        >
          Motion.dev Documentation
        </a>
      </div>

      <div className="navigation">
        <Button onClick={() => navigate("/")}>Back to Home</Button>
      </div>
    </>
  );
};

export default () => <MotionDevText text={text} />;
