import React, { useState } from 'react';
import Tweet from "./Tweet";
import dummyTweets from '../api/dummyTweets';


const Tweets = () => {
const [username, setUsername] = useState('');
const [msg, setMsg] = useState('');
const [tweets, setTweets] = useState(dummyTweets);
const [filteredTweets, setFilteredTweets] = useState(dummyTweets);
const [isFiltered, setIsFiltered] = useState(false);
const [currentUsername, setCurrentUsername] = useState('default');

const handleButtonClick = (event) => {
    const tweet = {

    username: username,
    title: 'new Tweet',
    content: msg,
    createdAt: new Date().toLocaleDateString('ko-KR'),
    updatedAt: new Date().toLocaleDateString('ko-KR'),
    };
    const newTweets = [tweet, ...tweets];
    setTweets(newTweets);
  };

  const handleChangeUser = (event) => {
    setUsername(event.target.value)
  }

  const handleChangeMsg = (event) => {
    setMsg(event.target.value)
  }

  const handleFilterTweet = (event) => {
    if (event.target.value === 'default') {
      setTweets(tweets);
      setIsFiltered(false);
    } else {
      const filtered = tweets.filter(
        (tweet) => tweet.username === event.target.value
      );
      setIsFiltered(true);
      setFilteredTweets(filtered);
    }
    setCurrentUsername(event.target.value);
  };

  const handleDeleteTweet = (username, deleteIndex) => {
    if (isFiltered) {
      alert('필터 시 삭제 불가합니다.')
      return;
    }
    const restTweets = tweets.filter((tweet, idx) => idx !== deleteIndex);
    setTweets(restTweets);
  };

  const handleAllTweetButton = (event) => {
    setIsFiltered(false);
    // setTweets(tweets);
    setCurrentUsername('default');
  };

  const tweetsRenderer = (tweet, idx) => {
    return (
      <Tweet
        key={tweet.id}
        tweet={tweet}
        handleDeleteTweet={handleDeleteTweet}
        idx={idx}
      />
    );
  }

  return (
    <React.Fragment>
      <div className="tweetForm__container">
        <div className="tweetForm__wrapper">
          <div className="tweetForm__profile">
            <img src="https://randomuser.me/api/portraits/men/98.jpg" />
          </div>
          <div className="tweetForm__inputContainer">
            <div className="tweetForm__inputWrapper">
              <div className="tweetForm__input">
                <input
                  type="text"
                  value={username}
                  onChange={handleChangeUser}
                  placeholder="your username here.."
                  className="tweetForm__input--username"
                ></input>
                <textarea
                  value={msg}
                  onChange={handleChangeMsg}
                  placeholder="your tweet here.."
                  className="tweetForm__input--message"
                ></textarea>
              </div>
              <div className="tweetForm__count" role="status">
                <span className="tweetForm__count__text">
                  {'total: ' + tweets.length}
                </span>
              </div>
            </div>
            <div className="tweetForm__submit">
              <div className="tweetForm__submitIcon"></div>
              {/* TODO : 작성한 트윗을 전송할 수 있는 button 엘리먼트를 작성하세요. */}
              <button className="tweetForm__submitButton" onClick={handleButtonClick}>
                Tweet
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="tweet__selectUser">
        <select value={currentUsername} onChange={handleFilterTweet}>
          <option value="default">
            -- click to filter tweets by username --
          </option>

          {tweets.reduce((acc, cur) => {
            const isNotUnique = acc.reduce((a, c) => {
              if (c.username === cur.username) {
                return true
              }
              return a === true ? true : false
            }, false)

            return isNotUnique ? acc : [...acc, cur]
            }, []).map((tweet) => {
            return (
              <option key={tweet.id} value={tweet.username}>
                {tweet.username}
              </option>
            );
          })}
        </select>
        {currentUsername !== 'default' ? (
          <button onClick={handleAllTweetButton}>
            <i className="far fa-caret-square-left"></i>
          </button>
        ) : (
          <div></div>
        )}
      </div>
      <ul className="tweets">
        {isFiltered ? filteredTweets.map(tweetsRenderer) : tweets.map(tweetsRenderer)}</ul>
    </React.Fragment>
  );
};

export default Tweets;
