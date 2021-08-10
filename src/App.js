import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from "pages/LandingPage";
import DetailsPage from 'pages/DetailsPage';
import Example from "pages/Example";
import Checkout from "pages/Checkout";
import "assets/scss/style.scss";
import Rating from "pages/Rating";



function App() {
  return (
  <div className="App">
    <Router>
    <Route exact path="/" component={LandingPage}></Route>
    <Route exact path="/properties/:id" component={DetailsPage}></Route>
    <Route path="/checkout" component={Checkout} />
    <Route exact path="/example" component={Example}></Route>
    <Route exact path="/rating" component={Rating}></Route>
    </Router>
  </div>
  );
}

export default App;
