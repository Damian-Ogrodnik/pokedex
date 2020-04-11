import React from "react";
import { Provider } from "react-redux";

import store from "./redux/store";

import { Pokedex } from "./components/Pokedex";
import { Welcome } from "./components/Welcome";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Welcome />
        <Pokedex />
      </div>
    </Provider>
  );
}

export default App;
