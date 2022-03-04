import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

function NavBar() {
return (
    <NavBarWrapper className="wrapper">
        <div className="link">
                <button>로고 오는 자리</button>
        </div>       

        <div className="link">
                <button>마이페이지</button>
        </div>

        <div className="link">
                <button>로그아웃</button>
        </div>
    </NavBarWrapper>
)

}
export default NavBar;

const NavBarWrapper= styled.nav`
  height: 30px;
  width: full;
  display: flex;
  text-align: center;
  background: grey;
 
`