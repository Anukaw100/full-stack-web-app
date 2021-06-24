import React from "react";
import ReactDOM from "react-dom";
import { Header, Footer } from "Common/common-sections.jsx";
import "Common/css/universal/document.css";
import "./css/section.css";
import "./css/card.css";

function Info() {
  return (
    <main>
      <section className="section section_type_dark">
        <div className="section__info">
          <h1>Our Future for Parking</h1>
          <p>Use A.I to assess a congested parking lot</p>
        </div>
        <div className="card card_topic_product">
          <div className="card__content">
            <h2 className="card__title">The Future of Parking</h2>
            <p className="card__body">Try out a demo of our parking solution!</p>
            <a href="/product" className="card__button">
              Try out out Product!
            </a>
          </div>
        </div>
      </section>
      <section className="section section_type_light">
        <div className="card card_topic_ai">
          <div className="card__content">
            <h2 className="card__title">AI to the rescue</h2>
            <p className="card__body">
              AI are helping us to solve real world problems.
            </p>
            <a href="/why-ai" className="card__button">
              Learn more about AI!
            </a>
          </div>
        </div>
        <div className="section__info">
          <h1>Machine Learning is changing the world</h1>
          <p>
            Artifical Intelligence is getting smarter and better at helping us
            solve various challenges in our everyday world.
          </p>
        </div>
      </section>
      <section className="section section_type_dark">
        <div className="section__info">
          <h1>Driving in circles</h1>
          <p>
            Parking is becoming more laborious every day as traffic increases.
            There is no way without human supervision of knowing where an empty
            parking spot could be.
          </p>
        </div>
        <div className="card card_topic_parking">
          <div className="card__content">
            <h2 className="card__title">Parking is painful</h2>
            <p className="card__body">
              Cities are facing major problems with parking infrastructure.
            </p>
            <a href="/state-of-parking" className="card__button">
              Learn more about Parking!
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
