"use client";
import React from "react";
import store from "./components/store";
import { Provider } from "react-redux";
import App from "./components/App";

function page() {
  return (
    <div>
      <Provider store={store}>
        <App />
      </Provider>
    </div>
  );
}

export default page;
