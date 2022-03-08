import React from 'react';
import './Tweet.css';
const Tweet = ({ tweet, handleDeleteTweet, idx }) => {
  const parsedDate = new Date(tweet.createdAt).toLocaleDateString('ko-kr');

  return (
    <li className="tweet" id={tweet.id}>
    
      <div className="tweet__content">
        <div className="tweet__userInfo">
          <div className="tweet__userInfo--wrapper">
            <span className="tweet__username">{tweet.username}</span>
            <span className="tweet__createdAt">{parsedDate}</span>
          </div>
          <div className="tweet__userInfo--buttonWrapper">
            <button
              className="tweet__deleteButton"
              onClick={() => handleDeleteTweet(tweet.username, idx)}
            >
              <i className="far fa-trash-alt"></i>
            </button>
          </div>
        </div>
        <div className="tweet__message">{tweet.content}</div>
      </div>
    </li>
  );
};

export default Tweet