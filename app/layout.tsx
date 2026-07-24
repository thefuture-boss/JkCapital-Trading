import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JK Capital Trading",
  description: "Academia profesional de Trading",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}