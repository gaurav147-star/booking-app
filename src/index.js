import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { SearchContextProvider } from "./context/SearchContext";
import "./index.scss";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import store, { persistor } from "./store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate persistor={persistor}> */}
        <AuthContextProvider>
          <SearchContextProvider>
            <App />
          </SearchContextProvider>
        </AuthContextProvider>
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
);
