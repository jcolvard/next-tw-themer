import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        id="root-layout"
        className={`duration-900 bg-gray-100 text-gray-500 antialiased antialiased transition-all ease-in-out dark:bg-gray-900 dark:text-gray-200`}
      >
        <ThemeProvider attribute="class">
          <div className={inter.className}>{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
