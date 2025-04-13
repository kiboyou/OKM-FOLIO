import {useEffect, useState} from "react";
import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";
import AllPortfolio from "../components/AllPortfolio.jsx";

const RealisationsPage = () => {
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

                        {/* Portfolio Section */}
                        <AllPortfolio/>

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

export default RealisationsPage;
