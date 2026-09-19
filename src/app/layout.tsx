import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fried Up | Crispy Fried Chicken, Wings & Burgers in Ruislip",
  description:
    "Fried Up — fresh, crispy fried chicken, hot honey wings, burgers, wraps and loaded sides in West Ruislip. Order on Just Eat or Uber Eats. 4 West Ruislip Station, Ickenham Rd, HA4 7DW.",
  keywords: [
    "fried chicken",
    "Fried Up",
    "chicken shop Ruislip",
    "hot honey wings",
    "burgers",
    "takeaway West Ruislip",
  ],
  openGraph: {
    title: "Fried Up | Crispy. Bold. Fresh.",
    description:
      "Fresh fried chicken, wings, burgers and wraps in West Ruislip. Order online via Just Eat or Uber Eats.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GB"
      className={`${barlowCondensed.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}