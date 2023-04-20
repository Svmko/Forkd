import React from "react";
import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink, Bars, NavBtnSign, NavSearch } from "./NavBarElements"
import logo from "./full.png"

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/" className="home" >
                    <a href="" className="logo">
                        <img className="logo" src={logo} alt="" 
                        width="auto"
                        height="40"/>
                    </a>
                </NavLink>
                <Bars />
                <NavBtn>
                    <NavBtnLink to="/post">Create Post</NavBtnLink>
                    <NavBtnSign to="/">Sign Out</NavBtnSign>
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;
