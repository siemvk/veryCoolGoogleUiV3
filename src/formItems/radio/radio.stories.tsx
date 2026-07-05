import type { Meta, StoryObj } from "@storybook/react";
import { Radio } from "./radio";
import { sb_size } from "../../types";

const meta: Meta = {
    title: "M3/FormItems/Radio",
    component: Radio,
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
        children: "radio",
    },
};
