import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { HomePage, CollectedPage, PokemonPage } from "../pages";
import Header from "../header";

export default class App extends Component {
  render() {
    return (
      <div className="font-mono">
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route
            path="/pokemon/:id?"
            render={({ match }) => {
              const { id } = match.params;
              return <PokemonPage id={id} />;
            }}
          />
          <Route path="/collected" component={CollectedPage} />
        </Switch>
      </div>
    );
  }
}
