import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { useState } from 'react';

const App = () => {
  const [thumbsUpNumber, setThumbsUpNumber] = useState(0);
  const [thumbsDownNumber, setThumbsDownNumber] = useState(0);

  return (
    <div className="container">
      <div className="joke">
        <div className="joke__body">
          <div className="joke__user">
            <img
              className="user-avatar"
              src="https://raw.githubusercontent.com/Czechitas-podklady-WEB/dadjokes/main/users/user01.png"
            />
            <p className="user-name">Neroxx</p>
          </div>

          <p className="joke__text">
            The secret service isn't allowed to yell "Get down!" anymore when
            the president is about to be attacked. Now they have to yell
            "Donald, duck!"
          </p>
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

createRoot(document.querySelector('#app')).render(<App />);
