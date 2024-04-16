/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'overhear.cdn.prismic.io',

            },
        ],
    },
};

export default nextConfig;
