/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "127.0.0.1",
      "13.127.85.83",
      "backend.istenitdgp.com",
      "istenitdgp.pythonanywhere.com"
    ],
  },
}

module.exports = nextConfig
