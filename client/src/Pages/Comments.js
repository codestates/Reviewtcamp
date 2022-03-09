import React, { useState } from "react";
import Comment from "./Comment";
import dummycomments from "../api/dummycomments";



const Comments = () => {
  const [username, setUsername] = useState("");
  const [msg, setMsg] = useState("");

  const [comments, setcomments] = useState(dummycomments); //
  const [filteredComments, setFilteredComments] = useState(dummycomments);
  const [isFiltered, setIsFiltered] = useState(false);
  const [currentUsername, setCurrentUsername] = useState("default");


  const handleButtonClick = (event) => {
    const comment = {
  
      username: username,
      title: "new comment",
      content: msg,
      createdAt: new Date().toLocaleDateString("ko-KR"),
      updatedAt: new Date().toLocaleDateString("ko-KR"),
    };

    const newcomments = [comment, ...comments];
    setcomments(newcomments);
  
  };

  const handleChangeUser = (event) => {
    setUsername(event.target.value);
  };

  const handleChangeMsg = (event) => {
    setMsg(event.target.value);
  };

  const handleFiltercomment = (event) => {
    if (event.target.value === "default") {
      setcomments(comments);
      setIsFiltered(false);
    } else {
      const filtered = comments.filter(
        (comment) => comment.username === event.target.value
      );
      setIsFiltered(true);
      setFilteredComments(filtered);
    }
    setCurrentUsername(event.target.value);
  };

  const handleDeletecomment = (username, deleteIndex) => {
    if (isFiltered) {
      alert("필터 시 삭제 불가합니다.");
      return;
    }
    const restcomments = comments.filter((comment, idx) => idx !== deleteIndex);
    setcomments(restcomments);
  };

  const handleAllcommentButton = (event) => {
    setIsFiltered(false);
    // setcomments(comments);
    setCurrentUsername("default");
  };

  const commentsRenderer = (comment, idx) => {
    return (
      <Comment
        key={comment.id}
        comment={comment}
        handleDeletecomment={handleDeletecomment}
        idx={idx}
      />
    );
  };

  
  return (
    <React.Fragment>
      <div className="commentForm__container">
        <div className="commentForm__wrapper">
          <div>
            {comments.map((comment) => (
              <div>
                <div className="commentForm__profile">
              
                  <div>{comment.username}</div>
                </div>
                <div className="commentForm__content">{comment.content}</div>
              </div>
            ))}
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
                  {"total: " + comments.length}
                </span>
              </div>
            </div>
            <div className="commentForm__submit">
              <div className="commentForm__submitIcon"></div>
              {/* TODO : 작성한 트윗을 전송할 수 있는 button 엘리먼트를 작성하세요. */}
              <button
                className="commentForm__submitButton"
                onClick={handleButtonClick}
              >
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

          {comments
            .reduce((acc, cur) => {
              const isNotUnique = acc.reduce((a, c) => {
                if (c.username === cur.username) {
                  return true;
                }
                return a === true ? true : false;
              }, false);

              return isNotUnique ? acc : [...acc, cur];
            }, [])
            .map((comment) => {
              return (
                <option key={comment.id} value={comment.username}>
                  {comment.username}
                </option>
              );
            })}
        </select>
        {currentUsername !== "default" ? (
          <button onClick={handleAllcommentButton}>
            <i className="far fa-caret-square-left"></i>
          </button>
        ) : (
          <div></div>
        )}
      </div>
     
    </React.Fragment>
  );
};

export default Comments;
