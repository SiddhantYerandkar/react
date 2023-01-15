import React from "react";
import "./Navbar.css"

const Navbar = () => {
    return (
        <>
            <nav className="main-nav">
                <div className="logo">
                    <h2>
                        <span>O</span>nline
                        <span>E</span>xamination
                    </h2>
                </div>
                <div className="menu-link">
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/Admin">Admin</a>
                        </li>
                        <li>
                            <a href="/Student">Student</a>
                        </li>
                    </ul>
                </div>
            </nav>

        </>
    )
}

export default Navbar