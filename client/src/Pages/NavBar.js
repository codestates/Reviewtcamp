import React, { useState } from "react";

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

    // 렌더
    return (
        <div>
            <button>로고 들어가는 자리</button>
            <button>마이페이지</button>
            {user ?
                <div>
                    <button onClick={logout}>로그아웃 {user.email}</button>
                </div>
                :
                <div>
                    <button onClick={login}>로그인 </button>
                </div>}
        </div>
    )
}

export default NavBar