import { NavLink } from "react-router-dom"
import "./Navbar.css";

export const Navbar = () => {
    return(
        <>
        <header>
            <div className="container">
                <div className="logo-brand">
                <a href="/">Omega Technologies</a>


                
                </div>
                <nav>
                <ul>
                    <li><NavLink to="/home">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/register">Register</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>
                    <li><NavLink to="/service">Services</NavLink></li>
                </ul>
                </nav>
                </div>
        </header>
        </>
    )};