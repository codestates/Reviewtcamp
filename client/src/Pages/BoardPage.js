import React, { useEffect, useState } from "react";
import BoardList from "./BoardList";
import { Link, useParams } from 'react-router-dom'
import { fetchBoardById } from "../api/BoardApi";

function BoardPage() {
    const params = useParams();
    const [board, setBoard] = useState();
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
    return (
        <div>
            <div>
                <h1>{board ? board.title : "어떤 게시판이 나올까요?"} 게시판 </h1>
    
                <Link to="/board/1"><button>코드스테이츠</button></Link>
                <Link to="/board/2"><button>위코드</button></Link>
                <Link to="/board/3"><button>멋쟁이사자</button></Link>
                <Link to="/board/4"><button>항해99</button></Link>
                <Link to="/board/5"><button>네이버</button></Link>
                <Link to="/board/6"><button>기타</button></Link>
                <div>
                    <div style={{ display: "flex", gap: "8px", textAlign: "center" }}>
                        <div>제목</div>
                        <div>유저이름</div>
                        <div>날짜</div>
                        <div><span onClick={()=>{setLike(like+1)}}>👍</span>{like}</div>
                    </div>
                    {board ? board.post.map(post =>
                        <Link key={post.id} to={`/article/${post.id}`}>
                            <div style={{ backgrounColor: "grey", display: "flex", gap: "8px", textAlign: "center" }}>
                                <div>{post.title}</div>
                                <div>{post.userName}</div>
                                <div>{post.createdAt}</div>
                            </div></Link>)
                        :
                        "불러오는 중... "}
                </div>
            </div>
            <div>
                <Link to="/register">
                    <button> New post</button>
                </Link>
            </div>
            <div>
                <BoardList />
            </div>
        </div>)
}

export default BoardPage;