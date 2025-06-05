'use client';

import { usePathname } from 'next/navigation';
import Navbar from "../components/Navbar";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  // Check if current path is an auth route
  const isAuthRoute = pathname?.startsWith('/auth/');

  return (
    <>
      {/* Only show Navbar if not on auth routes */}
      {!isAuthRoute && <Navbar />}
      {children}
    </>
  );
}