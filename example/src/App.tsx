import { Button, SplitButton, useDialog } from "../../src";
import { useToast } from "../../src";
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
    const { addToast } = useToast();
    const { pushDialog } = useDialog();
    return (
        <main>
            <section className="hero">
                <h1>Preview your React components in a small local playground.</h1>
                <p className="lede">
                    Start the app with <strong>bun run demo</strong> and use this page to
                    check spacing, states, and overall polish while you iterate.
                </p>

                <div className="button-row">
                    <Button icon="bolt" forms={["round"]} onClick={() => {
                        pushDialog({
                            title: "Lmao ik heb de website nog niet gemaakt",
                            content: "mischien moet ik dat doen",
                        })
                    }}>
                        Primary action
                    </Button>
                    <div>

                        <Button icon="visibility" forms={["border", "round"]}>
                            Toast test
                        </Button>
                        {menuHelper({
                            menuData: [
                                {
                                    content: "Basic toast",
                                    onClick: () => {
                                        addToast({
                                            text: "Basic toast"
                                        })
                                    }
                                },
                                {
                                    content: "Toast with icon",
                                    onClick: () => {
                                        addToast({
                                            text: "wow a icon",
                                            icon: "home"
                                        })
                                    }
                                },
                                {
                                    content: "EVIL toast",
                                    onClick: () => {
                                        addToast({
                                            text: "HELP",
                                            type: "error"
                                        })
                                    }
                                }
                            ],
                            docked: false,
                            noWrap: true
                        })}
                    </div>
                </div>
                <div className="space"></div>
                <div>
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