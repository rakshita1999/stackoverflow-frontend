import React, { Component } from "react";
import "./style3.css";

class AskQuestion extends Component {
  constructor() {
    super();
    this.state = { text: "" }; // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ text: value });
  }

  render() {
    return (
      <div class="ask">
        <form action="https://project.qstackoverflow.tk/questions" method="post">
          <b> Title</b>
          <br />
          <br />
          <input
            type="text"
            name="question"
            style={{ padding: "10px" }}
            placeholder="Whats your programming question ? Be specific"
          />
          <br />
          <br />
          <br />
          <b>Description</b>
          <br />
          <br />
          <input
            type="text"
            name="description"
            style={{ padding: "10px" }}
            placeholder="Write your answer here ..."
          />
          <br />
          <br />
          <div class="c">
            <button class="post_question">Post Your Question</button>
          </div>
        </form>
        <hr />
      </div>
    );
  }
}

export default AskQuestion;
