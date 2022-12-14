import { useState } from "react";

const FormObject = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    alert(`username:${username} email:${email} password:${password}`);
    setFormValues({
      username: "",
      email: "",
      password: "",
    });
  };

  const handleForm = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };
  return (
    <div className="bg-info container mt-4 p-4">
      <form onSubmit={handleSubmit}>
        <h1 className="text-danger p-3 m-5 mt-1">FORM</h1>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username:<span>{username}</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            onChange={handleForm}
            value={username}
          />
        </div>
        <div className="mb-3 ">
          <label htmlFor="email" className="form-label">
            Email address:<span>{email}</span>
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            onChange={handleForm}
            value={email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:<span>{password}</span>
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={handleForm}
            value={password}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormObject;
