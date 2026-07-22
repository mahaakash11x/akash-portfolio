import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Akash Debnath-Portfolio",
  description: "A modern developer portfolio built with Next.js and Three.js",
   icons: {
    icon: "/AD.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
