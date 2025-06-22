import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ padding: "2rem", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center" }}>Área de Autenticación</h1>
      <main>{children}</main>
    </div>
  );
}