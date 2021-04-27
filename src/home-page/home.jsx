import React from "react";
import ReactDOM from "react-dom";
import { Header, Footer } from "Common/common-sections.jsx";
import "Common/universal.css";

class Info extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>TODO <em>Add Home Page Information</em></h1>
      </div>
    );
  }
};

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <Info />
        </main>
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
