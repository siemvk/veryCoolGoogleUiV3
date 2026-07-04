import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BeerProviders, DialogProvider, Nav, ToastProvider, useDialog } from "../../src";
import "../../src/theme.css"
import AutoNavRail from "../../src/helpers/smartNavRail";

const big = {
    id: "home",
    icon: "home",
    text: "Home",
    onClick: () => {
        // alert("hai") 
    }
}

const mainOptions = [
    {
        id: "home2",
        icon: "home",
        text: "Home2",
        onClick: () => {
            // alert("hai")
        }
    }, {
        id: "home3",
        icon: "home",
        text: "Home3",
        onClick: () => {
            // alert("hai")
        }
    }
]

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <BeerProviders>
            <AutoNavRail navConfig={{
                pos: "left",
                InitialMenuOpen: true,
                initialSelected: "home2",
                items: mainOptions,
                bigButton: big,
                autoUpdateSelected: true
            }}>
                <Nav pos="bottom" initialSelected="home2" items={mainOptions} bigButton={big} autoUpdateSelected={true}></Nav>

                <App />
            </AutoNavRail>
        </BeerProviders>
    </React.StrictMode>,
);