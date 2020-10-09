import React from "react";
import "./App.css";
//Redux
import { Provider } from "react-redux";
import store from "./redux/store";
//Components
import SearchInput from "./components/searchInput/SearchInput";
import Heroes from "./components/heroes/Heroes";

function App() {
  return (
    <Provider store={store}>
      <div>
        <SearchInput />
        <Heroes />
      </div>
    </Provider>
  );
}

export default App;
