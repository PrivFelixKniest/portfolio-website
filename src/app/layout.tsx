import "./globals.css";
import type { Metadata } from "next";
import { Navbar } from "./components/Navbar";

export const metadata = {
  icons: {
    icon: "/icon.png", // /public path
  },
  title: "Felix Kniest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Navbar />
        <div className="staticNoiseOverlay" />
      </body>
    </html>
  );
}
