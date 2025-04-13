import {Link} from "react-router-dom";
import Navbar from "./Navbar.jsx";

const Header = () => {
  return (
      <header id="header" className="header d-flex align-items-center sticky-top">
        <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
          <Link to="/" className="logo d-flex align-items-center">
            <h1 className="sitename">-O.K.M-</h1>
          </Link>
          <Navbar/>
        </div>
      </header>
  );
};

export default Header;
