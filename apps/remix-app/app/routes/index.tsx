import { Button } from "ui";

export default function Index() {
  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        lineHeight: "1.4",
        padding: 20,
      }}
    >
      <h1 style={{ fontWeight: "normal", margin: 0 }}>
        Welcome to Remix + Turborepo + Vercel example
      </h1>
      <Button text="booper" />
    </div>
  );
}
