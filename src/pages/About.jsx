import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

function About() {
  const navigate = useNavigate();
  
  return (
    <div className="about-page">
      <h1>About Us</h1>
      <p>This is the about page where you can learn more about our company.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. 
         Sed euismod, nisl eget ultricies ultrices, ipsum nisi aliquam magna, 
         at aliquam nunc nisi vel nisi.</p>
      <div className="navigation">
        <Button onClick={() => navigate("/")}>
          Back to Home
        </Button>
      </div>
    </div>
  );
}

export default About; 