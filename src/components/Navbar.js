import React from "react";
import { Link } from "react-router-dom";
import "../styles/style.css"

function Navbar() {

    return (

        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/"> Tafseer Khan </Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="/contact" className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}>Contact</Link>
                    </li>

                    <li className="navbar-nav ml-auto">
                        <Link to="/portfolio" className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>Portfolio</Link>
                    </li>

                    <li className="navbar-nav ml-auto">
                        <Link to="/resume" className={window.location.pathname === "/resume" ? "nav-link active" : "nav-link"}>Resume</Link>
                    </li>
                </ul>

            </nav>
        </div>
    )

} export default Navbar;