import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export default function Layout() {
  return (
    <div className="relative min-h-dvh bg-zinc-50 overflow-hidden">
      <Header />

      <main className="relative z-10 p-6">
        <Outlet />
      </main>

      <footer className="relative z-10 p-4 text-sm text-gray-500">
        Footer
      </footer>
    </div>
  );
}
