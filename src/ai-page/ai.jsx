import React from "react";
import ReactDOM from "react-dom";
import { Header, Footer } from "Common/common-sections.jsx";
// FIXME Choose stylesheet to apply.

class Info extends React.Component {
  render() {
    return (
      <div>
        <h1>TODO IMPLEMENTATION!</h1>
      </div>
    );
  }
};

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <Info />
        </main>
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
