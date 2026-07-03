import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DialogProvider, ToastProvider } from "../../src";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <DialogProvider>
            <ToastProvider>
                <App />
            </ToastProvider>
        </DialogProvider>
    </React.StrictMode>,
);