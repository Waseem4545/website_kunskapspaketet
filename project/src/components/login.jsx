import React from "react";

const Login = (props) => {
  return (
    <div className="row login">
      <div className="col-md-6 login-form">
        <form action="">
          <input
            type="text"
            className="form-control"
            name="email"
            placeholder="E-post"
          />
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Lösenord"
          />
          <input
            type="submit"
            className="btn btn-success"
            name="values"
            placeholder="logga in"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
