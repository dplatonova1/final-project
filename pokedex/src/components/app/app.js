import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import { HomePage, CollectedPage, PokemonPage } from "../pages";
import Header from "../header";
export default class App extends Component {
  render() {
    return (
      <div className="font-mono">
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/pokemons/:pokemonID" component={PokemonPage} />
          <Route path="/collected" component={CollectedPage} />
          <Route
            render={() => (
              <h2 className="text-center w-full">
                Page not found! Go{" "}
                <Link to="/" className="text-red-500  visited:text-purple-600">
                  back
                </Link>{" "}
                and catch your first pokemon!
              </h2>
            )}
          />
        </Switch>
      </div>
    );
  }
}
