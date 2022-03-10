import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../Images/RClogo.png";
import "./NavBar.css"
function NavBar() {
    // 변수
    const [user, setUser] = useState();

    // 함수
    const login = () => {
        setUser({
            "id": 1,
            "email": "kim@gmail.com",
            "createdAt": "2021-12-18 22:51:19"
        })
    }
    const logout = () => {
        setUser(null)
    }
    const MenuItem = ({ active, children, to }) => (
        <div className="menu-item">{children}</div>
    );

    // 렌더
    return (
        <div>
        <div className="logo"><Link to = "/home"><IMG src={logo} /></Link></div>
            
        <div className="menu">
        <Link to ="/board/1"><MenuItem>게시판</MenuItem></Link>
        <Link to ="/mypage"><MenuItem>마이페이지</MenuItem></Link>
        <MenuItem> 
        {user ?
                <Link to ="/board"><div>
                    <MenuItem onClick={logout}>로그아웃 {user.email}</MenuItem>
                </div></Link>
                :
                <Link to="/signin"><div>
                    <MenuItem onClick={login}>로그인 </MenuItem>
                </div>  </Link>}
                </MenuItem>
                </div>
      </div>
    )
}


export default NavBar
const IMG = styled.img`
width: 80px;
height: 50px;
margin: 0px;
opacity: 1;
background-color: white;

`;