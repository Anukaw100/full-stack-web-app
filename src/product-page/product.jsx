import React from "react";
import ReactDOM from "react-dom";
import { Header, Footer } from "Common/common-sections.jsx";
import "Common/universal.css";
// TODO Add CSS for product-page.

class Uploader extends React.Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
    this.state = [{ fileURL: '' }];  // TODO Add image or CSS for placeholder.
  }

  readFileAndURL(event) {
    // [Help by Adam Lusk](https://vadlusk.medium.com/a-newbs-guide-working-with-user-uploaded-image-files-with-react-23795c6da346)
    event.preventDefault();
    const fileReader = new FileReader();
    fileReader.onload = () => { this.setState({ fileURL: fileReader.result })};
    fileReader.readAsDataURL(event.target.files[0]);
  }

  render() {
    return (
      <form>
        <input
          type="file"
          ref={this.fileInput}
          accept="image/*"
          onChange={event => this.readFileAndURL(event)}
          style={{ display: 'none' }}
        />
        {/* FIXME Set CSS style */}
        <img
          onClick={() => this.fileInput.current.click()}
          onDrop={event => this.readFileAndURL(event.dataTransfer.files[0])}
          src={this.state.fileURL}
          alt="Click/Drag to upload image"
        />
        <br />  {/* FIXME <br /> is bad practice */}
        <button type="submit">Find parking spaces</button>  {/* FIXME */}
      </form>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <h1>Try our product</h1>
          <div>
            Upload an image of a parking lot here to see a labelled image of
            all the vacant and occupied parking spaces.
          </div>
          <Uploader />
        </main>
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
