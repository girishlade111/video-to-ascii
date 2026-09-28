/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/video-to-ascii',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig