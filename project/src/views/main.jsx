import React, { Component } from "react";

import Login from "../components/login";

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      title: "Välkommen hos kunskappaketet ",
    };
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="banner">
          <div className="banner-content">
            <h5>{this.state.title}</h5>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto est voluptas distinctio cum.
            </p>
          </div>
        </div>
        

          <Login />

      </div>
    );
  }
}
