import React, { useState } from "react";
import { Link, useParams } from 'react-router-dom'

function ArticlePage() {
    const [article, setArticle] = useState();
    const params = useParams();
    // TODO: 서버에서 게시글 조회하는 api 호출 (post id값 이용)

    //  api/boardApi에서 함수 만들고,
    //  useEffect 안에서 호출함.

    // article에 담음

    return (
        <div>
            id:{params.id}
            {/* <div>{article.tiele}</div> */}
        </div>
    )
}

export default ArticlePage