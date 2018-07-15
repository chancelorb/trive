import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Main from "./components/mainContent/main"
import MainW from "./components/whitePaper/mainW"
import MainT from "./components/team/mainT"
import MainP from "./components/presentation/mainP"
import MainH from "./components/howItWorks/mainH"
import MainC from "./components/contact/mainC"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={(props) => (<Main /> )} />

          <Route exact path='/whitepaper' component={(props) => (<MainW /> )} />

          <Route exact path='/team' component={(props) => (<MainT /> )} />

          <Route exact path='/presentation' component={(props) => (<MainP /> )} />

          <Route exact path='/how-it-works' component={(props) => (<MainH /> )} />

          <Route exact path='/contact' component={(props) => (<MainC /> )} />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default App;
