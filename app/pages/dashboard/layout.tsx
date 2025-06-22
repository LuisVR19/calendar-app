import { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <header style={{ background: "#222", color: "white", padding: "1rem" }}>
        <h2>App Principal</h2>
      </header>
      <main style={{ padding: "1rem" }}>{children}</main>
    </div>
  );
}