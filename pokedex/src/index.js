import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import "./index.css";

import App from "./components/app";
import ErrorBoundry from "./components/error-boundry";
import PokemonService from "./services/pokemon-service";
import { PokemonServiceProvider } from "./components/pokemon-service-context";
import store from "./store";

const pokemonService = new PokemonService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <PokemonServiceProvider value={pokemonService}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PokemonServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById("root")
);
