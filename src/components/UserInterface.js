import React, { useState } from "react";
import axios from "axios";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let userData = {
      email,
      password,
    };
    axios
      .post("http://localhost:3001/login", { userData })
      .then(console.log("Data is Stored "))
      .catch((err) => console.log("Data is Correct"));
  };
  return (
    <div className="container">
      <form className="px-4 py-3" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleDropdownFormEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleDropdownFormEmail1"
            placeholder="email@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleDropdownFormPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleDropdownFormPassword1"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary center">
          login
        </button>
      </form>
    </div>
  );
};
