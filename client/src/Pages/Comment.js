import React from 'react';
import './Comment.css';
const Comment = ({ comment, handleDeletecomment, idx }) => {
  const parsedDate = new Date(comment.createdAt).toLocaleDateString('ko-kr');


  return (
    <li className="comment" id={comment.id}>
    
      <div className="comment__content">
        <div className="comment__userInfo">
          <div className="comment__userInfo--wrapper">
            <span className="comment__username">{comment.username}</span>
            <span className="comment__createdAt">{parsedDate}</span>
          </div>
          <div className="comment__userInfo--buttonWrapper">
            <button
              className="comment__deleteButton"
              onClick={() => handleDeletecomment(comment.username, idx)}
            >
              <i className="far fa-trash-alt"></i>
            </button>
          </div>
        </div>
        <div className="comment__message">{comment.content}</div>
      </div>
    </li>
  );
};

export default Comment;