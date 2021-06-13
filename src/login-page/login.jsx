import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Header, Footer } from "Common/common-sections.jsx";
import { AuthInput, AuthForm } from "Common/authentication.jsx";
import "Common/css/universal/document.css";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <AuthForm
      formJsonObject={{ email, password }}
      failureStatus={401}
      failureMessage={async (response) => "Invalid credentials"}
    >
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
      <LoginForm />
      <Footer />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
