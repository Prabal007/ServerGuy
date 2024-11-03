import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ setUsername }) => {
  const [inputUser, setInputUser] = useState("");
  const [inputPass, setInputPass] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (inputUser && inputPass) {
      setUsername(inputUser);
      navigate("/");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={inputUser}
        onChange={(e) => setInputUser(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={inputPass}
        onChange={(e) => setInputPass(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
