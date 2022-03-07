import React from "react";
import styled from 'styled-components';
import img1 from "../Images/1.jpeg"
import img2 from "../Images/2.jpeg"
import img3 from "../Images/3.jpeg"
import img4 from "../Images/4.jpeg"
import NavBar from "../Components/NavBar";
function Home() {
    return (
        <div>
        <NavBar />
            <h1> 홈페이지 기본</h1>
            <IMG src={img1} />
            <IMG src={img2} />
            <IMG src={img3} />
            <IMG src={img4} />
        </div>
    )
}

export default Home; 

const IMG = styled.img`
width: 500px;
height: 250px;
margin: 20px;
opacity: 0.5;
background-color: black;

`;