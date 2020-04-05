import React from "react";
import { Provider } from "react-redux";

import store from "./redux/store";

import { Pokedex } from "./components/Pokedex";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Pokedex />
      </div>
    </Provider>
  );
}

export default App;
