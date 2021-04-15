import React from "react";
import ReactDOM from "react-dom";

import { Header, Footer } from "Common/running-sections.jsx";
import "./index.css";

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loginForm: true};
    this.changeForm = this.changeForm.bind(this);
  }

  changeForm() {
    console.log("Changing value of loginForm from " + this.state.loginForm);
    this.setState({loginForm: !this.state.loginForm})
  }

  renderLogin () {
    return (
      <main id="main-login">
        <div id="login-div">
          <h1>Login</h1><br />
          <form>
            <label for="email">Email:</label> <br /><br />
            <input type="text" id="login-email" name="login-email" /> <br /><br />
            <label for="lname">Password:</label><br /> <br />
            <input type="password" id="login-password" name="login-password" /> <br /><br /><br />
            <button type='button'>Submit</button><br /><br /><br />
            <span>OR</span><br /><br /><br />
            <button type='button' onClick={this.changeForm}>Create New Account</button><br /><br />
          </form>
        </div>
      </main>
    );
  }

  renderSignUp () {
    return (
      <main id="main-login">
        <div id="login-div">
          <h1>Sign Up</h1><br />
          <form>
            <label for="signup-name">Name:</label> <br />
            <input type="text" id="signup-name" name="signup-name" /> <br /><br />
            <label for="email">Email:</label> <br />
            <input type="text" id="email" name="email" /> <br /><br />
            <label for="password">Password:</label> <br />
            <input type="password" id="signup-password" name="signup-password" /> <br /><br /><br />
            <button type='button'>Submit</button><br /><br /><br />
            <span>OR</span><br /><br /><br />
            <button type='button' onClick={this.changeForm}>Login</button><br /><br />
          </form>
        </div>
      </main>
    );
  }

  render() {
    if(this.state.loginForm) {
      console.log("This is login form: " + this.state.loginForm);
      return(this.renderLogin());
    } else {
      console.log("This is SignUp form: " + this.state.loginForm)
      return(this.renderSignUp());
    }
  }
}

class Board extends React.Component {
  render() {
    return(
      <div>
        <Header />
        <main>
          <Account />
        </main>
        <Footer />
        {console.log("board")}
      </div>
    );
  }
}

ReactDOM.render(<Board />, document.getElementById("root"));
