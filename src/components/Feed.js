import React from "react";
import Navbar from "./navbar/index";
//import Card from "./jsx/CardUI";
import Cards from "./cards/Cards";
//import AllPosts from "./components/AllPosts";
import styled from "styled-components";

const GradientBackground = styled.div`
  height: 100vh;
  background: linear-gradient(to bottom, #ffffff 50%, #DADAE6 100%);
`;

function Feed() {
    return (
        <GradientBackground>
            {
                <div class="column">
                    <div class="row">
                        <Navbar />
                    </div>
                    <div class="row">
                        <Cards />
                    </div>
                </div>
            }
        </GradientBackground>
    )
}

export default Feed;
