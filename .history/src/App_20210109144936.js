import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add">Add new song</Link>
          </li>
          <li>
            <Link to="/songs">Songs</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/add">
            <Add />
          </Route>
          <Route path="/songs">
            <Songs />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Welcome to homepage</h2>
    </div>
  );
}

function Add() {
  return (
    <div>
      <h2>Adding new song</h2>
    </div>
  );
}

function Songs() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

export default App;