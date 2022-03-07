import React, {useState} from 'react';
import './RegisterPage.css';
import  {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Axios from 'axios'


function RegisterPage() {
    const[movieContent, setMovieContent] = useState({
        title:'',
        content:''
    })
    const [viewContent, setViewContent] =useState([])
    const getValue=e=> {
        const {name, value} = e.target;
        setMovieContent({
            ...movieContent,
            [name]: value
        })
        console.log(movieContent)
    }

    const submitReview = ()=>{
        Axios.post('http://localhost:8080/api/insert', {
          title: movieContent.title,
          content: movieContent.title
        }).then(()=>{
          alert('등록 완료!');
        })
      };
  return (
    <div className="App">
    <h1>Movie Review</h1>
    <div className='movie-container'>
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
          data="<p>Hello from CKEditor 5!</p>"
          onReady={editor => {
            // You can store the "editor" and use when it is needed.
            console.log('Editor is ready to use!', editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
            setMovieContent({
                ...movieContent, 
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
      <button className="submit-button"
      onClick={submitReview}>입력</button>
    </div>
  );
}
export default RegisterPage;