class Header extends React.Component {
  render() {
    return (
      <header id="headerhome">
        <a href="/"> 
          <img class="logo" src="/images/logo.gif"/>
        </a>
        <nav>
          <ol class="list">
            <li><a href="/state-of-parking/">State of Parking</a></li>
            <li><a href="/why-ai/">Why A.I?</a></li>
            <li><a href="/product/">Product</a></li>
            <li id="loginicon"><a href="/login/">Login</a></li>
          </ol>
        </nav>
      </header>
    );
  }
}

class Uploader extends React.Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
    this.state = [{ fileURL: '' }];
  }

  readFileAndURL(event) {
    // [Help by Adam Lusk](https://vadlusk.medium.com/a-newbs-guide-working-with-user-uploaded-image-files-with-react-23795c6da346)
    event.preventDefault(); // Don't take the default action.
    const fileReader = new FileReader();
    fileReader.onload = () => { this.setState({ fileURL: fileReader.result })};
    fileReader.readAsDataURL(event.target.files[0]);
  }

  render() {
    // TODO Add a handleSubmit function.
    return (
      <form>
        <input
          type="file"
          ref={this.fileInput}
          accept="image/*"
          onChange={event => this.readFileAndURL(event)}
          style={{ display: 'none' }}
        />
        <img
          onClick={() => this.fileInput.current.click()}
          onDrop={event => this.readFileAndURL(event.dataTransfer.files[0])}
          src={this.state.fileURL}
          height="300"
          width="400"
          alt="Click or drag to add image"
        />
        <br />
        <button type="submit">Find parking spaces</button>
      </form>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <ol class="list">
          <li><a href="https://github.com/Anukaw100/parking-detection-ml-website">GitHub</a></li>
          <li>Contact Us</li>
        </ol>
      </footer>
    );
  }
}

class Content extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main id="main-product">
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

ReactDOM.render(<Content />, document.getElementById("product"));
