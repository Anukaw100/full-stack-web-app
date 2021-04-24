import React from "react";
import ReactDOM from "react-dom";

import { Header, Footer } from "Common/common-sections.jsx";
import "Common/universal.css";
import "Common/authenticate.css";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
  }

render() {
   return (
     <div className="main">
       <h1>Login</h1>
       <form>
         <label htmlFor="email">Email:</label>
         <input type="email" name="email" required/>
         <label htmlFor="password">Password:</label>
         <input type="password" name="password" required/>
         <button type="submit">Submit</button>
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
