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
      marginBottom: 60,
      gallery: ["/images/gallery/hair1.jpg", "/images/gallery/hair2.jpg"]
    },
    {
      title: "رنگ و هایلایت مو",
      description: "رنگ‌های متنوع و هایلایت‌های زیبا برای جلوه‌ای خاص.",
      imageUrl: "/images/02.jpg",
      height: 700,
      marginBottom: 50,
      gallery: ["/images/gallery/color1.jpg", "/images/gallery/color2.jpg"]
    },
    {
      title: "میکاپ و آرایش صورت",
      description: "گریم و آرایش حرفه‌ای برای مهمانی‌ها و مجالس.",
      imageUrl: "/images/03.jpg",
      height: 750,
      marginBottom: 60,
      gallery: [] // گالری خالی
    },
    {
      title: "مراقبت پوست و زیبایی",
      description: "خدمات پوستی شامل ماسک، پاکسازی و مراقبت کامل.",
      imageUrl: "/images/04.jpg",
      height: 700,
      marginBottom: 50,
      gallery: ["/images/gallery/skin1.jpg"]
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

      <main style={{ padding: "40px 20px", fontFamily: "'Vazir', sans-serif", backgroundColor: "#8b5218ff"}}>
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
