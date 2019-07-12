import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./registration.css";
import "./login.css";
import LoginComponent from "./login";
import RegistrationComponent from "./registration";
//import stackOverflow from "./images/stack-overflow.png";
import Stack from "./stack";
import QuestionDetails from "./QuestionDetails";
import AskQuestion from "./AskQuestion";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="header">
            <Link to="/">
              <img
                className="center"
                src={require("./images/stack-overflow.png")}
                alt="stack_overflow_image"
              />
            </Link>
            <nav>
              <Link to="/AskQuestion">
                <input class="signup c49"  type="button" value="Ask Question"></input>
              </Link>
              <Link to="/login">
                <input class="login" type="button" value="Log In" />
              </Link>
              <Link to="/registration">
                <input class="signup" type="button" value="Sign Up" />
              </Link>
            </nav>
          </div>
          <Switch>
            <Route exact path="/" component={Stack} />
            <Route
              exact
              path="/registration"
              component={RegistrationComponent}
            />
            <Route exact path="/login" component={LoginComponent} />
            <Route exact path="/questions/:question_id" component={QuestionDetails} />
            <Route exact path="/AskQuestion" component={AskQuestion} />

          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
