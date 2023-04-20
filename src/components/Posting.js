import React from "react";
import Submit_post from "./jsx/submitPost";
import "../App.css"
import styled from "styled-components";

const GradientBackground = styled.div`
  height: 100vh;
  background: linear-gradient(to bottom, #ffffff 0%, #DADAE6 100%);
`;

function Posting() {
    return (
        <GradientBackground>
            {
                <div class="post-atr">
                    <Submit_post />
                </div>
            }
        </GradientBackground>
    )
}

export default Posting;
