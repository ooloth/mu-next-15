import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Michael Uloth",
  description:
    "Senior Software Engineer helping scientists discover new medicines at Recursion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
