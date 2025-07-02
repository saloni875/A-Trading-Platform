
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg border-bottom" style={{background: "#FFF"}}>
                <div className="container p-2">
                    <Link className="navbar-brand" to="/">
                        <img src="media/images/logo.svg" alt="logo" style={{width: "25%"}} />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">


                            <li className="nav-item">
                                <Link className="nav-link" to="/signup">signUp</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li clasNames="nav-item">
                                <Link className="nav-link" to="/product">Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/pricing">Pricing</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/support">Support</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        </>
    );
}





export default Navbar;