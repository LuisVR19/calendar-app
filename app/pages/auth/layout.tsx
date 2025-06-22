import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ padding: "2rem", minHeight: "100vh" }}>
      <main>{children}</main>
    </div>
  );
}