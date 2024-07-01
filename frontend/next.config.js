/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "saikrishnagaddam.pythonanywhere.com",
      "127.0.0.1:8000",
      "13.127.85.83",
      "backendistenitdgp.pythonanywhere.com",
      "istenitdgp.pythonanywhere.com"
    ],
  },
}

module.exports = nextConfig
