import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@styles/globals.css";
import Nav from "@components/navbar";
import CustomCursor from "@components/utils/custom-cursor";
import Drawing from "@components/utils/drawing";
import AuthContext from "@context/AuthContext";


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
        <AuthContext >
      {/* <CustomCursor /> */}
        <main className="main">
            <Nav />
            {children}
        </main>
        </AuthContext>
      {/* <Drawing /> */}
      </body>
    </html>
  );
}
