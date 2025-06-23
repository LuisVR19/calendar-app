import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="layout">
      <main className="main-content">
        {children}
      </main>
      {/* <footer className="footer">
        <p>© 2023 Your Company Name</p>
      </footer> */}
    </div>
  );
}