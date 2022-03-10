import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import img1 from "../Images/1.jpeg"
import img2 from "../Images/2.png"
import img3 from "../Images/3.jpeg"
import img4 from "../Images/4.png"
import NavBar from "../Pages/NavBar";
import "./Home.css"
function Home() {
    return (
        
        <div className = "wholepage-wrapper">
        
            <h1 className="welcome">리부트캠프에 오신 것을 환영합니다</h1>
            <div className="grid-image">
            <h1 className="welcome"><Link to ="/signin">
            <button className="button">로그인</button></Link>을 해주세요</h1>
            <img src={img1} /></div>
            <div className="grid-image"><div><img src={img2} /></div><h2 className="welcome">이리저리 흩어져있는 부트캠프 정보가 궁금하신가요?<br></br>여러 부트캠프에 대해서 궁금하신가요?<br></br>부트캠프 정보를 모아 볼 수 있는 사이트가 있습니다.</h2>
            </div>
            <div className="grid-image"><h2 className="welcome">리부트캠프에서는 게시글로 <br></br>부트캠프 정보를 알 수 있습니다.<br></br>다른 수강생들의 생생한 정보를 놓치지 마세요!</h2>
            <div><img src={img3} /></div></div>
            <div className="grid-image"><div><img style={{border: "1px solid black"}} src={img4} /></div><h2 className="welcome"> 부트캠프를 다니셨나요? <br></br>다른 사람에게 도움이 될 수 있도록<br></br> 게시글을 남겨보세요!</h2></div>
        </div>
    )
}

export default Home;

// const IMG = styled.img`
// width: 600px;
// height: 300px;
// margin: 20px;
// opacity: 1;
// background-color: white;
// floar: center;
// `;

