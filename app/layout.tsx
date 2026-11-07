import type { Metadata } from "next";
import "./globals.css";

export const metadata = {
  title: "PigeonRAG",
  description: "Private knowledge. Precisely retrieved.",
  icons: {
    icon: [
      {
        url: "/pigeon-icon.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/pigeon-icon-white.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
