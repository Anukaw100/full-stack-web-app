import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Header, Footer } from "Common/common-sections.jsx"
import "Common/universal.css"

function Account() {

  useEffect(() => {
    const loginNav = document.getElementById("loginlink");
    loginNav.innerHTML = "Log Out"
    loginNav.href = "/logout"
    loginNav.addEventListener("click", removeStorage);
  })

  const removeStorage = () => {
    sessionStorage.removeItem("Name");
  }

  return(
    <div>
      <h1>{sessionStorage.getItem("Name")}'s Account</h1>
    </div>
  )
}

function App() {
  return(
    <React.Fragment>
      <Header />
      <Account />
      <Footer />
    </React.Fragment>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
