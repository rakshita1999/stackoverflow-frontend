import React  , { Component } from "react";
import "./registration.css";
function RegistrationComponent() {
  return (
    <div>
      <div className="container_register">
        <br />
        <br />
        <h1>Registration</h1>
        <form action="https://project.qstackoverflow.tk/users" method="post">
          <div className="form-group">
            <label for="Name">Display Name</label>
            <input type="name" className="form-control" id="username1" />
          </div>
          <div className="form-group">
            <label for="Email1">Email</label>
            <input type="email" className="form-control" id="email1" />
          </div>
          <div className="form-group">
            <label for="Password">Password</label>
            <input type="password" className="form-control" id="password1" />
          </div>
          <div className="checkbox">
            <input type="checkbox" id="checkbox1" value="check" />
            <label id="checkbox2">
              Opt-in to receive occassional Stack Overflow news, product
              updates, and invitations to participate in user research. If you
              opt out, you will still receive notifications and emails triggered
              by your account activity.<a href=""> Learn</a>
            </label>
          </div>
          <button type="submit" className="btn btn-info" id="signup1">
            Sign Up
          </button>
          <br />
          <br />
          <label>
            By clicking "Sign up" , you agree to our terms of{" "}
            <a href="">service</a> , <a href="">privacy policy</a> and{" "}
            <a href="">cookie policy</a>
          </label>
        </form>
      </div>
    </div>
  );
}

export default RegistrationComponent;
