import type { Meta, StoryObj } from "@storybook/react";
import { Nav, type NavProps } from "./Nav";

const meta: Meta<typeof Nav> = {
    title: "M3/Nav",
    component: Nav,
    tags: ["autodocs"],
    argTypes: {
        pos: {
            control: "select",
            options: [
                "left", "right", "top", "bottom", "tabs"
            ],
            description: 'waar'
        }
    },
};

export default meta;

type Story = StoryObj<typeof Nav>;

export const Filled: Story = {
    args: {
        pos: "left",
        InitialMenuOpen: true,
        items: [{
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
        }],
        bigButton: {
            id: "start",
            icon: "code",
            text: "Start here",
            onClick: () => {
                alert("hai")
            }
        }
    },
};