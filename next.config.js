/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // This enables static export
  optimizeCss: false,
  trailingSlash: true, // Helps with S3 routing
  images: {
    unoptimized: true, // Required for static export with next/image
  },
    // Отключает оптимизацию CSS (поможет, но увеличит размер)
    optimizeCss: false,
    
    // Убирает минификацию CSS
    swcMinify: false,
    
    // Если используете SASS
    sassOptions: {
        includePaths: ['./public/assets/scss'],
    },
    
    // Экспериментальные настройки
    experimental: {
        optimizeCss: false,
    },
}

module.exports = nextConfig
