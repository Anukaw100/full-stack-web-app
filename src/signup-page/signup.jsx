import React from "react";
import ReactDOM from "react-dom";

import { Header, Footer } from "Common/common-sections.jsx";
import "Common/universal.css";
import "Common/authenticate.css";

function SignUpForm(){
   return (
     <div className="main">
       <h1>Sign Up</h1>
       <form action="/signup" method="post">
         <label htmlFor="name" required>Name:</label>
         <input type="text" name="name" required/>
         <label htmlFor="email">Email:</label>
         <input type="email" name="email" required/>
         <label htmlFor="password">Password:</label>
         <input type="password" name="password" required/>
         <button type="submit">Submit</button>
       </form>
       <span>OR</span>
       <a href="/login/" className="switchform">Login</a>
     </div>
    );
}

function App() {
    return(
      <div>
        <Header />
        <SignUpForm />
        <Footer />
      </div>
    );
  }

ReactDOM.render(<App />, document.getElementById("root"));
