import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css"
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
import { PathnameContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`w-full min-h-screen flex flex-col items-center`}>
          <Navbar />
          <main className="w-full h-full">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
