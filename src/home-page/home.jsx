import React from "react";
import ReactDOM from "react-dom";
import { Header, Footer } from "Common/common-sections.jsx";
import "Common/universal.css";

function Info(props) {
  return (
    <main className="container">
      <h1>TODO <em>Add Home Page Information</em></h1>
    </main>
  );
}

function App(props) {
  return (
    <div>
      <Header />
      <Info />
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
