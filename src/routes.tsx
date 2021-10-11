import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Cadastro } from "./pages/Cadastro";
function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/cadastro" component={Cadastro} />
        {/* <Route path="/orphanages/create" component={CreateOrphanage} />
        <Route path="/orphanages/:id" component={Orphanage} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
