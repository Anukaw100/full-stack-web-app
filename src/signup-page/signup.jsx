import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Header, Footer } from "Common/common-sections.jsx";
import { AuthInput, AuthForm } from "Common/authentication.jsx";
import "Common/css/universal/document.css";

function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <AuthForm
      signUp
      formJsonObject={{ name, email, password }}
      failureStatus={409}
      failureMessage={async (response) => (await response.json()).message}
    >
      <AuthInput type="text" name="name" value={name} onChange={setName} />
      <AuthInput type="email" name="email" value={email} onChange={setEmail} />
      <AuthInput
        type="password"
        name="password"
        value={password}
        onChange={setPassword}
      />
    </AuthForm>
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
