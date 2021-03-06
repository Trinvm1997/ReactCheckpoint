import './App.css';
import React, {useRef} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import songList from "./song";

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
  const inputTitle = useRef();
  const inputAuthor = useRef();
  const inputPublishDate = useRef();
  const inputLyric = useRef();
  const id = Math.floor(Math.random() * 100);
  
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputTitle.value,inputAuthor.value,inputPublishDate.value,inputLyric.value,id.value);
  }

  return (
    <div>
      <form>
        <p>Title: </p><input ref={inputTitle}></input>
        <p>Author:</p><input ref={inputAuthor}></input>
        <p>Published at: </p><input ref={inputPublishDate} type="date"></input>
        <p>Short lyric: </p><input ref={inputLyric}></input>
        <br />
        <button onClick={handleSubmit}>Add</button>        
      </form>
    </div>
  );
}

function Songs() {
  return (
    <div>
      {songList.sort((a,b) => {
        return new Date(b.publishedDate) - new Date(a.publishedDate)
      }).map(song => (
        <h3 >{song.title}</h3>  
      ))}
    </div> 
  );
}

export default App;
