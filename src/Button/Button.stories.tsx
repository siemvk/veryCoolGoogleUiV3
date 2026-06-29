import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta = {
    title: "M3/Button",
    component: Button,
    // Auto-generates a documentation page with your TS props
    tags: ["autodocs"],
    argTypes: {
        icon: {
            control: 'text',
            description: 'The google fonts icon',
        },
        children: {
            control: 'text',
            description: "The text of the button (optional)"
        },
        size: {
            control: "select",
            options: [
                "m3-btn-size-medium"
            ],
            description: "Groten van knop"
        },
        roundness: {
            control: "select",
            type: "string",
            description: "De vorm van de knop",
            options: [
                "m3-btn-round",
                "m3-btn-square"
            ]
        },
        variant: {
            control: "select",
            type: "string",
            description: "Variant van de knop",

            options: [
                "filled",
                "outlined",
                "tonal"
            ]
        }

    },
};

export default meta;
type Story = StoryObj;

export const Filled: Story = {
    args: {
        children: "Filled Button",
        size: "m3-btn-size-medium",
        icon: "",
        roundness: "m3-btn-square",
        variant: "filled"
    },
};

export const Outlined: Story = {
    args: {
        children: "Filled Button",
        size: "m3-btn-size-medium",
        icon: "",
        roundness: "m3-btn-square",
        variant: "outlined"
    }
};

export const Tonal: Story = {
    args: {
        children: "Filled Button",
        size: "m3-btn-size-medium",
        icon: "",
        roundness: "m3-btn-square",
        variant: "tonal"
    }
};

export const RondFilled: Story = {
    args: {
        children: "Filled Button",
        size: "m3-btn-size-medium",
        icon: "",
        roundness: "m3-btn-round",
        variant: "filled"
    }
};
