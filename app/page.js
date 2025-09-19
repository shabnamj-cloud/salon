import Head from 'next/head';


export default function Home() {
  return (
    <>
      <Head>
        <title>صفحه اصلی</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>{`
          html, body, #__next {
            margin: 0;
            padding: 0;
            height: 100%;
            width: 100%;
            overflow: hidden;
          }
        `}</style>
      </Head>

      {/* کانتینر اصلی */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, overflow: 'hidden' }}>
        
        {/* لایه‌ی بلور برای پر کردن صفحه */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: "url('/images/3.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(20px)',     // محو کردن
            transform: 'scale(1.1)',  // کمی بزرگتر تا لبه‌ها خالی نشه
          }}
        ></div>

        {/* عکس اصلی، کامل و بدون برش */}
        <img
          src="/images/3.jpg"
          alt="Background"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            maxWidth: '100%',
            maxHeight: '100%',
            transform: 'translate(-50%, -50%)',
            objectFit: 'contain',
            zIndex: 1,
          }}
        />
      </div>

      {/* محتوای صفحه */}
      <main
        style={{
          position: 'relative',
          zIndex: 2,
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
        }}
      >
        
      </main>
    </>
  );
}
