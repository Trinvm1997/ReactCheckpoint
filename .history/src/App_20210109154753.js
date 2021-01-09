import './App.css';
import React, {useRef} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
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
   
  const handleSubmit = (event) => {
    event.preventDefault();
    const title = inputTitle.current.value;
    const author = inputAuthor.current.value;
    const publishDate = inputPublishDate.current.value;
    const lyric = inputLyric.current.value;
    const id = Math.floor(Math.random() * 100);
    songList.push({id:id.toString(),author:author,publishedDate:publishDate,title:title,lyric:lyric});
    console.log(songList);
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
  let { path, url } = useRouteMatch();

  return (
    <div>
      {songList.sort((a,b) => {
        return new Date(b.publishedDate) - new Date(a.publishedDate)
      }).map(song => (
        <h3 key={song.id}><Link to={`${url}/${song.id}`}>{song.title}</Link></h3>  
      ))}

      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/${songList.map(song => song.id)}`}>
          <Song />
        </Route>  
      </Switch>
    </div>
    
  );
}

function Song() {
  let { id } = useParams();
  return (
    <div>
      <h3>{id}</h3>
    </div>
  );
}

export default App;
