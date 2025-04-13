import TypedText from "../utils/TypedText.jsx";
import bg from '../assets/img/bg.jpeg';

const Hero = () => {
  return (
      <section id="hero" className="hero section dark-background">
          <img src={bg} alt="Image de présentation" />
          <div className="container d-flex flex-column align-items-center justify-content-center text-center">
              <h2>Je suis Kiboyou Mohamed OUATTARA</h2>
              <TypedText />
          </div>
      </section>
  );
};

export default Hero;
