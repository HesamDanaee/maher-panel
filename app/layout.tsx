import type { Metadata } from "next";
import SWRProvider from "@/src/components/providers/SWRProvider";
import localFont from "next/font/local";
import "../src/styles/globals.css";
import { ThemeProvider } from "@/src/components/providers/ThemeProvider";
import { Toaster } from "@/src/components/shadcn/toaster";

const yekanBakh = localFont({ src: "../public/fonts/YekanBakhFaNum-VF.ttf" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className={yekanBakh.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SWRProvider>
            <Toaster />
            {children}
          </SWRProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
