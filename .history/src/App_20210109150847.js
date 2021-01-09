import './App.css';
import React, {useRef, useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import songList from "./song";

function App() {

  const inputMoney = useRef();
  const inputTime = useRef();
  const inputInterestRate = useRef();
  const [interest,setInterest] = useState(null);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const money = inputMoney.current.valueAsNumber;
    const time = inputTime.current.valueAsNumber;
    const interestRate = inputInterestRate.current.valueAsNumber;
    if(interest !== null){
      setInterest(money*(time/12)*interestRate);
    }
  }

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
      <form>
        <div>
        <p>Số tiền gửi: </p><input ref={inputMoney} type="number" min="1" step="1"></input><p>$</p>
        </div>
        <div>
        <p>Kì hạn:</p><input ref={inputTime} type="number" min="1" max="36" step="1"></input><p>tháng</p>
        </div>
        <div>
        <p>Ngày gửi: </p>
        <input type="date"></input>
        </div>
        <div>
        <p>Tỉ lệ lãi suất: </p><input ref={inputInterestRate} type="number" step="0.01"></input><p>%/năm</p>
        </div>
        <br />
        <button onClick={handleSubmit}>Tính lãi suất</button>        
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
