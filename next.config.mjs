/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // For custom domain, no basePath needed
  // If deploying to username.github.io/repo-name, uncomment:
  // basePath: '/ai-agents-edisontkp',
};

export default nextConfig;
