import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MainC extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Hello, Trive</h1>
        <p>Contact Page</p>
        <Link to={`/`}>Back Home</Link>
      </div>
    )
  }
}

export default MainC;
