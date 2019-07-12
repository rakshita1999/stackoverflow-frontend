import React, { Component } from "react";
import ReactQuill from "react-quill";
import { Link } from "react-router-dom";
import axios from "axios";
import "./QuestionDetails.css";
import { comment } from "postcss";

class QuestionDetails extends Component {
  constructor(props) {
    super();
    this.state = { text: "", questions: [], comments: [] }; // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this);
    const i = 0;
  }

  handleChange(value) {
    this.setState({ text: value });
  }

  componentDidMount() {
    this.fetch();
  }

  async fetch() {
    //console.log(this.props);
    await axios
      .get(
        `http://localhost:4000/questions/${this.props.match.params.question_id}`
      )
      .then(res => {
        this.state.questions.push(res.data);
        this.setState((this.state.questions = this.state.questions));
        axios
          .get(
            `http://localhost:4000/questions/${
              this.props.match.params.question_id
            }/comments`
          )
          .then(comment => {
            comment.data.map(item => {
              this.state.comments.push(item);
            });
            this.setState((this.state.comments = this.state.comments));
          });
      });
  }
  render() {
    return (
      <div>
        {this.state.questions.map(item => (
          <div class="top">
            <hr />

            <div class="container-fluid main ">
              <div class="c15">
                <div class="c16">
                  <h1>{item.question} </h1>{" "}
                </div>
              </div>
            </div>
            <div class=" c11">
              <div class="col-sm-2 scroll">
                <form
                  action={`http://localhost:4000/${item.id}/upvote`}
                  method="post"
                >
                  <button class="arrows">
                    <p>
                      <i class="up arrow" />
                    </p>
                  </button>
                </form>
                <div class="arr">
                  <p> {item.votes} </p>
                </div>
                <form
                  action={`http://localhost:4000/${item.id}/downvote`}
                  method="post"
                >
                  <button class="arrows">
                    <p>
                      <i class="down arrow" />
                    </p>
                  </button>
                </form>
              </div>
              <br />
              <div class="col-sm-6 c3">
                <div class="c14">
                  {item.question}
                  <br />
                  <br />
                  {item.description}
                </div>
                <br />
                <div class="c10">
                  <div class="c5">
                    <a href="index6.html">
                      <input
                        id="c5button"
                        type="submit"
                        value="share edit"
                        name="comment"
                      />
                    </a>
                  </div>
                  <div class="c12">
                    <form
                      action={`/questions/${item.id}/comments`}
                      method="post"
                    >
                      <input
                        type="text"
                        class="c13"
                        name="comment"
                        placeholder="add a comment"
                      />
                      <br />
                      {/* 
                      <div class="c7" style={{ backgroundColor: "#B0E0E6" }}>
                        <span style={{ fontSize: "10px" }}>
                          asked 2 mins ago
                        </span>
                        <div>
                          <div
                            class="c8"
                            style={{ backgroundColor: "#a728fc" }}
                          >
                            L
                          </div>
                          <div
                            class="c9"
                            style={{ backgroundColor: "#B0E0E6" }}
                          >
                            <font color="#4682b4">Leanda De Araujo</font>
                          </div>
                        </div>
                        <span>16 </span>
                        <span class="dot" />
                        <span>3</span>
                      </div> */}
                      <button type="submit">Add comment</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="cont">
              <h5 class="c6">
                Know someone who can answer ? Share a link to this{" "}
                <a href="#">question</a> via <a href="#">email</a> ,{" "}
                <a href="#">twitter</a> or <a href="#">facebook</a> .{" "}
              </h5>
              <h5 style={{ fontSize: "20px" }}>Your answer</h5> <br />
              <br />
            </div> */}
            {this.state.comments.map(data => (
              <div class="l">
                <div class="flex_arr">
                  <form
                    action={`http://localhost:4000/answer/${data.id}/upvote`}
                    method="post"
                  >
                    <button class="arrows1">
                      <p>
                        <i class="up arrow1" />
                      </p>
                    </button>
                  </form>
                  <div class="arr">
                    <p> {data.votes} </p>
                  </div>
                  <form action={`/answer/${data.id}/downvote`} method="post">
                    <button class="arrows1">
                      <p>
                        <i class="down arrow1" />
                      </p>
                    </button>
                  </form>
                </div>
                <div class="flex_ans">
                  <p class="comment_label">Answer</p>
                  <br />
                  <p class="comment_data">{data.comment}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default QuestionDetails;
