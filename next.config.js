/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
  env: {
  },
  eslint: {
    dirs: ['src', 'cypress'],
  },
};

module.exports = nextConfig;
