import React from "react";
import styled from "styled-components";
import phone from "../assets/phone.png";
import "../App.css";
import Navbar2 from "./navbar2";
import Sign_up from "./jsx/signup";

const GradientBackground = styled.div`
  height: 100vh;
  background: linear-gradient(to bottom, #ffffff 50%, #DADAE6 100%);
`;

function Start() {
  return (
    <GradientBackground>
      {
        <div class="row">
            <Navbar2 />
            <div class="column">
                <div class="forkd">
                    <img src={phone} alt="" width="500px" height="auto"/>
                </div>
            </div>
            <div class="column">
                <div class="sign">
                    <Sign_up />
                </div>
            </div>
        </div>
      }
    </GradientBackground>
  );
}

export default Start;
