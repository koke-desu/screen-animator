import type { Metadata } from "next";
import "./globals.css";
import ClientWrapper from "@/components/functional/ClientWrapper";

export const metadata: Metadata = {
  title: "Create Next App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClientWrapper>
      <html lang="ja">
        <body>{children}</body>
      </html>
    </ClientWrapper>
  );
}
