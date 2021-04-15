import React from "react";
import ReactDOM from "react-dom";

import { Header, Footer } from "Common/running-sections.jsx";
import "Common/shared.css"

import Sample from "Images/busy-parking-lot.jpg";

class Info extends React.Component {
  render() {
    return (
      <main id="main-home">
        <div id="information">
          <h1>The Dilema of Parking!</h1>
          <p>This is Filler text purely for demonstrating
            Current parking methods are inefficient, they are time consuming,
            costly, and stressful. This is Filler text purely for demonstrating scroll,
            This is Filler text purely for demonstrating
            Current parking methods are inefficient, they are time consuming,
            costly, and stressful. This is Filler text purely for demonstrating scroll,
            This is Filler text purely for demonstrating
          </p>
          <br />
          <img src={Sample} />
        </div>
      </main>
    );
  }
};

class Board extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Info />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<Board />, document.getElementById("root"));
