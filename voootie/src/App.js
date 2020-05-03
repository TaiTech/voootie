import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Top from "./pages/Top";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Top} />
      <Route exact path="/Home" component={Home} />
    </BrowserRouter>
  );
}

export default App;
