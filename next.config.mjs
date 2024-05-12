/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'overhear.cdn.prismic.io',

            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',

            },
            {
                protocol: 'https',
                hostname: 'images.prismic.io',

            },
        ],
    },
};

export default nextConfig;
