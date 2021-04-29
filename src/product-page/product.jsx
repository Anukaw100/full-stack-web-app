import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Header, Footer } from "Common/common-sections.jsx";
import "Common/universal.css";
import "./product.css";

function Uploader(props) {
  // TODO Add default image or placeholder CSS.
  let [fileURL, setFileURL] = useState('');

  /* [Help by Adam Lusk](https://vadlusk.medium.com/a-newbs-guide-working-with-
     user-uploaded-image-files-with-react-23795c6da346) */
  const fileInput = React.createRef();
  const readFileAndURL = (event) => {
    event.preventDefault();
    const fileReader = new FileReader();
    fileReader.onload = () => { setFileURL(fileReader.result) };
    fileReader.readAsDataURL(event.target.files[0]);
  }

  return (
    <main className="container">
      <h1>Try Our Product</h1>
      <p>
        Upload an image of a parking lot here to see a labelled image of all the
        vacant and occupied parking spaces.
      </p>
      <form>
        <input
          type="file"
          ref={fileInput}
          accept="image/*"
          onChange={event => readFileAndURL(event)}
          style={{ display: 'none' }}
        />
        {/* FIXME Add CSS style for image. Fix drag-and-drop upload. */}
        <img
          src={fileURL}
          onClick={() => fileInput.current.click()}
          onDrop={event => readFileAndURL(event.dataTransfer.files[0])}
          alt="Click line or drag image to upload."
        />
        {/* FIXME Add action and submit-handler. */}
        <button type="submit">Find Parking Spaces</button>
      </form>
    </main>
  );
}

function App(props) {
  return (
    <div>
      <Header />
      <Uploader />
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
