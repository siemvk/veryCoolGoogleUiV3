import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./FAB";

const meta: Meta = {
    title: "M3/FAB",
    component: Button,
    // Auto-generates a documentation page with your TS props
    tags: ["autodocs"],
    argTypes: {
        children: {
            control: 'text',
            description: "The icon of the FAB"
        },
        size: {
            control: "select",
            options: [
                "m3-FAB-size-medium"
            ],
            description: "Groten van knop"
        },

    },
};

export default meta;
type Story = StoryObj;

export const FAB: Story = {
    args: {
        children: "home"
    },
};