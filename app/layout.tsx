import { ClerkProvider,SignIn } from "@clerk/nextjs";
import "./globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { SignedIn } from "@clerk/nextjs/app-beta";
import { SignedOut } from "@clerk/nextjs/app-beta/client";
import NavBar from "@/components/NavBar";

const inter = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rental Car",
  description: "Premium Car Rental in Your Area Book the selected car effortlessly, Pay for driving only, Book the Car Now",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <SignedIn>
            <NavBar/>
          {children}
          </SignedIn>
          <SignedOut>
            <SignIn/>
          </SignedOut>
          </body>
      </html>
    </ClerkProvider>
  );
}
