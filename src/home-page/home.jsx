import React from "react";
import ReactDOM from "react-dom";
import { Header, Footer } from "Common/common-sections.jsx";
import "Common/universal.css";

function Info(){
  return (
      <div className="container">
        <h1>TODO <em>Add Home Page Information</em></h1>
      </div>
    );
}

function App() {
    return (
      <div>
        <Header />
        <Info />
        <Footer />
      </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
