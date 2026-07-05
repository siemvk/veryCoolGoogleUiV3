import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./checkbox";
import { sb_size } from "../../types";

const meta: Meta = {
    title: "M3/FormItems/Checkbox",
    component: Checkbox,
    // Auto-generates a documentation page with your TS props
    tags: ["autodocs"],
    argTypes: {
        size: sb_size
    },
};

export default meta;
type Story = StoryObj;

export const Filled: Story = {
    args: {
        children: "checkbox",
    },
};
