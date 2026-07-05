import type { Meta, StoryObj } from "@storybook/react";
import { SplitButton } from "./ButtonSplit";
import { sb_size } from "../types";

const meta: Meta = {
    title: "M3/SplitButton",
    component: SplitButton,
    // Auto-generates a documentation page with your TS props
    tags: ["autodocs"],
    argTypes: {
        icon: {
            control: 'text',
            description: 'The google fonts icon',
        },
        children: {
            control: 'text',
            description: "The text of the button or the children"
        },
        size: sb_size,
        responsive: {
            control: "boolean",
            description: "Moet dit responsive zijn"
        },
        menu: {
            description: "Het dropdown menu",
            table: {
                type: {
                    summary: "React.ReactElement<React.HTMLAttributes<HTMLElement>, \"menu\">",
                },
            },
        },
        buttonTooltip: {
            description: "Tooltip element",
            table: {
                type: {
                    summary: "React.ReactElement<TooltipProps, typeof Tooltip>[]",
                },
            },
        }
    },
};

export default meta;
type Story = StoryObj;

export const Filled: Story = {
    args: {
        children: "Base button",
        size: "",
    },
};
