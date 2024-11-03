import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import Filters from "./Filters";
import StoryList from "./StoryList";

const Dashboard = ({ username }) => {
  const [query, setQuery] = useState("");
  const [stories, setStories] = useState([]);
  const [page, setPage] = useState(0);
  const [totalResults, setTotalResults] = useState(0);
  const [filter, setFilter] = useState("story");

  useEffect(() => {
    fetchStories();
  }, [query, page, filter]);

  const fetchStories = async () => {
    try {
      const response = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${query}&tags=${filter}&page=${page}`
      );
      setStories(response.data.hits);
      setTotalResults(response.data.nbHits);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="dashboard">
      <div className="header">
        <h1>{username || "Search Hacker News"}</h1>
      </div>
      <SearchBar setQuery={setQuery} />
      <Filters setFilter={setFilter} />
      <p>Total Results: {totalResults}</p>
      <StoryList stories={stories} />
      <div className="pagination">
        <button onClick={() => setPage((prev) => Math.max(prev - 1, 0))}>
          Previous
        </button>
        <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
      </div>
    </div>
  );
};

export default Dashboard;
