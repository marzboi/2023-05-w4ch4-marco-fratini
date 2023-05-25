import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./styles.css";
import { PhoneContextProvider } from "./context/phone.context.provider";

ReactDOM.createRoot(document.querySelector(".container") as HTMLElement).render(
  <React.StrictMode>
    <PhoneContextProvider>
      <App />
    </PhoneContextProvider>
  </React.StrictMode>
);
