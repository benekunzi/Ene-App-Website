/** @type {import('next').NextConfig} */
const nextConfig = {
  typedRoutes: true,
  experimental: { serverActions: { allowedOrigins: ['*'] } }
};
export default nextConfig;
