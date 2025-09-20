"use client";
import { routerServerGlobal } from "next/dist/server/lib/router-utils/router-server-context";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function ReservationPage() {
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

    const reservationData = {
      name,
      phone,
      services: selected,
      date,
      time,
    };

    console.log("📌 اطلاعات رزرو:", reservationData);
    alert(`رزرو ${name} با موفقیت ثبت شد!`);
  };

  return (
   
      <div style={containerStyle}>
      {/* بخش چپ - عکس */}
      <div style={imageSectionStyle}>
        <img 
          src="/images/6.jpg" 
          alt="سالن زیبایی" 
          style={imageStyle}
        />
      </div>

      {/* بخش وسط - فرم */}
      <div style={formSectionStyle}>
        <div style={formContainerStyle}>
          <h1 style={{ textAlign: "center", marginBottom: "25px", color: "#7e3f76" }}>
            رزرو وقت آنلاین
          </h1>

          <form onSubmit={handleSubmit}>
            {/* نام مشتری */}
            <label style={labelStyle}>نام و نام خانوادگی:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={inputStyle}
              placeholder="مثلا: سارا احمدی"
            />

            {/* شماره تماس */}
            <label style={labelStyle}>شماره تماس:</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={inputStyle}
              placeholder="مثلا: 09121234567"
            />

            {/* انتخاب سرویس */}
            <h3 style={{ marginTop: "20px", marginBottom: "10px", color: "#7e3f76" }}>
              انتخاب خدمات:
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {services.map((service) => (
                <label
                  key={service}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="checkbox"
                    value={service}
                    checked={selected.includes(service)}
                    onChange={() => handleCheckboxChange(service)}
                  />
                  {service}
                </label>
              ))}
            </div>

            {/* انتخاب تاریخ */}
            <h3 style={{ marginTop: "25px", marginBottom: "10px", color: "#7e3f76" }}>
              انتخاب روز:
            </h3>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              style={inputStyle}
            />

            {/* انتخاب ساعت */}
            <h3 style={{ marginTop: "25px", marginBottom: "10px", color: "#7e3f76" }}>
              انتخاب ساعت:
            </h3>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              style={inputStyle}
            />

            {/* دکمه ثبت */}
            <button type="submit" style={submitButton}>
              ثبت رزرو
            </button>
          </form>
        </div>
      </div>

      {/* بخش راست - عکس */}
      <div style={imageSectionStyle}>
        <img 
          src="/images/2.jpg" 
          alt="خدمات زیبایی" 
          style={imageStyle}
        />
      </div>
    </div>
    
  );
}

// استایل‌ها
const containerStyle = {
  display: "flex",
  minHeight: "100vh",
  width: "100%",
  fontFamily: "'Vazir', sans-serif",
};

const imageSectionStyle = {
  flex: "1",
  display: { xs: "none", md: "flex" }, // در موبایل نمایش داده نمی‌شود
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  backgroundColor: "#f9f3f8",
};

const imageStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

const formSectionStyle = {
  flex: "1.2",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "40px 20px",
  backgroundColor: "rgba(255, 245, 250, 0.9)",
  backgroundImage: "linear-gradient(135deg, #fff5fa 0%, #fceef7 100%)",
};

const formContainerStyle = {
  width: "100%",
  maxWidth: "500px",
  padding: "40px",
  background: "white",
  borderRadius: "16px",
  boxShadow: "0 10px 30px rgba(126, 63, 118, 0.15)",
};

const labelStyle = {
  display: "block",
  marginBottom: "6px",
  fontWeight: "600",
  color: "#7e3f76",
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
};

const submitButton = {
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
  transition: "all 0.3s ease",
};

// رسپانسیو برای موبایل
const styles = `
  @media (max-width: 768px) {
    .container {
      flex-direction: column;
    }
    .image-section {
      display: none;
    }
    .form-section {
      padding: 20px 15px;
    }
    .form-container {
      padding: 25px 20px;
    }
  }
`;

// اضافه کردن استایل‌های رسپانسیو
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}