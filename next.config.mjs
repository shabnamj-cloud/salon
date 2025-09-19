/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'images.pexels.com',   // دامنه تصاویر سالن زیبایی
      'images.unsplash.com',  // اگر بخواهید از Unsplash هم استفاده کنید
      'cdn.pixabay.com'       // اگر بخواهید از Pixabay هم استفاده کنید
    ],
  },
};

export default nextConfig;
