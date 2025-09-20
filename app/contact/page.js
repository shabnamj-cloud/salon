"use client";
import { useState } from 'react';
import '../css/contact.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('فرم ارسال شد:', formData);
    alert('پیام شما با موفقیت ارسال شد!');
  };

  return (
    <div className="contact-page-container">
      {/* اضافه کردن div برای پس زمینه */}
      <div className="background-overlay"></div>
      
      <div className="contact-container">
        <div className="hero-section">
          <h1 className="hero-title">تماس با سالن زیبایی ما</h1>
          <p className="hero-text">ما اینجا هستیم تا به شما کمک کنیم زیباترین نسخه خود باشید</p>
        </div>

        <div className="content">
          <div className="contact-info">
            <div className="info-card">
              <div className="icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3>آدرس</h3>
              <p>تهران، خیابان ولیعصر، پلاک ۱۲۳</p>
            </div>

            <div className="info-card">
              <div className="icon">
                <i className="fas fa-phone"></i>
              </div>
              <h3>تلفن</h3>
              <p>۰۲۱-۱۲۳۴۵۶۷۸</p>
              <p>۰۹۱۲-۱۲۳-۴۵۶۷</p>
            </div>

            <div className="info-card">
              <div className="icon">
                <i className="fas fa-envelope"></i>
              </div>
              <h3>ایمیل</h3>
              <p>info@beauty-salon.com</p>
              <p>appointment@beauty-salon.com</p>
            </div>

            <div className="info-card">
              <div className="icon">
                <i className="fas fa-clock"></i>
              </div>
              <h3>ساعات کاری</h3>
              <p>شنبه تا چهارشنبه: ۹ صبح تا ۸ شب</p>
              <p>پنجشنبه: ۹ صبح تا ۶ بعدازظهر</p>
              <p>جمعه: تعطیل</p>
            </div>
          </div>

          <div className="form-section">
            <h2 className="form-title">فرم تماس با ما</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">نام کامل</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">ایمیل</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">شماره تماس</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="service">خدمات مورد نظر</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="">لطفا انتخاب کنید</option>
                  <option value="hair">کوتاهی و استایلینگ مو</option>
                  <option value="color">رنگ مو</option>
                  <option value="facial">پاکسازی پوست و فیشیال</option>
                  <option value="makeup">آرایش</option>
                  <option value="manicure">مانیکور</option>
                  <option value="other">سایر خدمات</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">پیام</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                ارسال پیام
              </button>
            </form>
          </div>
        </div>

        <div className="gallery">
          <h2 className="gallery-title">گالری سالن زیبایی ما</h2>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="/salon1.jpg" alt="فضای داخلی سالن" />
            </div>
            <div className="gallery-item">
              <img src="/salon2.jpg" alt="خدمات آرایش" />
            </div>
            <div className="gallery-item">
              <img src="/salon3.jpg" alt="مدل مو" />
            </div>
            <div className="gallery-item">
              <img src="/salon4.jpg" alt="خدمات پوست" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;