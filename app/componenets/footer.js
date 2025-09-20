export default function Footer({ isFixed = false }) {
  // حالا isFixed رو به عنوان prop دریافت می‌کنیم
  const footerStyle = {
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.8)',
    color: '#fff',
    position: isFixed ? 'fixed' : 'relative', // تغییر اصلی اینجاست
    bottom: 0,
    left: 0,
    fontFamily: "'Vazir', sans-serif",
    zIndex: 1000,
    height: '110px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  };

  // بقیه استایل‌ها بدون تغییر می‌مونن
  const footerContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: '0 20px',
    fontSize: '14px',
  };

  const leftInfo = {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
  };

  const centerInfo = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2px',
  };

  const footerTitle = {
    fontSize: '16px',
    fontWeight: 'bold',
    margin: 0,
  };

  const socialContainer = {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    flexWrap: 'wrap',
  };

  const socialLink = {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '14px',
  };

  const separator = {
    margin: '0 5px',
    color: '#ccc',
  };

  return (
    <footer style={footerStyle}>
      <div style={footerContainerStyle}>
        {/* ستون سمت چپ */}
        <div style={leftInfo}>
          <h4 style={footerTitle}>آرایشگاه باران</h4>
          <p>تهران، خیابان ازادی ۱۲۳</p>
        </div>

        {/* ستون وسط */}
        <div style={centerInfo}>
          <p>تلفن: ۰۲۱-۱۲۳۴۵۶۷۸</p>
          <p>ایمیل: info@baranbeauty.com</p>
        </div>

        {/* ستون شبکه‌های اجتماعی */}
        <div style={socialContainer}>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={socialLink}>
            Instagram
          </a>
          <span style={separator}>|</span>
          <a href="https://t.me" target="_blank" rel="noopener noreferrer" style={socialLink}>
            Telegram
          </a>
          <span style={separator}>|</span>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" style={socialLink}>
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}