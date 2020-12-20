import React from "react";

// Router
import { Switch, Route } from "react-router-dom";

// Lib
import ScrollToTop from "./lib/ScrollToTop";

// Pages
import Home from "./pages/Home";
export default function Routes() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </>
  );
}
