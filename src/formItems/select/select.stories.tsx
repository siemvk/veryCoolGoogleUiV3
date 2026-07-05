import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./select";
import { sb_size } from "../../types";

const meta: Meta = {
    title: "M3/FormItems/Select",
    component: Select,
    // Auto-generates a documentation page with your TS props
    tags: ["autodocs"],
    argTypes: {
        size: sb_size,
        output: {
            type: "string",
            description: "de tekst on de label, zet `invalid` aan om aantegeven dat het een error is"
        },
        label: {
            type: "string",
            description: "de tekst in de input"
        },
        invalid: {
            type: "boolean",
            description: "zet aan bij error"
        },
        customIconSuffix: {
            type: "string",
            description: "Icon aan rechter kant"
        },
        border: {
            type: "boolean",
            description: "zet aan voor border"
        },
        round: {
            type: "boolean",
            description: "zet aan voor afgeronde hoeken"
        },
        fill: {
            type: "boolean",
            description: "zet aan om de input te vullen"
        }
        ,
        type: {
            type: "string",
            description: "het HTML input type (bijv. text, password, email, number)",
            control: { type: 'select' },
            options: ["text", "password", "email", "number", "tel", "url"]
        }

    },
};

export default meta;
type Story = StoryObj;

export const Filled: Story = {
    args: {
        children: "checkbox",
        iconSuffix: "home"
    },
};
