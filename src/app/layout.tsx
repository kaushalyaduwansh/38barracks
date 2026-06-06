import type { Metadata } from "next";
import "../index.css";

export const metadata: Metadata = {
  title: "38 Barracks",
  description: "Military Luxury Outpost",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
