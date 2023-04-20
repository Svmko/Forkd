import React from "react";
import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink, Bars, NavBtnSign, NavSearch } from "./NavBarElements"
import logo from "../../assets/test.png"
import "../../App"

const Navbar2 = () => {
    return (
        <>
            <Nav>
                <NavLink to="/" className="home" >
                    <a href="" className="logo">
                        <img className="logo" src={logo} alt="" 
                        width="auto"
                        height="50"/>
                    </a>
                </NavLink>
                <Bars />
                <NavBtn>
                    <NavBtnSign to="/login">Login</NavBtnSign>
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar2;
