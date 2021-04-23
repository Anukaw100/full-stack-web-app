import React from "react";
import ReactDOM from "react-dom";

import { Header, Footer } from "Common/common-sections.jsx";
import "Common/universal.css";
import "Common/authenticate.css";

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
  }
  
  // TODO Add required attributes to <input> fields.
  render() {
    return (
      <div className="main">
        <h1>Sign Up</h1>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" />
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" />
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" />
          <button type="button">Submit</button>  {/* FIXME */}
        </form>
        <span>OR</span>
        <a href="/login/" className="switchform">Login</a>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return(
      <div>
        <Header />
        <SignUpForm />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
