import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Header, Footer } from "./common/common-sections.jsx";
import Home from "./home-page/home.jsx";
import Parking from "./parking-page/parking.jsx";
import AI from "./ai-page/ai.jsx";
import Uploader from "./product-page/product.jsx";

function App() {
  return(
    <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/state-of-parking" component={Parking} />
          <Route path="/why-ai" component={AI} />
          <Route path="/product" component={Uploader}/>
        </Switch>
        <Footer />
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));

