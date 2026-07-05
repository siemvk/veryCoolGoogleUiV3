import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BeerProviders, DialogProvider, Nav, ToastProvider, useDialog } from "../../src";
import "../../src/theme.css"
import AutoNavRail from "../../src/helpers/smartNavRail";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <BeerProviders>

            <App />
        </BeerProviders>
    </React.StrictMode>,
);