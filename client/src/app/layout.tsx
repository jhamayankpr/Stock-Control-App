"use client";

import { usePathname } from "next/navigation";
import { Inter } from "next/font/google";
import DashboardWrapper from "./dashboardWrapper";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDashboardRoute = pathname?.startsWith("/dashboard");

  return (
    <html lang="en">
      <body className={inter.className}>
        {isDashboardRoute ? (
          <DashboardWrapper>{children}</DashboardWrapper>
        ) : (
          children
        )}
      </body>
    </html>
  );
}
