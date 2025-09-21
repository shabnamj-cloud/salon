'use client';

import Image from 'next/image';
import '../css/about.css'; // استایل معمولی

export default function AboutPage() {
  return (
    <main className="aboutPage">

      {/* Hero Section */}
      <section className="heroSection">
        <h1 className="heroTitle">درباره آرایشگاه باران</h1>
      </section>

      {/* About Section */}
      <section className="aboutSection">
        <div className="aboutContent">
          <div className="textBlock">
            <h2>آرایشگاه باران</h2>
            <p>
              آرایشگاه باران با بیش از ۱۰ سال تجربه در زمینه زیبایی و مراقبت از پوست و مو،
              مفتخر است تا بهترین خدمات را به شما عزیزان ارائه دهد.
              تیم حرفه‌ای ما با استفاده از متدهای روز دنیا و محصولات با کیفیت،
              تجربه‌ای فراموش‌نشدنی برای شما رقم می‌زند.
            </p>
          </div>
          <div className="imageBlock">
            <Image
              src="/images/7.jpeg"
              alt="سالن زیبایی"
              width={700}
              height={350}
              className="aboutImage"
              priority
            />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallerySection">
        <h2 className="galleryTitle">نمونه کارها</h2>
        <div className="galleryGrid">
          <div className="galleryItem">
            <Image
              src="/images/51.jpg"
              alt="نمونه کار ۱"
              width={300}
              height={300}
              className="galleryImage"
            />
          </div>
          <div className="galleryItem">
            <Image
              src="/images/52.jpg"
              alt="نمونه کار ۲"
              width={300}
              height={300}
              className="galleryImage"
            />
          </div>
          <div className="galleryItem">
            <Image
              src="/images/53.webp"
              alt="نمونه کار ۳"
              width={300}
              height={300}
              className="galleryImage"
            />
          </div>
        </div>
      </section>

    </main>
  );
}