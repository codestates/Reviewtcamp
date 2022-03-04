import React, {useState} from "react";
import RegisterOrEdit from "./Sections/RegisterOrEdit";
function RegisterPage() {
    const [TitleValue, setTitleValue] = useState("")
    const [ContentValue, setContentValue] = useState("")
    const article = { title: TitleValue, content: ContentValue };
    const [IsForUpdate, setIsForUpdate] = useState(false)
    
    const onTitleChange = (event) => {
        setTitleValue(event.currentTarget.value)
    }
    console.log(TitleValue);
    
    const onContentChange = (event) => {
        setContentValue(event.currentTarget.value)
    }
    console.log(ContentValue)

    const onSubmitArticle = (event) => {
        event.preventDefault();
        const article = {title: TitleValue, content: ContentValue}
        console.log(article);
    }

    return (
        <div>
        <RegisterOrEdit
        titleValue={TitleValue}
        contentValue = {ContentValue}
        handleTitleChange={onTitleChange}
        handleContentChange={onContentChange}
        handleSubmit={onSubmitArticle}
        updateRequest={IsForUpdate}
        />
        </div>
    )
}

export default RegisterPage;