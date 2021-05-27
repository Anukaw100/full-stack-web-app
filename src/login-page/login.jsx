import React, { useState } from "react";
import ReactDOM from "react-dom";
import Bus from "Common/bus.js";
import FlashMessage from "Common/flash-message.jsx";
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
    Bus.emit("flash", message);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // See <https://eslint.org/docs/rules/object-shorthand> for explanation of
      // why key is not needed.
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (response.status === 200) {
      const user = await response.json();
      sessionStorage.setItem("Name", user.name);
      window.location = "/account";
    }

    if (response.status === 401) {
      flash("Invalid credentials");
    }
  };

  return (
    <main className="container form-style">
      <h1>Login</h1>
      <FlashMessage />
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" name="email" onChange={updateEmail} required />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            onChange={updatePassword}
            required
          />
        </label>
        <button type="submit">Login</button>
      </form>
      <span>OR</span>
      <a href="/signup/" className="switch-form">
        Sign Up
      </a>
    </main>
  );
}

function App() {
  return (
    <>
      <Header />
      <LoginForm />
      <Footer />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
