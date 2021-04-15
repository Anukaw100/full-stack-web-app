import React from "react";
import ReactDOM from "react-dom";

import { Header, Footer } from "Common/running-sections.jsx";
import "Common/shared.css";

import Sample from "Images/busy-parking-lot.jpg";

class Info extends React.Component {
  render() {
    return (
      <div className="information">
        <h1>The Dilema of Parking!</h1>
        <p>
          Current parking methods are inefficient. They are time consuming,
          costly, and stressful. This is Filler text purely for demonstration!
        </p>
        <br />
        <img className="parkingLot" src={Sample} />
      </div>
    );
  }
};

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main id="mainContent">
          <Info />
        </main>
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
