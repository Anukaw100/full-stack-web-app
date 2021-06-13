import React from "react";
import ReactDOM from "react-dom";
import { Header, Footer } from "Common/common-sections.jsx";
import Cover from "Images/ai-cover.jpg";
import "Common/css/universal/document.css";
import "Common/css/universal/container.css";
import "Common/css/universal/flex-table.css";

function Info() {
  return (
    <main className="container">
      <h1 className="container__heading">AI For Parking</h1>
      <img
        className="container__cover-image"
        src={Cover}
        alt="A robot thinking of complex math equations"
      />
      <div className="flex-table">
        <div className="flex-table__column flex-table__column_position_1">
          <h2>Object Detection</h2>
          <p>
            Object detection has become one of the hottest topics in the field
            of computer vision - enabling computers to better understand digital
            images and videos
          </p>
        </div>
        <div className="flex-table__column flex-table__column_position_2">
          <h2>
            TODO <em>Our Solution</em>
          </h2>
        </div>
        <div className="flex-table__column flex-table__column_position_1 flex-table__column_background_dark">
          <p>
            Object detection is a sub-field of computer vision. Which in turn is
            a sub-field of Artificial Intelligence. Helping computers understand
            different parking scenarios is a complex task.
          </p>
        </div>
      </div>
      <div className="flex-table">
        <div className="flex-table__column flex-table__column_position_3">
          <h2>
            TODO <em>Research Method</em>
          </h2>
        </div>
        <div className="flex-table__column flex-table__column_position_1 flex-table__column_background_dark">
          <p>
            Demo our solution to show how we used object detection by uploading
            an image of parking lot.
          </p>
        </div>
      </div>
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
