import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Avanti — Email Marketing Partner",
  description: "We turn email into your highest-ROI channel. Then we stay long enough to compound it.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,300;0,14..32,400;0,14..32,600;0,14..32,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
