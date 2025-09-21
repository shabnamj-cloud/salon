import Head from 'next/head';
import Image from 'next/image';

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
            filter: 'blur(20px)',     // محو کردن
            transform: 'scale(1.1)',  // کمی بزرگتر تا لبه‌ها خالی نشه
            zIndex: 0,
          }}
        >
          <Image
            src="/images/3.jpg"
            alt="Background blurred"
            layout="fill"
            objectFit="cover"
            priority
            quality={75}
          />
        </div>

        {/* عکس اصلی، کامل و بدون برش */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '100%',
            height: '100%',
            maxWidth: '100%',
            maxHeight: '100%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1,
          }}
        >
          <Image
            src="/images/3.jpg"
            alt="Background"
            layout="fill"
            objectFit="contain"
            priority
            quality={100}
          />
        </div>
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
        {/* محتوای شما اینجا */}
      </main>
    </>
  );
}
