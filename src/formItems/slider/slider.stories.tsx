import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "./slider";
import { sb_size } from "../../types";

const meta: Meta = {
    title: "M3/FormItems/Slider",
    component: Slider,
    // Auto-generates a documentation page with your TS props
    tags: ["autodocs"],
    argTypes: {
        size: sb_size,
        vertical: { type: "boolean", description: "spreekt voor zich" },
        icon: {
            type: "string",
            description: "Icon"
        }
    },
};

export default meta;
type Story = StoryObj;

export const Filled: Story = {
    args: {
        children: "checkbox",
    },
};
