import { useState } from "react";

const Form = () => {
  const [username, setUsername] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    // e.preventDefault();
    console.log(e.target);

    alert(`username: ${username} email:${email}, password:${password} `);

    setUsername("");
    setEmail("");
    setPassword("");
  };

  const handleUsername = (e) => {
    console.log(e.target.value);
    setUsername(e.target.value);
  };

  const handleEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };
  return (
    <div className="bg-info container mt-4 p-4">
      <form onSubmit={handleSubmit}>
        <h1 className="text-danger p-3 m-5 mt-1">FORM</h1>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username:<span className="text-danger">{username}</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={handleUsername}
          />
        </div>
        <div className="mb-3 ">
          <label htmlFor="email" className="form-label">
            Email address:<span className="text-danger">{email}</span>
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={handleEmail}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:<span className="text-danger">{password}</span>
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={handlePassword}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
