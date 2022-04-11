import React from "react";
import ReactDOM from "react-dom";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { store, persistor } from "./redux/store";
import App from "./App";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </PersistGate>
  </React.StrictMode>,
  document.getElementById("root")
);
