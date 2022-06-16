import * as React from "react";

export function Button({ text = "Boop" }: { text?: string }) {
  return <button type="button">{text}</button>;
}
