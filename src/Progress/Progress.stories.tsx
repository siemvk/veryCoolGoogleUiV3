import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "./Progress";
import { sb_size } from "../types";

const meta: Meta = {
    title: "M3/Progress",
    component: Progress,
    // Auto-generates a documentation page with your TS props
    tags: ["autodocs"],
    argTypes: {
        indeterminate: {
            type: "boolean",
            description: "Moet de waarde afleesbaar zijn",
        },
        wavy: {
            type: "boolean",
            description: "wavy"
        },
        circle: {
            type: "boolean",
            description: "moet rond zijn?"
        },
    },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
    args: {
        children: "checkbox",
        value: "30",
        max: "100",
        indeterminate: true,
        circle: true
    }
};
