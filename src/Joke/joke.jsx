import React from 'react';
import './joke.css';
import { useState } from 'react';

export const Joke = ({ userAvatar, userName, text, likes, dislikes }) => {
  const [thumbsUpNumber, setThumbsUpNumber] = useState(likes);
  const [thumbsDownNumber, setThumbsDownNumber] = useState(dislikes);

  return (
    <div className="container">
      <div className="joke">
        <div className="joke__body">
          <div className="joke__user">
            <img className="user-avatar" src={userAvatar} />
            <p className="user-name">{userName}</p>
          </div>

          <p className="joke__text">{text}</p>
        </div>
        <div className="joke__likes">
          <button
            id="btn-up"
            className="btn-like btn-like--up"
            onClick={() => setThumbsUpNumber(thumbsUpNumber + 1)}
          ></button>
          <span id="likes-up" className="likes-count likes-count--up">
            {thumbsUpNumber}
          </span>
          <button
            id="btn-down"
            className="btn-like btn-like--down"
            onClick={() => setThumbsDownNumber(thumbsDownNumber + 1)}
          ></button>
          <span id="likes-down" className="likes-count likes-count--down">
            {thumbsDownNumber}
          </span>
        </div>
      </div>
    </div>
  );
};
