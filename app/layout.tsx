import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@styles/globals.css";
import Nav from "@components/navbar";
import CustomCursor from "@components/utils/custom-cursor";
import Drawing from "@components/utils/drawing";
import AuthContext from "@context/AuthContext";
import { TodoProvider } from "@context/TodoContext";
import BottomBar from "@components/bottom-bar";




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
        <html lang="en" suppressHydrationWarning >
            <meta name="google" content="notranslate" />
            <body>
                <AuthContext >
                    <TodoProvider>
                        {/* <CustomCursor /> */}

                        <main className={`main `}>
                            <div className="app">
                            <Nav />
                            {children}
                            </div>
                        </main>
                            <BottomBar />

                {/* <Drawing /> */}
                    </TodoProvider>
                </AuthContext>
            </body>
        </html>
    );
}
