/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate");
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};

module.exports = { ...nextConfig, ...nextTranslate() };
