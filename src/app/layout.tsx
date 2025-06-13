import type { Metadata } from "next";
import { Inter } from "next/font/google"; 
import "../styles/globals.css";
import ClientLayout from "./ClientLayout";
import { AuthProvider } from "../components/auth.context";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ParentCare - Konsultasi Parenting Digital",
  description: "Platform konsultasi parenting berbasis digital untuk keluarga sehat.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id"> 
      <body className={`${inter.variable} bg-orange-100 min-h-screen`}>
        <AuthProvider>
          <ClientLayout>
            {children}
          </ClientLayout>
        </AuthProvider>
      </body>
    </html>
  );
}