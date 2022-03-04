import React from "react"

function RegisterOrEdit(props) {
    
    return (
        <div>
        <form onSubmit>
        <br />
        <lable> title:</lable>
        <input 
        onChange={props.handleTitleChange}
        value={props.titleValue}
        type="text"
        name="title" />
        <hr></hr>
        <div>
        <textarea
        onChange={props.handleContentChange}
        value={props.contentValue}
        name="contnet" />
        </div>
        <button onClick={props.handleSubmit}> {props.updateRequest? "수정": "등록"}</button>
        </form></div>
    )
}
export default RegisterOrEdit;