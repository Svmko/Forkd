import React from "react";
import Login_page from "./jsx/login";
import "../App.css"
import styled from "styled-components";

const GradientBackground = styled.div`
  height: 100vh;
  background: linear-gradient(to bottom, #ffffff 0%, #DADAE6 100%);
`;

function LoginPage() {
    return (
        <GradientBackground>
            {
                <div class="login-atr">
                    <Login_page />
                </div>
            }
        </GradientBackground>
    )
}

export default LoginPage;
