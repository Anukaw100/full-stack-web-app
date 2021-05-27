import React from "react";
import ReactDOM from "react-dom";
import { Header, Footer } from "Common/common-sections.jsx";
import "./home.css";

function Info() {
  return (
    <main>
      <section>
        <div className="product-info">
          <h1>Our Future for Parking</h1>
          <p>Use A.I to assess a congested parking lot</p>
        </div>
        <div className="card product-card">
          <div className="card-content">
            <h2 className="card-title">The Future of Parking</h2>
            <p className="card-body">Try out a demo of our parking solution!</p>
            <a href="/product" className="button">
              Learn More
            </a>
          </div>
        </div>
      </section>
      <section className="light-section">
        <div className="card ai-card">
          <div className="card-content">
            <h2 className="card-title">AI to the rescue</h2>
            <p className="card-body">
              AI are helping us to solve real world problems.
            </p>
            <a href="/why-ai" className="button">
              Learn More
            </a>
          </div>
        </div>
        <div className="ai-info">
          <h1>Machine Learning is changing the world</h1>
          <p>
            Artifical Intelligence is getting smarter and better at helping us
            solve various challenges in our everyday world.
          </p>
        </div>
      </section>
      <section>
        <div className="parking-info">
          <h1>Driving in circles</h1>
          <p>
            Parking is becoming more laborious every day as traffic increases.
            There is no way without human supervision of knowing where an empty
            parking spot could be.
          </p>
        </div>
        <div className="card parking-card">
          <div className="card-content">
            <h2 className="card-title">Parking is painful</h2>
            <p className="card-body">
              Cities are facing major problems with parking infrastructure.
            </p>
            <a href="/product" className="button">
              Learn More
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function App() {
  return (
    <>
      <Header />
      <Info />
      <Footer />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
