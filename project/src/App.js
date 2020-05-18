import React from "react";

/* thired part packages */

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";


/* our components */
import "./styles/css/main.css";
import "./styles/css/home.css";

import Main from './views/main';
import Home from "./views/home";
import Categories_list from "./views/categoriesList";
import Lecture from "./views/lecture";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/hem" component={Home} />
          <Route path="/kategori_list" component={Categories_list} />
          <Route path="/forlasning" component={Lecture} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
