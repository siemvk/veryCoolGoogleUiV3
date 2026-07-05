import type { Meta, StoryObj } from "@storybook/react";

import { sb_size } from "../../types";
import Fieldset from "./fieldset";

const meta: Meta = {
    title: "M3/FormItems/fieldset",
    component: Fieldset,
    // Auto-generates a documentation page with your TS props
    tags: ["autodocs"],
    argTypes: {
        legend: {
            type: "string",
            description: "inhoud van de <legend>"
        }
    },
};

export default meta;
type Story = StoryObj;

export const Filled: Story = {
    args: {
        children: "",
    },
};
