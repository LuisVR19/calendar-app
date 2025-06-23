import MainNavbar from "@/app/components/layout/navbar/MainNavbar";
import { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="layout">
      <MainNavbar />
      <main className="main-content">
        {children}
      </main>

    </div>
  );
}