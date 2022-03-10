import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom'
import {fetchPost} from "../api/BoardApi"
import Comments from "./Comments"
import './ArticlePage.css'


// 아티클 페이지에서 필요한건 둘중에 뭘까? 어떤 API
// 우리 사이트 localhost:3000/board/1 <- 이 URI를 말하는거야 


function ArticlePage() {
    const [article, setArticle] = useState();
    const params = useParams(); 
    const [title, setTitle] =useState()
    //그럼 Params와 postParams의 내용은 같을까 다를까? 
    // 똑같은 함수를 실행했는데? return값이 다를까?
    // pararms.id로 값을 받아올 수 있는 이유는 Url에 /article/1이렇게 넘어와서 였잖아.
    // 근데 url은 똑같은데 받아오는 값이 달라질 수 있을까? 
    // 요는 url이 바뀌어야 해 App.js를 고쳐봐 
    

    // 얘는 뭘하는 함수였을까여?
    // 이해한데까지 말해줘 ㅋㅋ 키워드라던지 아무거나 던져봐 
    // 주요 키워드를 다시 찾아보게나 
    
    // TODO: 서버에서 게시글 조회하는 api 호출 (post id값 이용)
    useEffect(() => {
        _fetchPost()
    }, [params.boardId, params.postId, params.title, params.userId, params.body])

    //  api/boardApi에서 함수 만들고,
    //  useEffect 안에서 호출함.

const _fetchPost= async() =>{
    
    // 그리고 헷갈리니까, boardId도 boardId라고 해주는게 좋아. 
    
    // 댓글해야하는ㄷ데 코쿜쿜 ㅋ쿜ㅋ 
    // 가족들 다멀쩌한데 ㅏ만 걸린거보니 의심스러 
    // 댓글 개볼께유~

    const response = await fetchPost(params.boardId, params.postId, params.title, params.userId, params.body)
    // article에 담음
    setArticle(response)
}

const MenuItem2= ({ active, children, to }) => (
    <div className="menu-item2">{children}</div>
);

    return (
        <div>

        <div>
        <Link to="/board/1"><MenuItem2>코드스테이츠</MenuItem2></Link>
        <Link to="/board/2"><MenuItem2>위코드</MenuItem2></Link>
        <Link to="/board/3"><MenuItem2>멋쟁이사자</MenuItem2></Link>
        <Link to="/board/4"><MenuItem2>항해99</MenuItem2></Link>
        <Link to="/board/5"><MenuItem2>네이버</MenuItem2></Link>
        <Link to="/board/6"><MenuItem2>기타</MenuItem2></Link>
    </div>
            <h2>게시판:{params.boardId}</h2>
            <h2>게시글:{params.postId}</h2>
            <p>게시글 본문:{title}</p>
        
            {/* <div>{article.tiele}</div> */}

            <Comments />
        </div>

    )
}

export default ArticlePage