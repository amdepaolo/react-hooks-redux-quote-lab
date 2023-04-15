import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import { createStore } from "redux";
import quotesReducer from "./features/quotes/quotesSlice";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const store = createStore(quotesReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
