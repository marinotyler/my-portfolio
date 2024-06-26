import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ty's Portfolio",
  description: "A portfolio of my applications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
          >
          <div>
            <ModeToggle/>
          </div>
          {children}
        </ThemeProvider>
        </body>
    </html>
  );
}
