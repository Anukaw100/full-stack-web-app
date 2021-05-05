import React from "react";
import ReactDOM from "react-dom";

function Account() {

  return(
    <React.Fragment>
      <a href="/logout">Log Out</a>
    </React.Fragment>

  )
}

ReactDOM.render(<Account />, document.getElementById("root"))
