import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import BadgeNew from "../pages/BadgeNew";
import Badges from "../pages/Badges";
import NotFound from "../pages/404";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/badges" component={Badges} />
        <Route exact path="/badges/new" component={BadgeNew} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
