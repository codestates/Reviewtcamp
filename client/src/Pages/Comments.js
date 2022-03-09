import React, { useState } from 'react';
import Comment from "./Comment";
import dummycomments from '../api/dummycomments';


// Let's go~~ 
// 설명? 다시 해죠~ 뭐 해야 되지? 
// TODO: 코멘트 달기 
// 글써서 수정/삭제 
//  백엔드 만들어졌어? 근데 어케해? 못하는뎅
// 프론트에서 있는걸 보여주는 거야 어케 있는 척 한다고 해도 
// 삭제 되는 척 같은건 의미가 없는데 
// CRUD 중에 R은 했오? 

// 백엔드 없을 때에는, 보통 R을 먼저 완성도 있게 하는걸 목표로 하는게 좋아 
// CUD가 의미가 없어... 
// 쨋든 그타 치고, 이거 근데 이케 하니께 내가 구동을 해볼 수가 없는거 같다 ㅋㅋ 
//너의 PC라서 
// 민주가 화면공유를 하는게 낫겠어 localhost:3000까지 보이게 


const Comments = () => {
const [username, setUsername] = useState('');
const [msg, setMsg] = useState('');
const [comments, setcomments] = useState(dummycomments);
const [filteredcomments, setFilteredcomments] = useState(dummycomments);
const [isFiltered, setIsFiltered] = useState(false);
const [currentUsername, setCurrentUsername] = useState('default');

const handleButtonClick = (event) => {
    const comment = {

    username: username,
    title: 'new comment',
    content: msg,
    createdAt: new Date().toLocaleDateString('ko-KR'),
    updatedAt: new Date().toLocaleDateString('ko-KR'),
    };
    const newcomments = [comment, ...comments];
    setcomments(newcomments);
  };

  const handleChangeUser = (event) => {
    setUsername(event.target.value)
  }

  const handleChangeMsg = (event) => {
    setMsg(event.target.value)
  }

  const handleFiltercomment = (event) => {
    if (event.target.value === 'default') {
      setcomments(comments);
      setIsFiltered(false);
    } else {
      const filtered = comments.filter(
        (comment) => comment.username === event.target.value
      );
      setIsFiltered(true);
      setFilteredcomments(filtered);
    }
    setCurrentUsername(event.target.value);
  };

  const handleDeletecomment = (username, deleteIndex) => {
    if (isFiltered) {
      alert('필터 시 삭제 불가합니다.')
      return;
    }
    const restcomments = comments.filter((comment, idx) => idx !== deleteIndex);
    setcomments(restcomments);
  };

  const handleAllcommentButton = (event) => {
    setIsFiltered(false);
    // setcomments(comments);
    setCurrentUsername('default');
  };

  const commentsRenderer = (comment, idx) => {
    return (
      <comment
        key={comment.id}
        comment={comment}
        handleDeletecomment={handleDeletecomment}
        idx={idx}
      />
    );
  }

  return (
    <React.Fragment>
      <div className="commentForm__container">
        <div className="commentForm__wrapper">
          <div className="commentForm__profile">
            <img src="https://randomuser.me/api/portraits/men/98.jpg" />
          </div>
          <div className="commentForm__inputContainer">
            <div className="commentForm__inputWrapper">
              <div className="commentForm__input">
                <input
                  type="text"
                  value={username}
                  onChange={handleChangeUser}
                  placeholder="your username here.."
                  className="commentForm__input--username"
                ></input>
                <textarea
                  value={msg}
                  onChange={handleChangeMsg}
                  placeholder="your comment here.."
                  className="commentForm__input--message"
                ></textarea>
              </div>
              <div className="commentForm__count" role="status">
                <span className="commentForm__count__text">
                  {'total: ' + comments.length}
                </span>
              </div>
            </div>
            <div className="commentForm__submit">
              <div className="commentForm__submitIcon"></div>
              {/* TODO : 작성한 트윗을 전송할 수 있는 button 엘리먼트를 작성하세요. */}
              <button className="commentForm__submitButton" onClick={handleButtonClick}>
                comment
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="comment__selectUser">
        <select value={currentUsername} onChange={handleFiltercomment}>
          <option value="default">
            -- click to filter comments by username --
          </option>

          {comments.reduce((acc, cur) => {
            const isNotUnique = acc.reduce((a, c) => {
              if (c.username === cur.username) {
                return true
              }
              return a === true ? true : false
            }, false)

            return isNotUnique ? acc : [...acc, cur]
            }, []).map((comment) => {
            return (
              <option key={comment.id} value={comment.username}>
                {comment.username}
              </option>
            );
          })}
        </select>
        {currentUsername !== 'default' ? (
          <button onClick={handleAllcommentButton}>
            <i className="far fa-caret-square-left"></i>
          </button>
        ) : (
          <div></div>
        )}
      </div>
      <ul className="comments">
        {isFiltered ? filteredcomments.map(commentsRenderer) : comments.map(commentsRenderer)}</ul>
    </React.Fragment>
  );
};

export default Comments;
