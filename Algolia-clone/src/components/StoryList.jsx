import React from "react";
import Story from "./Story";

const StoryList = ({ stories }) => {
  return (
    <div className="story-list">
      {stories.map((story) => (
        <Story key={story.objectID} story={story} />
      ))}
    </div>
  );
};

export default StoryList;
