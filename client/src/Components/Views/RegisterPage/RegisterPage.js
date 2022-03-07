import React, {useState, useEffect} from 'react';
import './RegisterPage.css';
import  {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Axios from 'axios'


function RegisterPage() {
    const[bodyContent, setbodyContent] = useState({
        title:'',
        content:''
    })
    const [viewContent, setViewContent] = useState([])
    useEffect(() => {Axios.get('http://localhost:8080/api/get').then((response)=>{
      setViewContent(response.data)
    })},[viewContent])
    const getValue = e => {
        const {name, value} = e.target;
        setbodyContent({
            ...bodyContent,
            [name]: value
        })
        console.log(bodyContent)
    }

    const submitReview = ()=>{
      // api 포스트 자리에 들어가야 함 http://localhost:8080/api/post
        Axios.post('api/post', {
          title: bodyContent.title,
          content: bodyContent.title
        }).then(()=>{
          alert('등록 완료!');
        })
      };
  return (
    <div className="App">
    <h1>BootcampReview</h1>
    <div className='container'>
    {viewContent.map(element =>
        <div>
        <h2>{element.title}</h2>
        <div>
        {element.content}
        </div></div>)}
        </div>
    <div className='form-wrapper'>
        <input className="title-input" type='text' placeholder='제목' 
                onChange={getValue} name='title'/>
        <CKEditor
          editor={ClassicEditor}
          data="<p>부트캠프에 대한 의견을 자세히 쓰세요!!</p>"
          onReady={editor => {
            // You can store the "editor" and use when it is needed.
            console.log('Editor is ready to use!', editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
            setbodyContent({
                ...bodyContent, 
                content: data
            })
          }}
          onBlur={(event, editor) => {
            console.log('Blur.', editor);
          }}
          onFocus={(event, editor) => {
            console.log('Focus.', editor);
          }}
        />
      </div>
    <button className='submit-button'
    onClick={() => {
      setViewContent(viewContent.concat({...bodyContent}))
    }}>입력하기</button>
  




    <div>
  
    </div>
  
    </div>
  
  );
}
export default RegisterPage;