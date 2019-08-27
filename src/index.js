import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import getStoreFunc from "./redux/index";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import * as serviceWorker from "./serviceWorker";
const { store, persistor } = getStoreFunc();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<h1>Loadng ...</h1>} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
