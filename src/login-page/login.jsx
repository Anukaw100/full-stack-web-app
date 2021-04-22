import React from "react";
import ReactDOM from "react-dom";

import { Header, Footer } from "Common/common-sections.jsx";
import "Common/universal.css";
import "./login.css";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loginForm: true};
    this.changeForm = this.changeForm.bind(this);
  }

  changeForm() {
    this.setState({loginForm: !this.state.loginForm})
  }

  // TODO Add required attributes to <input> fields.
  renderLogin () {
    return (
      <div className="login">
        {/* FIXME Bad practice to use <br/> for line spacing. */}
        <h1>Login</h1>
        <br />
        <form>
          <label htmlFor="email">Email:</label>
          <br /><br />
          <input type="text" name="email" />
          <br /><br />
          <label htmlFor="password">Password:</label>
          <br /><br />
          <input type="password" name="password" />
          <br /><br /><br />
          <button type="button">Submit</button>  {/* FIXME */}
          <br /><br /><br />
          <span>OR</span>
          <br /><br /><br />
          <button type="button" onClick={this.changeForm}>Create Account</button>
          <br /><br />
        </form>
      </div>
    );
  }

  // TODO Add required attributes to <input> fields.
  renderSignUp () {
    return (
      <div className="login">
        {/* FIXME Bad practice to use <br/> for line spacing. */}
        <h1>Sign Up</h1>
        <br />
        <form>
          <label htmlFor="name">Name:</label>
          <br />
          <input type="text" name="name" />
          <br /><br />
          <label htmlFor="email">Email:</label>
          <br />
          <input type="email" name="email" />
          <br /><br />
          <label htmlFor="password">Password:</label>
          <br />
          <input type="password" name="password" />
          <br /><br /><br />
          <button type="button">Submit</button>  {/* FIXME */}
          <br /><br /><br />
          <span>OR</span>
          <br /><br /><br />
          <button type="button" onClick={this.changeForm}>Login</button>
          <br /><br />
        </form>
      </div>
    );
  }

  render() {
    return this.state.loginForm ? this.renderLogin() : this.renderSignUp();
  }
}

class App extends React.Component {
  render() {
    return(
      <div>
        <Header />
        <main id="main">
          <LoginForm />
        </main>
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
