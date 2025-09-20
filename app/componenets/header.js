import Link from "next/link";
import { useState } from "react";
import "../globals.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

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
        <Link href="/" legacyBehavior><a className="link">صفحه اصلی</a></Link>
        <Link href="/services" legacyBehavior><a className="link">خدمات</a></Link>
        <Link href="/reservation" legacyBehavior><a className="link">رزرو وقت</a></Link>
        <Link href="/about" legacyBehavior><a className="link">درباره ما</a></Link>
        <Link href="/contact" legacyBehavior><a className="link">تماس با ما</a></Link>
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
          }

          .nav.open {
            max-height: 500px; /* ارتفاع منو باز */
          }

          .link {
            width: 100%;
            text-align: center;
            font-size: 16px;
            padding: 10px 0;
          }
        }
      `}</style>
    </header>
  );
}
