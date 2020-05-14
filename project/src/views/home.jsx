import React, { Component } from "react";

import Categories from '../components/categories'
import Mobile from '../components/navbar_mb'

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      user: "Petter ",
    };
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="welcome">
          <h6 className="text-white pb-5 pt-2">Välkommen {this.state.user},</h6>
        </div>
        <Categories />

        <Mobile />
      </div>
    );
  }
}
