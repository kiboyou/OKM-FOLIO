import { Link as ScrollLink } from 'react-scroll';
import { useEffect, useState } from 'react';
// import './Navbar.css'; // Assure-toi d'importer ce fichier CSS

const Navbar = () => {
  const [isMobileNavActive, setMobileNavActive] = useState(false);

  const toggleMobileMenu = () => {
    setMobileNavActive(prev => !prev);
  };

  const closeMobileMenu = () => {
    setMobileNavActive(false);
  };

  // Ajout/Suppression de la classe 'scrolled' au body
  useEffect(() => {
    const toggleScrolled = () => {
      const header = document.querySelector('#header');
      if (!header) return;
      if (
          header.classList.contains('scroll-up-sticky') ||
          header.classList.contains('sticky-top') ||
          header.classList.contains('fixed-top')
      ) {
        if (window.scrollY > 100) {
          document.body.classList.add('scrolled');
        } else {
          document.body.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', toggleScrolled);
    window.addEventListener('load', toggleScrolled);
    return () => {
      window.removeEventListener('scroll', toggleScrolled);
      window.removeEventListener('load', toggleScrolled);
    };
  }, []);

  // ScrollSpy
  useEffect(() => {
    const links = document.querySelectorAll('.navmenu a');

    const navmenuScrollspy = () => {
      const position = window.scrollY + 200;
      links.forEach(link => {
        const section = document.querySelector(link.hash);
        if (!section) return;

        if (
            position >= section.offsetTop &&
            position <= section.offsetTop + section.offsetHeight
        ) {
          links.forEach(l => l.classList.remove('active'));
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    };

    window.addEventListener('scroll', navmenuScrollspy);
    window.addEventListener('load', navmenuScrollspy);
    return () => {
      window.removeEventListener('scroll', navmenuScrollspy);
      window.removeEventListener('load', navmenuScrollspy);
    };
  }, []);

  // Bloque le scroll du body quand le menu mobile est actif
  useEffect(() => {
    if (isMobileNavActive) {
      document.body.classList.add('mobile-nav-active');
    } else {
      document.body.classList.remove('mobile-nav-active');
    }
    return () => {
      document.body.classList.remove('mobile-nav-active');
    };
  }, [isMobileNavActive]);


  return (
      <>
        <i
            className={`mobile-nav-toggle d-xl-none bi ${isMobileNavActive ? 'bi-x' : 'bi-list'}`}
            onClick={toggleMobileMenu}
            style={{ cursor: 'pointer', zIndex: 99999, position: 'fixed', top: 15, right: 15, fontSize: 32, color: '#fff' }}
        ></i>

        <nav id="navmenu" className="navmenu">
          <ul>
            {['hero', 'À propos', 'cv', 'services', 'portfolio', 'contact'].map(
                (section, index) => (
                    <li key={index}>
                      <ScrollLink
                          to={section}
                          smooth={true}
                          duration={300}
                          spy={true}
                          offset={-80}
                          onClick={closeMobileMenu}
                          activeClass="active"
                      >
                        {section === 'hero' ? 'Accueil' : section.charAt(0).toUpperCase() + section.slice(1)}
                      </ScrollLink>
                    </li>
                )
            )}
          </ul>
        </nav>
      </>
  );
};

export default Navbar;
