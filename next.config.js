/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // This enables static export
  trailingSlash: true, // Helps with S3 routing
  images: {
    unoptimized: true, // Required for static export with next/image
  },
}

module.exports = nextConfig
