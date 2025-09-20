"use client";
import Link from "next/link";
import { useState } from "react";
import "../globals.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  
  // تابع برای بستن منو پس از کلیک روی لینک
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <span className="logo">آرایشگاه باران</span>

      {/* آیکون همبرگر برای موبایل */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className={menuOpen ? "bar open" : "bar"}></div>
        <div className={menuOpen ? "bar open" : "bar"}></div>
        <div className={menuOpen ? "bar open" : "bar"}></div>
      </div>

      {/* منو */}
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <Link href="/" className="link" onClick={closeMenu}>صفحه اصلی</Link>
        <Link href="/services" className="link" onClick={closeMenu}>خدمات</Link>
        <Link href="/reservation" className="link" onClick={closeMenu}>رزرو وقت</Link>
        <Link href="/about" className="link" onClick={closeMenu}>درباره ما</Link>
        <Link href="/contact" className="link" onClick={closeMenu}>تماس با ما</Link>
      </nav>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 20px;
          background-color: #383834;
          z-index: 1000;
          box-sizing: border-box;
        }

        .logo {
          font-weight: bold;
          font-size: 22px;
          color: #ffd700;
          background: rgba(0,0,0,0.2);
          padding: 5px 10px;
          border-radius: 5px;
        }

        .nav {
          display: flex;
          gap: 10px;
        }

        .link {
          color: #dd37c1;
          text-decoration: none;
          font-size: 18px;
          padding: 5px 10px;
          background: rgba(0,0,0,0.2);
          border-radius: 5px;
          transition: all 0.3s;
        }

        .link:hover {
          background: rgba(0,0,0,0.4);
        }

        /* همبرگر */
        .hamburger {
          display: none;
          flex-direction: column;
          cursor: pointer;
          gap: 5px;
        }

        .bar {
          width: 25px;
          height: 3px;
          background-color: #dd37c1;
          transition: 0.3s;
        }

        .bar.open:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }
        .bar.open:nth-child(2) {
          opacity: 0;
        }
        .bar.open:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }

        /* ریسپانسیو */
        @media (max-width: 768px) {
          .hamburger {
            display: flex;
          }

          .nav {
            position: absolute;
            top: 60px; /* زیر هدر */
            left: 0;
            width: 100%;
            flex-direction: column;
            align-items: center;
            background-color: #383834;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            gap: 0;
          }

          .nav.open {
            max-height: 500px; /* ارتفاع منو باز */
          }

          .link {
            width: 100%;
            text-align: center;
            font-size: 16px;
            padding: 15px 0;
            border-radius: 0;
            border-bottom: 1px solid rgba(255,255,255,0.1);
          }

          .link:last-child {
            border-bottom: none;
          }
        }
      `}</style>
    </header>
  );
}