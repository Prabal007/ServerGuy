import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";

import "./App.css";
function App() {
  const [username, setUsername] = useState("");

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            username ? (
              <Dashboard username={username} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/login"
          element={<LoginPage setUsername={setUsername} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
