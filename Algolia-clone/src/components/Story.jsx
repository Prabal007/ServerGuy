import React from "react";

const Story = ({ story }) => {
  return (
    <div className="story">
      <a href={story.url} target="_blank" rel="noopener noreferrer">
        <h3>{story.title}</h3>
      </a>
      <p>By {story.author}</p>
      <p>
        {story.points} points | {story.num_comments} comments
      </p>
    </div>
  );
};

export default Story;
