import React from 'react';

const Card = ({ story }) => {
  return (
    <div className="story-card">
        <a href={story.url} target="_blank" rel="noopener noreferrer">
            <img src={story.multimedia[0].url} alt={story.title} />
            <h3>{story.title}</h3>
        </a>
    </div>
  );
};

export default Card;