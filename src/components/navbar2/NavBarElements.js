import styled from "styled-components"
import { NavLink as Link } from "react-router-dom"
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
    font-family: 'Lato', sans-serif;
    background: #ffffff;
    height: 70px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px)/2);
    z-index: 10;
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;

  cursor: pointer;
  &.active {
    color: #15cdfc;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavSearch = styled.nav`
    
`;

export const NavBtn = styled.nav`
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
    display: none;
}
`;

export const NavBtn2 = styled.nav`
    font-family: 'Lato', sans-serif;
    display: flex;2
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
    display: none;
}
`;

export const NavBtnSign = styled(Link)`
  font-family: 'Lato', sans-serif;
  box-shadow: 0 0 20px #eee;
  background-image: linear-gradient(to bottom, #f0f0f5 0%, #DADAE6 100%);
  border-radius: 20px;
  padding: 10px 22px;
  color: grey;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  margin-left: 24px;

  &:hover {
    background-position: right center;
    transition: all 0.2s ease-in-out;
    opacity: 80%;
  }
`;

