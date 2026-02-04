/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "*.googleusercontent.com",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com",
                pathname: "/**",
            }
        ],
    },
    // Standard Prisma support for serverless
    serverExternalPackages: ['@prisma/client'],
    // Force inclusion of Prisma engines in the output bundle
    outputFileTracingIncludes: {
        '/**': ['./src/generated/prisma/libquery_engine-*'],
    },
};

export default nextConfig;
