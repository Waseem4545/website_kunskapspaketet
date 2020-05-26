import React, { Component } from 'react';

/* thired part packages */

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/* our components */
import './styles/css/main.css';
import './styles/css/home.css';

import Main from './views/main';
import Home from './views/home';
import Categories_list from './views/categoriesList';
import Lecture from './views/lecture';
import { withFirebase } from './firebase';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    // check if user is signed in
    this.props.firebase.auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route path="/" exact  component={this.state.user ? Home : Landing} />
            <Route path="/hem" component={this.state.user ? Home : Landing} />
            <Route path="/kategori_list" component={this.state.user ? Categories_list : Landing } />
            <Route path="/forlasning" component={this.state.user ? Lecture : Landing} />
            <Route path="/admin" component={this.state.user ? Admin : Landing} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default withFirebase(App);
