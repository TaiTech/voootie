import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Top from "./pages/Top";
import Home from "./pages/Home";
import Vote from "./pages/Vote";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Top} />
      <Route exact path="/Home" component={Home} />
      <Route exact path="/Vote/:voteId" component={Vote} />
    </BrowserRouter>
  );
}

export default App;
