"use client";
import Head from "next/head";
import { useState } from "react";
import ServiceSection from "../componenets/servicesection";
import GalleryModal from "../componenets/gallerymodal";

export default function ServicesPage() {
  const [selectedGallery, setSelectedGallery] = useState(null);

  const servicesData = [
    {
      title: "کوتاهی مو",
      description: "مدل‌های روز دنیا برای کوتاهی مو با تکنیک‌های حرفه‌ای.",
      imageUrl: "/images/01.jpg",
      height: 740,
      marginBottom: 100,
      gallery: ["/images/014.jpg", "/images/012.webp","/images/013.jpg"]
    },
    {
      title: "رنگ و هایلایت مو",
      description: "رنگ‌های متنوع و هایلایت‌های زیبا برای جلوه‌ای خاص.",
      imageUrl: "/images/02.jpg",
      height: 700,
      marginBottom: 100,
      gallery: ["/images/021.jpg", "/images/022.jpg","/images/023.jpg"]
    },
    {
      title: "میکاپ و آرایش صورت",
      description: "گریم و آرایش حرفه‌ای برای مهمانی‌ها و مجالس.",
      imageUrl: "/images/03.jpg",
      height: 750,
      marginBottom: 100,
      gallery: ["/images/031.jpg","/images/032.jpg"] // گالری خالی
    },
    {
      title: "مراقبت پوست و زیبایی",
      description: "خدمات پوستی شامل ماسک، پاکسازی و مراقبت کامل.",
      imageUrl: "/images/04.jpg",
      height: 700,
      marginBottom: 100,
      gallery: ["/images/041.jpg","/images/042.jpg"]
    }
  ];

  return (
    <>
      <Head>
        <title>خدمات سالن زیبایی باران</title>
        <link
          href="https://cdn.jsdelivr.net/gh/rastikerdar/vazir-font@30.1.0/dist/font-face.css"
          rel="stylesheet"
        />
      </Head>

      <main style={{ padding: "60px 20px 100px", fontFamily: "'Vazir', sans-serif", backgroundColor: "#fad1e9ff"}}>
        {/* عنوان صفحه */}
        <div style={headerStyle}>
          <h1 style={titleStyle}>خدمات زیبایی باران</h1>
          <p style={subtitleStyle}>با بهترین خدمات زیبایی در محیطی آرامش‌بخش، زیبایی را تجربه کنید</p>
          <div style={dividerStyle}></div>
        </div>

        {servicesData.map((service, index) => (
          <ServiceSection
            key={index}
            {...service}
            onOpenGallery={() => {
              if (Array.isArray(service.gallery) && service.gallery.length > 0) {
                setSelectedGallery(service.gallery);
              } else {
                alert("هیچ عکسی برای این خدمت موجود نیست");
              }
            }}
          />
        ))}

        {selectedGallery && (
          <GalleryModal
            images={selectedGallery}
            onClose={() => setSelectedGallery(null)}
          />
        )}
      </main>
    </>
  );
}

// استایل‌های عنوان
const headerStyle = {
  textAlign: "center",
  marginBottom: "60px",
  padding: "0 20px"
};

const titleStyle = {
  fontSize: "2.8rem",
  fontWeight: "bold",
  color: "#7e3f76",
  marginBottom: "15px",
  textShadow: "1px 1px 3px rgba(0,0,0,0.1)"
};

const subtitleStyle = {
  fontSize: "1.2rem",
  color: "#9d6389",
  marginBottom: "25px",
  lineHeight: "1.6",
  maxWidth: "600px",
  margin: "0 auto"
};

const dividerStyle = {
  height: "4px",
  width: "80px",
  backgroundColor: "#d291bc",
  margin: "20px auto",
  borderRadius: "2px"
};