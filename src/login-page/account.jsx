import React from "react";
import ReactDOM from "react-dom";

function Account() {

  return(
    <div>
      <h1>{sessionStorage.getItem("Name")}'s Account</h1>
      <a href="/logout">Log Out</a>
    </div>
  )
}

function App() {
  return(
    <React.Fragment>
      <Account />
    </React.Fragment>
  )
}

ReactDOM.render(<Account />, document.getElementById("root"))
