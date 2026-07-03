import { Button, SplitButton } from "../../src";
import menuHelper, { divider } from "../../src/helpers/menu";

const highlights = [
    {
        title: "Button",
        detail: "Filled and icon buttons with Beer CSS styling.",
    },
    {
        title: "Split button",
        detail: "A paired action button for primary and secondary actions.",
    },
    {
        title: "Theme tokens",
        detail: "The demo loads the shared theme variables from the library.",
    },
];

export default function App() {
    return (
        <main className="shell">
            <section className="hero">
                <p className="eyebrow">Component demo</p>
                <h1>Preview your React components in a small local playground.</h1>
                <p className="lede">
                    Start the app with <strong>bun run demo</strong> and use this page to
                    check spacing, states, and overall polish while you iterate.
                </p>

                <div className="button-row">
                    <Button icon="bolt" forms={["round"]}>
                        Primary action
                    </Button>
                    <div>

                        <Button icon="visibility" forms={["border", "round"]}>
                            Secondary action
                        </Button>
                        {menuHelper({
                            menuData: [
                                {
                                    content: "dropdown 2 :D"
                                },
                                {
                                    content: "Home",
                                    icon: "home"
                                },
                                divider,
                                {
                                    content: "subMenu",
                                    subMenu: [
                                        {
                                            content: "wow"
                                        },
                                        {
                                            content: "cool"
                                        },
                                        {
                                            content: "this is selected",
                                            selected: true
                                        }
                                    ]
                                }
                            ],
                            docked: true
                        })}
                    </div>
                    <SplitButton icon="more_horiz" size="medium"
                        menu={menuHelper({
                            menuData: [
                                {
                                    content: "hai"
                                },
                                {
                                    content: "item 2",
                                    icon: "home"
                                },
                                divider,
                                {
                                    content: "subMenu",
                                    subMenu: [
                                        {
                                            content: "hoi"
                                        },
                                        {
                                            content: "wow"
                                        },
                                        {
                                            content: "selected",
                                            selected: true
                                        }
                                    ]
                                }
                            ],
                            positions: 'left',
                            noWrap: true
                        })}>
                        Split action
                    </SplitButton>
                </div>
            </section>

            {highlights.map((item) => (
                <article>
                    <h5>{item.title}</h5>
                    <p>{item.detail}</p>
                </article>
            ))}
        </main>
    );
}