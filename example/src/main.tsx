import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BeerProviders, DialogProvider, ToastProvider } from "../../src";
import "../../src/theme.css"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <BeerProviders>
            <App />
        </BeerProviders>
    </React.StrictMode>,
);