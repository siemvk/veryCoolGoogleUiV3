import { ReactElement, useState } from "react";
import Testing from "./testing";
import AutoNavRail from "../../src/helpers/smartNavRail";
import { Nav, navItem } from "../../src";
import ButtonBuilder from "./ButtonBuilder";

const pages: Record<string, () => React.JSX.Element> = {
    "testing": Testing,
    "btns": ButtonBuilder
}

export default function App() {
    const helper = (v: navItem) => {
        setPageId(v.id)
    }
    const big = {
        id: "start",
        icon: "code",
        text: "Start here",
        onClick: helper
    }
    const mainOptions = [
        {
            id: "btns",
            icon: "widgets",
            text: "Buttons",
            onClick: helper
        }, {
            id: "dialogs",
            icon: "chat_bubble",
            text: "dialogs and toasts",
            onClick: helper
        },
        {
            id: "testing",
            icon: "experiment",
            text: "Tests",
            onClick: helper
        }
    ]
    const [pageId, setPageId] = useState("home")
    return <AutoNavRail navConfig={{
        pos: "left",
        InitialMenuOpen: true,
        initialSelected: "start",
        items: mainOptions,
        bigButton: big,
        autoUpdateSelected: true
    }}>
        {pages[pageId] == undefined ? <main>
            <h1 className="align-center">404</h1>
        </main> : pages[pageId]()}
        <Nav pos="bottom" initialSelected="start" items={mainOptions} bigButton={big} autoUpdateSelected={true}></Nav>
    </AutoNavRail>
}