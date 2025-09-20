'use client'; // این خط رو حتما اضافه کن
import "./globals.css";

import Header from './componenets/header';
import Footer from './componenets/footer';
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <html lang="fa">
      <body style={{
        margin: 0,
        padding: 0,
        fontFamily: 'Vazir, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        paddingBottom: isHomePage ? '110px' : '0',
      }}>
        <Header />
        <main style={{ flex: 1, paddingTop: '80px' }}>
          {children}
        </main>
        <Footer isFixed={isHomePage} />
      </body>
    </html>
  );
}