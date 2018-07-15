import React, { Component } from 'react';
import Navbar from "./components/navbar";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <header className="App-header">
          <img src="https://trive.news/wp-content/uploads/2018/03/trive-logo-icon.png" className="App-logo" alt="logo" />
          <br /><br /><br />
          <img src="https://trive.news/wp-content/uploads/2018/01/discover-banner-4.png" alt="description" />
          <br /><br />
        </header>
        <p className="App-intro">
          Ik ben chance
        </p>
      </div>
    );
  }
}

export default App;
