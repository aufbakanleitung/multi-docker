import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">An unnecessarily complicated Fibonacci calculator</h1>
            <Link to="/">Home</Link>&nbsp;&nbsp;
            <Link to="/otherpage">Other Page</Link>
          <div>
            <Route exact path="/" component={Fib} />
            <Route path="/otherpage" component={OtherPage} />
          </div>
          <p className="App-intro">
            It contains of 3 docker containers, with PostGRES, Redis and Node. 
            <ul>
              <li>This implementation aims to showcase DevOps principles</li>
              <li>How multiple dockers can communicate in the cloud.</li>
              <li>Automated testing and deployment</li>
              <li>Using Travis CI</li>
            </ul>
          </p>
        </div>
      </Router>
    );
  }
}

export default App;
