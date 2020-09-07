import React, { useState } from "react";
import axios from "axios";

export const Register = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let newUser = {
      Name,
      Email,
      Password,
      Phone,
    };
    axios
      .post("http://localhost:3001/register", newUser)
      .then(console.log("Data is Stored Successfuly!"))
      .then(window.location.reload())
      .catch((err) => console.log(err));
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
          <label htmlFor="exampleDropdownFormUsername">Username</label>
          <input
            type="text"
            className="form-control"
            id="exampleDropdownFormUsername"
            placeholder="Username"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleDropdownFormPhone">Phone Number</label>
          <input
            type="text"
            className="form-control"
            id="exampleDropdownFormPhone"
            placeholder="Phone Number"
            onChange={(e) => setPhone(e.target.value)}
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
        <button type="submit" className="btn btn-primary">
          Sign in
        </button>
      </form>
    </div>
  );
};
