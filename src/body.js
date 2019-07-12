import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { Link } from "react-router-dom";
class body extends Component {
  constructor() {
    super();
    this.state = { questions: [] };
  }
  
  componentDidMount() {
    this.fetch();
  }

  async fetch() {
    await axios.get("/questions").then(res => {
      var i = this.state.questions;
      res.data.map(item => {
        i.push(item);
      });
      this.setState((this.state.questions = i));
    });
  }
  render() {
    return (
      <div>
        {this.state.questions.map(item => (
          <div>
            <div className="full_container">
              <div class="container_1">
                <div class="cont1">
                  <div class="c111">{item.votes}</div>
                  <div class="c112">votes</div>
                </div>
                <div class="cont2">
                  <div class="c121">{item.answers}</div>
                  <div class="c122">answers</div>
                </div>
                <div class="cont3">
                  <div class="c131">{item.views}</div>
                  <div class="c132">view</div>
                </div>
              </div>
              <div class="container_2">
                <Link to={`/questions/${item.id}`}>
                  <div class="container_question">
                    <font color="#87CEFA">{item.question}</font>
                  </div>
                </Link>
                <div class="c22" />
                <div style={{ flexFlow: "row" }} class="c221">
                  {/* <div style={{ display: "flex", flexDirection: "row nowrap" }}>
                    {item.tags.map(tag => (
                      <div style={{ backgroundColor: "#B0E0E6" }} class="c221">
                        <font color="4682b4">{tag}</font>
                      </div>
                    ))}
                  </div> */}
                  <div class="c222">
                    {/* <div class="c2221">
                      {item.timeType} {item.time}
                    </div> */}
                    <div class="c2222">
                      <font color="#87CEFA">{item.userName}</font>
                    </div>
                    <div class="c2223">{this.urp}</div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

export default body;
