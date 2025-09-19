
export default function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={footerContainerStyle}>
        <div>
          <h4 style={footerTitle}>آرایشگاه باران</h4>
          <p>آدرس: تهران، خیابان فرضی ۱۲۳</p>
          <p>تلفن: ۰۲۱-۱۲۳۴۵۶۷۸</p>
          <p>ایمیل: info@baranbeauty.com</p>
        </div>
        <div>
          <h4 style={footerTitle}>ما را دنبال کنید</h4>
          <p>Instagram | Telegram | WhatsApp</p>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '14px', color: '#ccc' }}>
        © 2025 آرایشگاه باران. تمامی حقوق محفوظ است.
      </div>
    </footer>
  );
}

const footerStyle = {
  width: '100%',
  backgroundColor: 'rgba(0,0,0,0.7)', // نیمه شفاف روی هر بک‌گراند
  color: '#fff',
  padding: '20px 0',
  position: 'relative', // پایین صفحه به صورت طبیعی
  fontFamily: "'Vazir', sans-serif",
};

const footerContainerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  maxWidth: '1200px',
  margin: '0 auto',
  gap: '20px',
};

const footerTitle = {
  fontSize: '18px',
  fontWeight: 'bold',
  marginBottom: '10px',
};
