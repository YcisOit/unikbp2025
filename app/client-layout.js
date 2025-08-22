// app/client-layout.js
"use client";
import { usePathname } from "next/navigation";
import Header1 from './components/Header1';
import Footer from './components/Footer';

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Header1 />}
      {children}
      {!isAdminRoute && <Footer />}
    </>
  );
}
