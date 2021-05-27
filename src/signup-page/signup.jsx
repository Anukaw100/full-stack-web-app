import React, { useState } from "react";
import ReactDOM from "react-dom";
import Bus from "Common/bus.js";
import { Header, Footer } from "Common/common-sections.jsx";
import FlashMessage from "Common/flash-message.jsx";
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
    Bus.emit("flash", message);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // See <https://eslint.org/docs/rules/object-shorthand> for explanation of
      // why key is not needed.
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    if (response.status === 200) {
      const user = await response.json();
      sessionStorage.setItem("Name", user.name);
      window.location = "/account";
    }

    if (response.status === 409) {
      flash((await response.json()).message);
    }

    return 0;
  };

  return (
    <main className="container form-style">
      <h1>Sign Up</h1>
      <FlashMessage />
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" onChange={updateName} required />
        </label>
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
        <button type="submit">Sign Up</button>
      </form>
      <span>OR</span>
      <a href="/login/" className="switch-form">
        Login
      </a>
    </main>
  );
}

function App() {
  return (
    <>
      <Header />
      <SignUpForm />
      <Footer />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
