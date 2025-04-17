import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const text = "Framer Motion Text";

const FramerMotionText = ({ text }) => {
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
      <div className="navigation">
        <Button onClick={() => navigate("/")}>Back to Home</Button>
      </div>
    </>
  );
};

export default () => <FramerMotionText text={text} />;
