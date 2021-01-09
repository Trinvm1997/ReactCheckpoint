import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import {songList} from "./song";

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
      <h2>Songs list</h2>
      {songList.map(song => (
        <p>{song.title}</p>
        <p>{song.author}</p>
        <p>{song.publishedDate}</p>
        <p>{song.lyric}</p>  
      ))}
    </div>
  );
}

export default App;
