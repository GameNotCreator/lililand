/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['instagram.ftun1-2.fna.fbcdn.net', 'i.imgur.com'],
    },
    env: {
        LOGO: 'https://i.imgur.com/572vqhd.jpg',
    }
}

module.exports = nextConfig
