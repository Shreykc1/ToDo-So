import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@styles/globals.css";
import Nav from "@components/navbar";
import CustomCursor from "@components/utils/custom-cursor";
import Drawing from "@components/utils/drawing";


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
    <html lang="en" suppressHydrationWarning>
      <body>
      {/* <CustomCursor /> */}
        <main className="main">
            <Nav />
            {children}
        </main>
      {/* <Drawing /> */}
      </body>
    </html>
  );
}
