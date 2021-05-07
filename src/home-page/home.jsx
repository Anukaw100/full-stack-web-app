import React from "react";
import ReactDOM from "react-dom";
import { Header, Footer } from "Common/common-sections.jsx";
import "./home.css"

function Info() {
  return (
    <main className="container">
      <div className="card">
        <div className="card-content">
          <h2 className="card-title" >The Future of Parking</h2>
          <p className="card-body">This card is going to be truly awesome and show case our amazing
            skills in CSS.
          </p>
          <a href="/product" className="button">Learn More</a>
        </div>
      </div>
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
