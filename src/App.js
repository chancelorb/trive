import React, { Component } from 'react';
import Navbar from "./components/navbar";
import Header from "./components/header";
import Buzz from "./components/mainContent/triveBuzz";
import Join from "./components/mainContent/join";
import Footer from "./components/footer";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        
        <Join/>
        <Buzz />
        <Footer />
      </div>
    );
  }
}

export default App;
