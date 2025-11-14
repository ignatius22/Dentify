import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dentify - Modern Dental Practice Management",
  description: "Complete dental practice management system for appointments, patients, and more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
