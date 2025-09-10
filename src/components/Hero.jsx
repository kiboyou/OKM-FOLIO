import bg from '../assets/img/bg.jpeg';
import useLanguage from '../context/useLanguage.js';
import TypedText from "../utils/TypedText.jsx";

const Hero = () => {
    const { t } = useLanguage();
    return (
        <section id="hero" className="hero section dark-background">
            <img src={bg} alt={t.hero.imgAlt} />
            <div className="container d-flex flex-column align-items-center justify-content-center text-center">
                <h2>{t.hero.heading}</h2>
                <TypedText />
            </div>
        </section>
    );
};

export default Hero;
