import { PrismaClient } from '../generated/prisma';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

console.log("Initializing Prisma Client from local source (Source Bundling Mode)...");

export const prisma = globalForPrisma.prisma || new PrismaClient({
    log: process.env.NODE_ENV === 'production' ? ['error'] : ['error', 'warn'],
    datasources: {
        db: {
            url: process.env.DATABASE_URL,
        },
    },
    // Optimize for serverless environments (Vercel)
    // @ts-ignore - These options are valid but not in types
    __internal: {
        engine: {
            // Connection pool settings for serverless
            connection_limit: 10,
            pool_timeout: 10,
        },
    },
});

// Ensure singleton pattern in all environments
if (process.env.NODE_ENV !== 'production') {
    globalForPrisma.prisma = prisma;
} else {
    // In production, also use singleton to prevent connection exhaustion
    if (!globalForPrisma.prisma) {
        globalForPrisma.prisma = prisma;
    }
}

// Graceful shutdown handler
if (typeof window === 'undefined') {
    process.on('beforeExit', async () => {
        await prisma.$disconnect();
    });
}
