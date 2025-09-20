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
    <div className="reservation-container">
      {/* فرم */}
      <div className="reservation-form">
        <div className="reservation-form-container">
          <h1 className="reservation-form-title">رزرو وقت آنلاین</h1>

          <form onSubmit={handleSubmit} className="reservation-form-inner">
            <label className="form-label">نام و نام خانوادگی:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-input"
              placeholder="مثلا: سارا احمدی"
            />

            <label className="form-label">شماره تماس:</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-input"
              placeholder="مثلا: 09121234567"
            />

            <h3 className="form-section-title">انتخاب خدمات:</h3>
            <div className="checkbox-container">
              {services.map((service) => (
                <label key={service} className="checkbox-label">
                  <input
                    type="checkbox"
                    value={service}
                    checked={selected.includes(service)}
                    onChange={() => handleCheckboxChange(service)}
                    className="checkbox-input"
                  />
                  <span className="checkbox-text">{service}</span>
                </label>
              ))}
            </div>

            <h3 className="form-section-title">انتخاب روز:</h3>
            <input 
              type="date" 
              value={date} 
              onChange={(e) => setDate(e.target.value)} 
              className="form-input" 
            />

            <h3 className="form-section-title">انتخاب ساعت:</h3>
            <input 
              type="time" 
              value={time} 
              onChange={(e) => setTime(e.target.value)} 
              className="form-input" 
            />

            <button type="submit" className="submit-button">ثبت رزرو</button>
          </form>
        </div>
      </div>

      {/* عکس */}
      <div className="reservation-image">
        <img src="/images/2.jpg" alt="سالن زیبایی" className="image" />
      </div>

      <style jsx>{`
        .reservation-container {
          display: flex;
          flex-direction: row;
          min-height: 100vh;
          width: 100%;
          font-family: 'Vazir', sans-serif;
          direction: ltr;
        }

        .reservation-form {
          flex: 1.2;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
          background: rgba(255, 245, 250, 0.9);
          background-image: linear-gradient(135deg, #fff5fa 0%, #fceef7 100%);
          order: 2;
        }

        .reservation-form-container {
          width: 100%;
          max-width: 500px;
          padding: 40px;
          background: white;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(126, 63, 118, 0.15);
          direction: rtl;
        }

        .reservation-form-title {
          text-align: center;
          margin-bottom: 25px;
          color: #7e3f76;
          font-size: 1.8rem;
        }

        .form-section-title {
          margin-top: 20px;
          margin-bottom: 10px;
          color: #7e3f76;
          font-size: 1.2rem;
        }

        .form-label {
          display: block;
          margin-bottom: 6px;
          font-weight: 600;
          color: #7e3f76;
        }

        .form-input {
          width: 100%;
          padding: 12px;
          font-size: 16px;
          border-radius: 8px;
          border: 2px solid #e8cfe0;
          margin-bottom: 20px;
          cursor: pointer;
          transition: border-color 0.3s ease;
          box-sizing: border-box;
          text-align: right;
          font-family: 'Vazir', sans-serif;
        }

        .form-input:focus {
          border-color: #d291bc;
          outline: none;
        }

        .submit-button {
          margin-top: 25px;
          width: 100%;
          padding: 15px;
          border: none;
          border-radius: 30px;
          font-size: 18px;
          font-weight: bold;
          background: linear-gradient(135deg, #d291bc, #c47ba5);
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: 'Vazir', sans-serif;
        }

        .submit-button:hover {
          background: linear-gradient(135deg, #c47ba5, #d291bc);
        }

        .checkbox-container {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 20px;
        }

        .checkbox-label {
          display: flex;
          justify-content: flex-start;
          gap: 10px;
          cursor: pointer;
          align-items: center;
          direction: rtl;
        }

        .checkbox-input {
          cursor: pointer;
          width: 18px;
          height: 18px;
          order: 2;
          flex-shrink: 0;
        }

        .checkbox-text {
          order: 1;
          text-align: right;
        }

        .reservation-image {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background-color: #f9f3f8;
          order: 1;
        }

        .image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* استایل‌های موبایل */
        @media (max-width: 768px) {
          .reservation-container {
            flex-direction: column;
            padding-top: 70px;
          }

          .reservation-form {
            order: 1;
            width: 100%;
            padding: 20px 15px;
            min-height: auto;
          }

          .reservation-form-container {
            padding: 20px;
            max-width: 100%;
            margin: 0;
            width: 100%;
            box-sizing: border-box;
          }

          .reservation-image {
            order: 2;
            width: 100%;
            height: 40vh;
            min-height: 300px;
            display: flex;
          }

          .reservation-form-title {
            font-size: 1.6rem;
          }

          .form-section-title {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 480px) {
          .reservation-container {
            padding-top: 60px;
          }

          .reservation-form {
            padding: 15px 10px;
          }

          .reservation-form-container {
            padding: 15px;
          }

          .reservation-image {
            height: 35vh;
            min-height: 250px;
          }

          .reservation-form-title {
            font-size: 1.5rem;
          }

          .form-section-title {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
}

// کامپوننت اصلی صفحه با Suspense
export default function ReservationPage() {
  return (
    <Suspense fallback={<div className="loading">در حال بارگذاری...</div>}>
      <ReservationContent />
    </Suspense>
  );
}