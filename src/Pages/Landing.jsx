import {useEffect, useState} from "react";
import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Resume from "../components/Resume.jsx";
import Portfolio from "../components/Portfolio.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";
import Services from "../components/Services.jsx";

const Landing = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simule un chargement de 2 secondes
        setTimeout(() => setIsLoading(false), 1000);
    }, []);

    return (
        <>
            {/* Préchargeur */}
            {isLoading && <div id="preloader"></div>}

            {/* Contenu principal */}
            {!isLoading && (
                <div className="index-page">
                    {/* Header */}
                   <Header/>


                    {/* Main Content */}
                    <main className="main">
                        {/* Hero Section */}
                        <Hero/>
                        {/* About Section */}
                        <About />

                        {/* Resume Section */}
                        <Resume/>

                        {/* Services Section */}
                        <Services/>

                        {/* Portfolio Section */}
                        <Portfolio/>

                        {/* Contact Section */}
                        <Contact/>
                    </main>
                    {/* Footer */}
                    <Footer/>
                </div>
            )}

        </>
    );
};

export default Landing;