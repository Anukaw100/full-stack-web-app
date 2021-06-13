import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Header, Footer } from "Common/common-sections.jsx";
import "Common/css/universal/document.css";

function Account() {
  const removeStorage = () => sessionStorage.removeItem("Name");

  useEffect(() => {
    const loginNav = document.getElementById("loginlink");
    loginNav.innerHTML = "Log Out";
    loginNav.href = "/logout";
    loginNav.addEventListener("click", removeStorage);
    return 0;
  });

  return (
    <main>
      <h1>{sessionStorage.getItem("Name")}&#39;s Account</h1>
    </main>
  );
}

function App() {
  return (
    <>
      <Header />
      <Account />
      <Footer />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
