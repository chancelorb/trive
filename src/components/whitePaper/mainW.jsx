import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from "react-dom";
import { Document, Page } from 'react-pdf';
import Test from "../../assets/test";

class MainW extends Component {
  constructor(props) {
    super(props);
    this.state = {
    numPages: null,
    pageNumber: 1,
    }
    this.onDocumentLoad = this.onDocumentLoad.bind(this);
  }

  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  }

  componentDidMount() {

  }
  render() {
    const { pageNumber, numPages } = this.state;
    return (
      <div>
        <h1>Hello, Trive</h1>
        <p>Whitepaper Page</p>
        <Link to={`/`}>Back Home</Link>
        <Test />

        <div>
          <Document
            file="../../assets/whitepaper.pdf"
            onLoadSuccess={this.onDocumentLoad}
          >
            <Page pageNumber={pageNumber} />
          </Document>
          <p>Page {pageNumber} of {numPages}</p>
        </div>
      </div>
    )
  }
}

export default MainW;
