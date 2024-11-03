import React from "react";

const Filters = ({ setFilter }) => {
  return (
    <div className="filters">
      <label>
        <input
          type="radio"
          name="filter"
          value="story"
          onChange={() => setFilter("story")}
          defaultChecked
        />
        Stories
      </label>
      <label>
        <input
          type="radio"
          name="filter"
          value="comment"
          onChange={() => setFilter("comment")}
        />
        Comments
      </label>
      <label>
        <input
          type="radio"
          name="filter"
          value="poll"
          onChange={() => setFilter("poll")}
        />
        Polls
      </label>
    </div>
  );
};

export default Filters;
