import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { Joke } from './Joke/joke';
import { jokes } from './jokes';

const App = () => {
  return (
    <div className="container">
      {jokes.map(({ id, avatar, name, text, likes, dislikes }) => (
        <Joke
          key={id}
          userAvatar={avatar}
          userName={name}
          text={text}
          likes={likes}
          dislikes={dislikes}
        />
      ))}
    </div>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
