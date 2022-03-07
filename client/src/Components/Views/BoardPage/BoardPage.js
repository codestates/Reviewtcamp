import React from "react";
import BoardList from "./Sections/BoardList";
import {Link} from 'react-router-dom'
function BoardPage() {
    return (
    <div>
    <div>
    <h1> Board title</h1>
</div>
<div>
<Link to ="/register">
<button> New post</button>
</Link>
</div>
<div>    
    <BoardList />
    </div>
    </div>)
}

export default BoardPage;