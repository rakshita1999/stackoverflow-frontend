import React, { Component } from "react";
import axios from "axios";
import "./registration.css";
class RegistrationComponent extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    axios
      .post(`https://project.qstackoverflow.tk/users`, {
        name: event.target.name.value,
        email: event.target.email.value,
        password: event.target.password.value
      })
      .then(res => {
        if (res.status === 201) {
          alert("You have successfully registered!");
          this.props.history.push("/");
        }
      })
      .catch(res => {
        alert("User with this Email already exists!");
      });
  }

  render() {
    return (
      <div>
        <div className="container_register">
          <br />
          <br />
          <h1>Registration</h1>
          <form onSubmit={this.handleSubmit}>
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
                opt out, you will still receive notifications and emails
                triggered by your account activity.<a href=""> Learn</a>
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
}

export default RegistrationComponent;
