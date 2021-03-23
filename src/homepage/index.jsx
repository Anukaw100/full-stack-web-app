import React from "react";
import ReactDOM from "react-dom";

import { Header, Footer } from "Common/running-sections.jsx";
import "./index.css";

import Sample from "Images/busy-parking-lot.jpg";

class Info extends React.Component {
  render() {
    return (
      <div id="information">
        <h1>The Dilema of Parking!</h1>
        <p>
          Current parking methods are inefficient, they are time consuming,
          costly, and stressful. This is filler text purely for demonstrating
          scrolling capabilities and must be replaced by relevant information
          as soon as possible.
        </p>
        <p>
          TODO Add information about what this project contains and why it was
          first started. This information should contain a brief summary of the
          current parking problem, techniques used, and some sample output
          images with references wherever necessary.
        </p>
        <img src={Sample} />
      </div>
    );
  }
};

class Board extends React.Component {
  render() {
    return (
      <main id="main">
        <Header />
        <Info />
        <Footer />
      </main>
    );
  }
}

ReactDOM.render(<Board />, document.getElementById("home"));
