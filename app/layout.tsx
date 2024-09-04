import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@styles/globals.css";
import Nav from "@components/navbar";
import CustomCursor from "@components/custom-cursor";
import Drawing from "@components/drawing";


export const metadata: Metadata = {
  title: "Todo-So",
  description: "The Better Todoist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <CustomCursor />
      <Drawing />
        <main className="main">
            <Nav />
            {children}
        </main>
      </body>
    </html>
  );
}
