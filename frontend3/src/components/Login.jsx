import React from "react";
import "./Login.css"
//import PropTypes from "prop-types";

const login = () => {
  return (
    <div className='form'>
      <h1 className="title">Login</h1>
      <hr />
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="subtitle">
            Username
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="subtitle">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
        </div>
        <button type="submit" className="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

//login.propTypes = {};

export default login;
