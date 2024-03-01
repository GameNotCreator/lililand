/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
    dest: "public",
    // cacheOnFrontEndNav: true,
    // aggressiveFrontEndNavCaching: true,
    // reloadOnOnline: true,
    // swcMinify: true,
    // disable: false,
    // workboxOptions: {
    //   disableDevLogs: true,
    // },
  });

const nextConfig = {
}

module.exports = withPWA(nextConfig)
