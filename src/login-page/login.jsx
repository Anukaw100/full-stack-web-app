import React from "react";
import ReactDOM from "react-dom";

import { Header, Footer } from "Common/common-sections.jsx";
import "Common/universal.css";
import "Common/authenticate.css";

function LoginForm(){
   return (
     <div className="main">
       <h1>Login</h1>
       <form action="/login" method="post">
         <label htmlFor="email">Email:</label>
         <input type="email" name="email" required/>
         <label htmlFor="password">Password:</label>
         <input type="password" name="password" required/>
         <button type="submit">Submit</button>
       </form>
       <span>OR</span>
       <a href="/signup/" className="switchform">Create Account</a>
     </div>
    );
}

function App() {
    return(
      <div>
        <Header />
        <LoginForm />
        <Footer />
      </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
