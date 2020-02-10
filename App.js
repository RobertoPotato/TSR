import React from "react";
import MainNav from "./navigation/MainStackNav";
import { Provider } from "react-redux";
import ConfigureStore from "./data/store/Store";

const store = ConfigureStore();

export default function App() {
  return (
    <Provider store={store}>
      <MainNav />
    </Provider>
  );
}
