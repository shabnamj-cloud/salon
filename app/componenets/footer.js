'use client';

export default function Footer({ isFixed = false }) {
  const footerStyle = {
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.9)',
    color: '#fff',
    position: isFixed ? 'fixed' : 'relative',
    bottom: 0,
    left: 0,
    fontFamily: "'Vazir', sans-serif",
    zIndex: 1000,
    padding: '12px 0', // کاهش padding برای باریک‌تر شدن
    minHeight: 'auto', // تنظیم ارتفاع به صورت خودکار
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    boxSizing: 'border-box'
  };

  const footerContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 10px', // کاهش padding
    fontSize: '13px', // کاهش سایز فونت
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    boxSizing: 'border-box'
  };

  const topSection = {
    display: 'flex',
    flexDirection: 'row', // حفظ حالت افقی در موبایل
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: '10px', // کاهش فاصله
    flexWrap: 'nowrap', // جلوگیری از شکستن خط
    gap: '5px' // فاصله بین المان‌ها
  };

  const leftInfo = {
    display: 'flex',
    flexDirection: 'column',
    gap: '3px', // کاهش فاصله
    flex: '1 1 50%', // تقسیم فضا
    textAlign: 'right' // تراز به راست
  };

  const centerInfo = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start', // تراز به چپ
    gap: '3px', // کاهش فاصله
    flex: '1 1 50%', // تقسیم فضا
    textAlign: 'left' // تراز به چپ
  };

  const footerTitle = {
    fontSize: '14px', // کاهش سایز فونت
    fontWeight: 'bold',
    margin: '0 0 3px 0', // کاهش فاصله
    color: '#ff69b4',
    lineHeight: '1.3' // کاهش ارتفاع خط
  };

  const socialContainer = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '5px', // کاهش فاصله
    flexWrap: 'wrap',
    width: '100%',
    padding: '8px 0', // کاهش padding
    borderTop: '1px solid rgba(255,255,255,0.2)'
  };

  const socialLink = {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '12px', // کاهش سایز فونت
    display: 'flex',
    alignItems: 'center',
    gap: '3px', // کاهش فاصله
    padding: '4px 8px', // کاهش padding
    borderRadius: '3px',
    backgroundColor: 'rgba(255,255,255,0.1)',
    transition: 'all 0.3s ease'
  };

  const separator = {
    margin: '0 2px', // کاهش فاصله
    color: '#ccc',
    fontSize: '10px' // کاهش سایز جداکننده
  };

  const contactText = {
    margin: '1px 0', // کاهش فاصله
    fontSize: '11px', // کاهش سایز فونت
    textAlign: 'inherit',
    lineHeight: '1.3' // کاهش ارتفاع خط
  };

  return (
    <footer style={footerStyle}>
      <div style={footerContainerStyle}>
        <div style={topSection}>
          {/* ستون سمت چپ */}
          <div style={leftInfo}>
            <h4 style={footerTitle}>آرایشگاه باران</h4>
            <p style={contactText}>تهران، خیابان ولیعصر ۱۲۳</p>
          </div>

          {/* ستون وسط */}
          <div style={centerInfo}>
            <p style={contactText}>تلفن: ۰۲۱-۱۲۳۴۵۶۷۸</p>
            <p style={contactText}>ایمیل: info@baranbeauty.com</p>
          </div>
        </div>

        {/* ستون شبکه‌های اجتماعی */}
        <div style={socialContainer}>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={socialLink}>
            <span>Instagram</span>
          </a>
          <span style={separator}>|</span>
          <a href="https://t.me" target="_blank" rel="noopener noreferrer" style={socialLink}>
            <span>Telegram</span>
          </a>
          <span style={separator}>|</span>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" style={socialLink}>
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </footer>
  );
}