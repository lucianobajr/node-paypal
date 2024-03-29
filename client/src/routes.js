import React from "react";

// Router
import { Switch, Route } from "react-router-dom";

// Lib
import ScrollToTop from "./lib/ScrollToTop";

// Pages
import Home from "./pages/Home";
import Cancel from "./pages/Cancel";
import Success from "./pages/Success";
import NotFound from "./pages/NotFound";

export default function Routes() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/success" exact component={Success} />
        <Route path="/cancel" exact component={Cancel} />
        <Route path="*" component={NotFound} />
      </Switch>
    </>
  );
}
