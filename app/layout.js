import Header from './componenets/header';
import Footer from './componenets/footer';

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body style={{
        margin: 0,
        padding: 0,
        fontFamily: 'Vazir, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh', // کل ارتفاع صفحه
      }}>
        <Header />
        <main style={{ flex: 1, paddingTop: '80px' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
