/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "127.0.0.1",
      "https://istenitdgp.pythonanywhere.com",
      "https://backend.istenitdgp.com/"
    ],
  },
}

module.exports = nextConfig
