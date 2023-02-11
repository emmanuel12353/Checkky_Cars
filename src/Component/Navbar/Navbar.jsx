import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../Pics/logo.png';
import './Navbar.css';
function Navbar() {
  return (
    <div>
     <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container">
                <Link className="navbar-brand fw-bold fs-3" to="#">
                    <img src={logo} alt='' />
        
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation" style={{backgroundColor: "purple"}}>
                    <span className="navbar-toggler-icon" style={{color: "white"}}></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link pe-3 me-4 fw-bold" aria-current="page" to="/">HOME</Link>
                        </li>
                        
                        <li className="nav-item">
                            <a href='#faq' className="nav-link pe-3 me-4 fw-bold">FAQS</a>
                       
                        </li>
                        <li className="nav-item">
                        <a href='#contact' className="nav-link pe-3 me-4 fw-bold">Contact Us</a>
                            </li>
                       
                    </ul>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className=" nav-item">
                            <Link to="/Search">
                            <button className="Navbut">RENT A CAR</button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    </div>
  );
}

export default Navbar;
