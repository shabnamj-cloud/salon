"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";

// کامپوننت اصلی فرم رزرو
function ReservationContent() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service");

  const services = [
    "کوتاهی مو",
    "رنگ و هایلایت مو",
    "میکاپ و آرایش صورت",
    "مراقبت پوست و زیبایی",
  ];

  const [selected, setSelected] = useState([]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (preselectedService && services.includes(preselectedService)) {
      setSelected([preselectedService]);
    }
  }, [preselectedService]);

  const handleCheckboxChange = (service) => {
    if (selected.includes(service)) {
      setSelected(selected.filter((s) => s !== service));
    } else {
      setSelected([...selected, service]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone || selected.length === 0 || !date || !time) {
      alert("لطفا همه فیلدها را کامل کنید.");
      return;
    }

    const reservationData = { name, phone, services: selected, date, time };
    console.log("📌 اطلاعات رزرو:", reservationData);
    alert(`رزرو ${name} با موفقیت ثبت شد!`);
  };

  return (
    <div style={containerStyle}>
      {/* عکس سمت چپ - فقط در دسکتاپ نمایش داده می‌شود */}
      <div style={imageSectionStyle}>
        <img src="/images/2.jpg" alt="سالن زیبایی" style={imageStyle} />
      </div>

      {/* فرم سمت راست */}
      <div style={formSectionStyle}>
        <div style={formContainerStyle}>
          <h1 style={formTitleStyle}>رزرو وقت آنلاین</h1>

          <form onSubmit={handleSubmit} style={formStyle}>
            <label style={labelStyle}>نام و نام خانوادگی:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={inputStyle}
              placeholder="مثلا: سارا احمدی"
            />

            <label style={labelStyle}>شماره تماس:</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={inputStyle}
              placeholder="مثلا: 09121234567"
            />

            <h3 style={sectionTitleStyle}>انتخاب خدمات:</h3>
            <div style={checkboxContainerStyle}>
              {services.map((service) => (
                <label key={service} style={checkboxLabelStyle}>
                  <input
                    type="checkbox"
                    value={service}
                    checked={selected.includes(service)}
                    onChange={() => handleCheckboxChange(service)}
                    style={checkboxStyle}
                  />
                  <span style={checkboxTextStyle}>{service}</span>
                </label>
              ))}
            </div>

            <h3 style={sectionTitleStyle}>انتخاب روز:</h3>
            <input 
              type="date" 
              value={date} 
              onChange={(e) => setDate(e.target.value)} 
              style={inputStyle} 
            />

            <h3 style={sectionTitleStyle}>انتخاب ساعت:</h3>
            <input 
              type="time" 
              value={time} 
              onChange={(e) => setTime(e.target.value)} 
              style={inputStyle} 
            />

            <button type="submit" style={submitButtonStyle}>ثبت رزرو</button>
          </form>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .reservation-container {
            flex-direction: column !important;
            padding-top: 70px !important;
          }
          .reservation-image {
            display: none !important; /* مخفی کردن عکس در موبایل */
          }
          .reservation-form {
            width: 100% !important;
            padding: 20px 15px !important;
            order: 2 !important;
          }
          .reservation-form-container {
            padding: 20px !important;
            max-width: 100% !important;
            margin-top: 0 !important;
          }
          .reservation-form-title {
            font-size: 1.5rem !important;
          }
          .reservation-section-title {
            font-size: 1.1rem !important;
          }
          .reservation-checkbox-label {
            gap: 8px !important;
            margin-bottom: 10px !important;
          }
          .reservation-checkbox-text {
            font-size: 14px !important;
          }
        }

        @media (max-width: 480px) {
          .reservation-container {
            padding-top: 60px !important;
          }
          .reservation-form {
            padding: 15px 10px !important;
          }
          .reservation-form-container {
            padding: 15px !important;
          }
          .reservation-checkbox-label {
            gap: 6px !important;
          }
          .reservation-checkbox-text {
            font-size: 13px !important;
          }
        }
      `}</style>
    </div>
  );
}

// کامپوننت اصلی صفحه با Suspense
export default function ReservationPage() {
  return (
    <Suspense fallback={<div style={loadingStyle}>در حال بارگذاری...</div>}>
      <ReservationContent />
    </Suspense>
  );
}

// استایل‌ها
const containerStyle = {
  display: "flex",
  minHeight: "100vh",
  width: "100%",
  fontFamily: "'Vazir', sans-serif",
  direction: "ltr",
  className: "reservation-container"
};

const imageSectionStyle = {
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  backgroundColor: "#f9f3f8",
  order: 1,
  className: "reservation-image"
};

const imageStyle = { 
  width: "100%", 
  height: "100%", 
  objectFit: "cover" 
};

const formSectionStyle = {
  flex: 1.2,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "40px 20px",
  backgroundColor: "rgba(255, 245, 250, 0.9)",
  backgroundImage: "linear-gradient(135deg, #fff5fa 0%, #fceef7 100%)",
  order: 2,
  className: "reservation-form"
};

const formContainerStyle = {
  width: "100%",
  maxWidth: "500px",
  padding: "40px",
  background: "white",
  borderRadius: "16px",
  boxShadow: "0 10px 30px rgba(126, 63, 118, 0.15)",
  direction: "rtl",
  className: "reservation-form-container"
};

const formStyle = {
  width: "100%"
};

const formTitleStyle = { 
  textAlign: "center", 
  marginBottom: "25px", 
  color: "#7e3f76",
  fontSize: "1.8rem",
  className: "reservation-form-title"
};

const sectionTitleStyle = { 
  marginTop: "20px", 
  marginBottom: "10px", 
  color: "##7e3f76",
  fontSize: "1.2rem",
  className: "reservation-section-title"
};

const labelStyle = { 
  display: "block", 
  marginBottom: "6px", 
  fontWeight: "600", 
  color: "#7e3f76" 
};

const inputStyle = { 
  width: "100%", 
  padding: "12px", 
  fontSize: "16px", 
  borderRadius: "8px", 
  border: "2px solid #e8cfe0", 
  marginBottom: "20px", 
  cursor: "pointer", 
  transition: "border-color 0.3s ease",
  boxSizing: "border-box",
  textAlign: "right"
};

const submitButtonStyle = { 
  marginTop: "25px", 
  width: "100%", 
  padding: "15px", 
  border: "none", 
  borderRadius: "30px", 
  fontSize: "18px", 
  fontWeight: "bold", 
  background: "linear-gradient(135deg, #d291bc, #c47ba5)", 
  color: "white", 
  cursor: "pointer", 
  transition: "all 0.3s ease" 
};

const checkboxContainerStyle = { 
  display: "flex", 
  flexDirection: "column", 
  gap: "12px",
  marginBottom: "20px"
};

const checkboxLabelStyle = { 
  display: "flex", 
  justifyContent: "flex-start",
  gap: "10px", 
  cursor: "pointer",
  alignItems: "center",
  direction: "rtl",
  className: "reservation-checkbox-label"
};

const checkboxStyle = {
  cursor: "pointer",
  width: "18px",
  height: "18px",
  order: 2,
  flexShrink: 0
};

const checkboxTextStyle = {
  order: 1,
  textAlign: "right",
  className: "reservation-checkbox-text"
};

const loadingStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  fontSize: "18px",
  fontFamily: "'Vazir', sans-serif",
};