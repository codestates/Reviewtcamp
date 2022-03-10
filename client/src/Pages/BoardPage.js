import React, { useEffect, useState } from "react";
import BoardList from "./BoardList";
import { Link, useParams } from 'react-router-dom'
import { fetchBoardById } from "../api/BoardApi";
import "./BoardPage.css";


function BoardPage() {
    const params = useParams();
    const [board, setBoard] = useState();
    const [post, setPost] = useState();
    const [like, setLike] = useState(0);

    useEffect(() => {
        // useEffect 역할 : 생성될 때 1번만 호출,초기화 함수, 데이터, 서버 API 호출 
        _fetchBoardById();
    }, [params.id])

    const _fetchBoardById = async () => {
        // 서버에서 게시판 글들을 불러와서
        const response = await fetchBoardById(params.id);
        // board state에 담아준다.
        setBoard(response);
        

    }

    const MenuItem2= ({ active, children, to }) => (
        <div className="menu-item2">{children}</div>
    );


    return (
    <div>
        <h1>{board ? board.title : "어떤 게시판이 나올까요?"} 게시판 </h1>
        <div>
                <Link to="/board/1"><MenuItem2>코드스테이츠</MenuItem2></Link>
                <Link to="/board/2"><MenuItem2>위코드</MenuItem2></Link>
                <Link to="/board/3"><MenuItem2>멋쟁이사자</MenuItem2></Link>
                <Link to="/board/4"><MenuItem2>항해99</MenuItem2></Link>
                <Link to="/board/5"><MenuItem2>네이버</MenuItem2></Link>
                <Link to="/board/6"><MenuItem2>기타</MenuItem2></Link>
        </div> 
        <div style={{ display: "flex", gap: "100px", textAlign: "center", paddingLeft:"30px" }}>
        <div>제목</div>
        <div>유저이름</div>
        <div>날짜</div>
       
    </div>
    {board ? board.post.map(post =>
        <Link key={post.id} to={`/article/${post.id}/`}>
            <div style={{ backgrounColor: "grey", display: "flex", gap: "30px", textAlign: "center", paddingLeft:"20px"  }}>
                <div>{post.title}</div>
                <div>{post.userName}</div>
                <div>{post.createdAt}</div>
                 <div><span onClick={()=>{setLike(like+1)}}>👍</span>{like}</div>
            </div></Link>)
        :
        "불러오는 중... "}
            
            <div>
                <Link to="/register">
                <button className="button" style={{backgroundColor: "#94D3D7", height: "3.5rem", board:"none"}}> New post</button>
                </Link>
            </div>
            <div>
                <BoardList />
            </div>
        </div>)
}

export default BoardPage;