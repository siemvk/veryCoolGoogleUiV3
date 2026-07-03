import type { Meta, StoryObj } from "@storybook/react";
import { Card, type CardProps } from "./card";
import { Button } from "../Button/Button";

const meta: Meta<typeof Card> = {
    title: "M3/Card",
    component: Card,
    tags: ["autodocs"],
    argTypes: {
        title: {
            control: { type: "text" },
            description: "Card title",
        },
        children: {
            control: { type: "text" },
            description: "Card content",
        },
        buttons: {
            description: "Buttons rendered in the card footer",
            table: {
                type: {
                    summary: "(typeof Button | typeof SplitButton)[]",
                },
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Filled: Story = {
    args: {
        title: "Card title",
        children: "Card content",
        buttons: [
            <Button>
                Button
            </Button>
        ],
    },
};