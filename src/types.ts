import { InputType } from "storybook/internal/csf"

export type size = "small" | "medium" | "large" | "extra"

export const sb_size: InputType = {
    control: "select",
    options: [
        "small", "medium", "large", "extra", undefined
    ],
    description: "The size defaults to medium. optional",
}

export type pos = "left" | "right" | "top" | "bottom" | ""

export const sb_pos: InputType = {
    control: "select",
    options: [
        "left", "right", "top", "bottom"
    ],
    description: 'waar'
}