import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Bus from 'Common/bus.js';
import { FlashMessage } from 'Common/flash-message.jsx'
import { Header, Footer } from "Common/common-sections.jsx";
import "Common/universal.css";
import "Common/authenticate.css";

function LoginForm() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const flash = (message) => {
    Bus.emit('flash', (message))
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const params = new URLSearchParams();
      params.append("email", email);
      params.append("password", password);
      axios.defaults.withCredentials = true;
      const response = await axios({
        method: 'post',
        url: '/login',
        data: params,
        withCredentials: true,
        credentials: "same-origin"

      })

      if (response.status == 200) {
        window.location = "/account"
      }

    } catch (err) {
      if (err.response.status == 401) {
        flash("Invalid credentials")
      }
    }
  }

  return (
    <main className="container form-style">
      <h1>Login</h1>
      <FlashMessage />
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" onChange={updateEmail} required />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" onChange={updatePassword} required />
        <button type="submit" >Login</button>
      </form>
      <span>OR</span>
      <a href="/signup/" className="switch-form">Sign Up</a>
    </main>
    );
  }

function App() {
  return(
    <React.Fragment>
      <Header />
      <LoginForm />
      <Footer />
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
