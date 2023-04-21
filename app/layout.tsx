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
      <body className="flex flex-col px-2 min-h-screen">
        <div className="flex-shrink-0">
          <Navbar />
        </div>
        <div className="flex flex-col w-full flex-1 max-w-5xl mx-auto">{children}</div>
      </body>
    </html>
  );
}
