import type { Meta, StoryObj } from "@storybook/react";
import { Nav, type NavProps } from "./Nav";
import { Button } from "../Button/Button";
import { sb_pos } from "../types";

const meta: Meta<typeof Nav> = {
    title: "M3/Nav",
    component: Nav,
    tags: ["autodocs"],
    argTypes: {
        pos: sb_pos
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
            id: "home",
            icon: "home",
            text: "Home",
            onClick: () => {
                alert("hai")
            }
        }
    },
};