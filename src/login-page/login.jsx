import React from "react";
import ReactDOM from "react-dom";

import { Header, Footer } from "Common/common-sections.jsx";
import "Common/universal.css";
import "Common/authenticate.css";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
  }

  // TODO Add required attributes to <input> fields.
  render() {
    return (
      <div className="main">
        <h1>Login</h1>
        <form>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" />
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" />
          <button type="button">Submit</button>  {/* FIXME */}
        </form>
        <span>OR</span>
        <a href="/signup/" className="switchform">Create Account</a>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return(
      <div>
        <Header />
        <LoginForm />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
