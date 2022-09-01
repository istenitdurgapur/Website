/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "127.0.0.1",
      "http://13.127.85.83",
      "https://backend.istenitdgp.com/",
      "https://istenitdgp.pythonanywhere.com"
    ],
  },
}

module.exports = nextConfig
