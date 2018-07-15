import React, { Component } from 'react';
import Header from "./header";
import Buzz from "./triveBuzz";
import Join from "./join";

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <Join/>
        <Buzz />
      </div>
    )
  }
}

export default Main;
