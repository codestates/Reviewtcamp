import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom'
import {fetchBoardById} from "../api/BoardApi"

function ArticlePage() {
    const [article, setArticle] = useState();
    const params = useParams();
    // TODO: 서버에서 게시글 조회하는 api 호출 (post id값 이용)
    useEffect(() => {
        _fetchBoardById()
    }, [params.id])
    //  api/boardApi에서 함수 만들고,
    //  useEffect 안에서 호출함.

const _fetchBoardById = async() =>{
    const response = await fetchBoardById(params.id)
    // article에 담음
    setArticle(response)
}
    return (
        <div>
            id:{params.id}
            {/* <div>{article.tiele}</div> */}
        </div>
    )
}

export default ArticlePage