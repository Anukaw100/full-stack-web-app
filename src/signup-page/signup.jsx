import React from "react";
import ReactDOM from "react-dom";
import { Header, Footer } from "Common/common-sections.jsx";
import "Common/universal.css";
import "Common/authenticate.css";

function SignUpForm(props) {
  return (
    <main className="container form-style">
      <h1>Sign Up</h1>
      <form action="/signup" method="post">
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" name="email" required />

        <label htmlFor="password">Password:</label>
        <input type="password" name="password" required />

        <button type="submit">Sign Up</button>
      </form>
      <span>OR</span>
      <a href="/login/" className="switch-form">Login</a>
    </main>
  );
}

function App(props) {
  return (
    <div>
      <Header />
      <SignUpForm />
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
