import Navbar from "@/components/Navbar";
import "./globals.css";

import "cal-sans";

export const metadata = {
  title: "Minami",
  description: "<3",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="px-2 min-h-screen">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
