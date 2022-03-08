import React from "react";
import styled from 'styled-components';
import img1 from "../Images/1.jpeg"
import img2 from "../Images/2.jpeg"
import img3 from "../Images/3.jpeg"
import img4 from "../Images/4.jpeg"
import NavBar from "../Pages/NavBar";
function Home() {
    return (
        <div>
        
            <h1>리부트캠프에 오신 것을 환영합니다</h1>
            <h1>로그인을 해주세요</h1>
            <div><IMG src={img1} /></div>
            <h1>여러 부트캠프에 대해서 궁금하신가요?</h1>
            <h1>리부트캠프에서는 게시글로 부트캠프 정보를 알 수 있습니다</h1>
            <div><IMG src={img2} /></div>
            <div><IMG src={img3} /></div>
            <div><IMG src={img4} /></div>
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