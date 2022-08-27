import { jsx as _jsx } from "react/jsx-runtime";
import "react";
export function Button({ text = "Boop" }) {
    return _jsx("button", { type: "button", children: text });
}
