/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        remotePatterns: [
            { protocol: 'https', hostname: 'img.clerk.com' },
            { protocol: 'https', hostname: 'dcpebrcnnuvungqjgwxy.supabase.co' },
        ],
    },
};

export default nextConfig;
