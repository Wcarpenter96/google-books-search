import React from "react";
import Home from "./containers/Home";
import Bookmarks from "./containers/Bookmarks";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
      <Router>
        <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/bookmarks" component={Bookmarks} />
          <Route component={Home} />
        </Switch>
        </div>
      </Router>
  );
}

export default App;

