import React from "react";
import { Provider } from "react-redux";

import store from "./redux/store";

import { Pokedex } from "./components/Pokedex";
import { WelcomeScreen } from "./components/WelcomeScreen";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <WelcomeScreen /> */}
        <Pokedex />
      </div>
    </Provider>
  );
}

export default App;
