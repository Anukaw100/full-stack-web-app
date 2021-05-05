import React from "react";
import ReactDOM from "react-dom";
import { Header, Footer } from "Common/common-sections.jsx";
import "Common/universal.css";

function Info() {
  return (
    <main className="container">
      <h1>TODO <em>Add Home Page Information</em></h1>
    </main>
  );
}

function App() {
  return (
    <React.Fragment>
      <Header />
      <Info />
      <Footer />
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
