import React from "react";
import styled from "styled-components";
import img1 from "../Assets/imges/1.jpeg"
import img2 from "../Assets/imges/2.jpeg"
import img3 from "../Assets/imges/3.jpeg"
import img4 from "../Assets/imges/4.jpeg"

function Home() {
    return (

        <div>
            <h2>홈입니다</h2>
            <h1>부트캠프 관련 게시판형 웹사이트</h1>
            <ImgModule img src={img1}></ImgModule>
            <ImgModule img src={img2}></ImgModule>
            <ImgModule img src={img3}></ImgModule>
            <ImgModule img src={img4}></ImgModule>

        </div>
    )
}

export default Home
const ImgModule = styled.img`
    width: 600px;
    height: 400px;
    margin: 20px;
    opacity: 0.5;
    background-color: black;
    
  `;