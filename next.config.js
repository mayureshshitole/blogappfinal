const withPWA = require("next-pwa");
const prod = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: [
      "i.ytimg.com",
      "yt3.ggpht.com",
      "https://youtube.com",
      "https://media.graphcms.com",
    ],
    loader: "imgix",
    path: "",
  },
  trailingSlash: true,
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: prod ? false : true,
  },
});
