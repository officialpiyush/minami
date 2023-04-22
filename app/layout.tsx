import Navbar from "@/components/Navbar";
import "./globals.css";

import "cal-sans";
import { ClerkProvider } from "@clerk/nextjs/app-beta";
import WhiteNoise from "@/components/Audio/WhiteNoise";
import ChangeBG from "@/components/ChangeBG";
import { ToastProvider } from "@/components/ui/toast";
import { Toaster } from "@/components/ui/toaster";
import PlantTree from "@/components/PlantTree";

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
    <ClerkProvider>
      <html lang="en" className="dark">
        <body className="flex flex-col px-2 min-h-screen font-fraunces">
          <div className="flex-shrink-0">
            {/* @ts-expect-error Server Component */}
            <Navbar />
          </div>
          <div
            id="rootElement"
            className="flex flex-col w-full flex-1 max-w-6xl mx-auto"
          >
            {children}
          </div>

          <WhiteNoise />
          <PlantTree />
          <ChangeBG color="#C9B9AC" textColor="#875834" />
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
