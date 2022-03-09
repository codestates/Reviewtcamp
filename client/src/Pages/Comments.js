import React, { useState } from "react";
import Comment from "./Comment";
import dummycomments from "../api/dummycomments";

// 머해야 대지?
// 글을 쓰면 상태 업데이트 (-> state에 추가하는 방식으로 해야겠네 임시로)

// 아저씨 사진너무 붎쾌한데 ㅋㅋㅋ
// 사진 위치가 댓글 위치인가?
// 제일 아래쪽에 뜨게할꺼야? 댓글들?

const Comments = () => {
  const [username, setUsername] = useState("");
  const [msg, setMsg] = useState("");
  // 메시지라 유저네임이랑 작성하는 데 비어 있는 곳이 있어
  // 잠깐만여~~ 아래로 내려와바~
  const [comments, setcomments] = useState(dummycomments); //
  const [filteredComments, setFilteredComments] = useState(dummycomments);
  const [isFiltered, setIsFiltered] = useState(false);
  const [currentUsername, setCurrentUsername] = useState("default");

  //버튼을 누르면 이벤트가 발생하는데 거기에 들어갈 내용
  const handleButtonClick = (event) => {
    const comment = {
      //코멘트 안에는 해당 내용들이 들억고
      username: username,
      title: "new comment",
      content: msg,
      createdAt: new Date().toLocaleDateString("ko-KR"),
      updatedAt: new Date().toLocaleDateString("ko-KR"),
    };

    //newcomments는 더미 텍스트에 있는 코멘츠를 복사한 값을
    const newcomments = [comment, ...comments];
    setcomments(newcomments);
    //그러면 셋모멘트는 ([comment, ...comments]) 이게 된다는 말인데
    //=>이 말은 다시 각각의 안에 있는 내용을 다 받아준다.
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

  
  // 주석 지워도 되지?
  return (
    <React.Fragment>
      <div className="commentForm__container">
        <div className="commentForm__wrapper">
          <div>
            
            
            {comments.map((comment) => (
              <div>
                <div className="commentForm__profile">
                  <img src={comment.picture} width="50" alt="사진" />
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
