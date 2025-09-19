'use client';

import Link from 'next/link';
import Head from 'next/head';

export default function Header() {
  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/gh/rastikerdar/vazir-font@30.1.0/dist/font-face.css"
          rel="stylesheet"
        />
      </Head>

      <div style={containerStyle}>
        <Link href="/" style={linkStyle}>صفحه اصلی</Link>
        <Link href="/services" style={linkStyle}>خدمات</Link>
        <Link href="/booking" style={linkStyle}>رزرو وقت</Link>
        <Link href="/about" style={linkStyle}>درباره ما</Link>
        <span style={logoStyle}>آرایشگاه باران</span>
      </div>
    </>
  );
}

const containerStyle = {
  position: 'fixed',
  top: '20px',
  left: 0,
  width: '100%',
  display: 'flex',
  justifyContent: 'space-around', // فاصله اتوماتیک بین لینک‌ها
  alignItems: 'center',
  zIndex: 1000,
  padding: '0 20px',
  pointerEvents: 'auto',
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontSize: '18px',
  padding: '5px 10px',
  background: 'rgba(0,0,0,0.2)',
  borderRadius: '5px',
  transition: 'all 0.3s',
};

const logoStyle = {
  fontWeight: 'bold',
  fontSize: '22px',
  color: '#ffd700',
  background: 'rgba(0,0,0,0.2)',
  padding: '5px 10px',
  borderRadius: '5px',
};
