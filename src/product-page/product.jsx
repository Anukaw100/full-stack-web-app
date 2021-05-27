import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { Header, Footer } from "Common/common-sections.jsx";
import "Common/universal.css";
import "./product.css";

// Obtained help/code from <https://dev.to/chandrapantachhetri/responsive-react-file-upload-component-with-drag-and-drop-4ef8>.
function Uploader(props) {
  const fileInputRef = useRef(null);
  const [fileURL, setFileURL] = useState("");

  const handleUploadButtonClick = (event) => {
    event.preventDefault();
    fileInputRef.current.click();
  };

  const handleImageUpload = (event) => {
    event.preventDefault();
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      setFileURL(e.target.result);
    };
    fileReader.readAsDataURL(event.target.files[0]);
  };

  // For reason to destructure, see <https://stackoverflow.com/questions/53352851/must-use-destructuring-props-assignment-react-destructuring-assignment#comment103150837_53352999>.
  const { children } = props;
  return (
    <main>
      <section className="upload-container">
        <p>Drag and drop your image anywhere or</p>
        <button type="button" onClick={handleUploadButtonClick}>
          <span>Upload an image</span>
        </button>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleImageUpload}
          title=""
          value=""
          accept="image/*"
        />
      </section>

      <article className="preview-container">
        {!fileURL && children}
        <section>
          <div>
            {fileURL && (
              <img src={fileURL} alt="Your upload, ideally of a parking lot" />
            )}
          </div>
        </section>
      </article>
    </main>
  );
}

Uploader.propTypes = {
  children: PropTypes.node.isRequired,
};

function App() {
  return (
    <>
      <Header />
      <Uploader>
        <h1>Try Our Product</h1>
        <p>
          Upload an image of a parking lot here to see a labelled image of all
          the vacant and occupied parking spaces.
        </p>
      </Uploader>
      <Footer />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
