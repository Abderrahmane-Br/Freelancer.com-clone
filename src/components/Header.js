import React from 'react'
import search from "../assets/search.svg";
import { NavLink, useMatch } from "react-router-dom";

function Header() {

    return (
        <section className="headerContainer">
            <div className="header">
                <h1 className="header__title">Browse</h1>
                <div className="header__search">
                    <img src={search} alt="" className="searchIcon" />
                    <input
                        type="text"
                        name="" id=""
                        className="searchBar"
                        placeholder="Seach freelancers, projects or contests"
                    />
                </div>
                <ul className="header__navbar">
                    <span className="navlink">
                        Freelancers
                    </span>
                    <NavLink
                        to="projects"
                        className={useMatch("/") ? "navlink active" : "navlink"}
                    >
                        Projects
                    </NavLink>
                    <NavLink
                        to="contests"
                        className="navlink"
                    >
                        Contests
                    </NavLink>
                </ul>
            </div>
        </section>
    )
}

export default Header