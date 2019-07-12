import React, { Component } from "react";
import "./style3.css";

class AskQuestion extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    axios
      .post(`https://project.qstackoverflow.tk/questions`, {
        question: event.target.question.value,
        description: event.target.description.value
      })
      .then(res => {
        if (res.status === 201) {
          this.props.history.push("/");
        }
      });
  }

  render() {
    return (
      <div class="ask">
        <form onSubmit={this.handleSubmit}>
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
