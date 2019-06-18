import React from "react";
import { Switch, Route } from "react-router-dom";

import home from "./pages/home";
import carnaval from "./pages/carnaval";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={home} />
      <Route path="/carnaval" exact component={carnaval} />
    </Switch>
  );
}
export default Routes;