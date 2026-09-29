import type { Metadata } from "next";
import "./globals.css";
import BottomNav from "../components/BottomNav";

export const metadata: Metadata = {
  title: "Little Days",
  description: "A private baby growth journal",
  manifest: "/manifest.webmanifest"
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>
        <main className="app-shell">{children}</main>
        <BottomNav />
      </body>
    </html>
  );
}
