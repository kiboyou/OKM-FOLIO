const Footer = () => {
  return (
      <footer id="footer" className="footer accent-background">
        <div className="container">
          <div className="copyright text-center">
            <p>
              © <span>Copyright</span> <strong className="px-1 sitename">K.M. OUATTARA</strong>{' '}
              <span>Tous Droits Réservés</span>
            </p>
          </div>
          <div className="social-links d-flex justify-content-center">
            <a href="https://github.com/kiboyou?tab=repositories" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/kiboyou-mohamed-ouattara-4131bb220/" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
