/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Required for Next.js 13+ static export
  images: {
    unoptimized: true, // Optional if you use <Image> from next/image
  },
};

module.exports = nextConfig;
