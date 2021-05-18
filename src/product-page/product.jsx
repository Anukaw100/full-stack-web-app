import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { Header, Footer } from "Common/common-sections.jsx";
import "Common/universal.css";
import "./product.css";

/* [Help from Chandra Panta Chhetri](https://dev.to/chandrapantachhetri/
   responsive-react-file-upload-component-with-drag-and-drop-4ef8)
 */
function Uploader(props) {
  const fileInputRef = useRef(null);
  const [fileURL, setFileURL] = useState("");

  const handleUploadButtonClick = (event) => {
    event.preventDefault();
    fileInputRef.current.click();
  }

  const handleImageUpload = (event) => {
    event.preventDefault();
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      console.log(e.target.result);
      setFileURL(e.target.result);
    }
    fileReader.readAsDataURL(event.target.files[0]);
  }

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
        {!fileURL && props.children}  {/** to add the textual information. */}
        <section>
          <div>
            {fileURL && <img src={fileURL} alt="A parking lot image" />}
          </div>
        </section>
      </article>
    </main>
  );
}

function App() {
  return (
    <React.Fragment>
      <Header />
      <Uploader>
        <h1>Try Our Product</h1>
        <p>
          Upload an image of a parking lot here to see a labelled image of all
          the vacant and occupied parking spaces.
        </p>
      </Uploader>
      <Footer />
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
