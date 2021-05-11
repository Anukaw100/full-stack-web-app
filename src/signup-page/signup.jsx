import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Bus from 'Common/bus.js';
import axios from "axios";
import { Header, Footer } from "Common/common-sections.jsx";
import { FlashMessage } from 'Common/flash-message.jsx'
import "Common/universal.css";
import "Common/authenticate.css";

function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const updateName = (e) => {
    setName(e.target.value);
  };

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
      params.append("name", name);
      params.append("email", email);
      params.append("password", password);
      const response = await axios({
        method: 'post',
        url: '/signup',
        data: params
      })

      if (response.status == 200) {
        sessionStorage.setItem("Name", response.data.name)
        window.location = "/account"
      }

    } catch (err) {
      if (err.response.status == 409) {
        flash(err.response.data.message)
      }
    }
  }

  return (
    <main className="container form-style">
      <h1>Sign Up</h1>
      <FlashMessage />
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" onChange={updateName} required />
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" onChange={updateEmail} required />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" onChange={updatePassword} required />
        <button type="submit" >Sign Up</button>
      </form>
      <span>OR</span>
      <a href="/login/" className="switch-form">Login</a>
    </main>
  );
}

function App() {
  return (
    <React.Fragment>
      <Header />
      <SignUpForm />
      <Footer />
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
