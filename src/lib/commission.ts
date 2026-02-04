
/**
 * Commission Logic for AI Experts
 * 
 * Structure:
 * 0 - 5,000 NIS: 20%
 * 5,000 - 10,000 NIS: 15%
 * 10,000+ NIS: 10%
 * 
 * Using 3.7 as approximate NIS/USD rate for DB consistency.
 */

export const TIERS = {
    LOW: { limit: 5000, rate: 0.20 },
    MID: { limit: 10000, rate: 0.15 },
    HIGH: { limit: Infinity, rate: 0.10 }
};

const NIS_TO_USD = 3.7;

export function calculateCommission(monthlyVolumeNIS: number) {
    if (monthlyVolumeNIS <= TIERS.LOW.limit) {
        return TIERS.LOW.rate;
    }
    if (monthlyVolumeNIS <= TIERS.MID.limit) {
        return TIERS.MID.rate;
    }
    return TIERS.HIGH.rate;
}

export function convertUsdToNis(usd: number) {
    return Math.round(usd * NIS_TO_USD);
}

export function convertNisToUsd(nis: number) {
    return nis / NIS_TO_USD;
}

export function getNextTierInfo(monthlyVolumeNIS: number) {
    if (monthlyVolumeNIS < TIERS.LOW.limit) {
        return {
            nextLimit: TIERS.LOW.limit,
            remaining: TIERS.LOW.limit - monthlyVolumeNIS,
            nextRate: TIERS.MID.rate,
            currentRate: TIERS.LOW.rate
        };
    }
    if (monthlyVolumeNIS < TIERS.MID.limit) {
        return {
            nextLimit: TIERS.MID.limit,
            remaining: TIERS.MID.limit - monthlyVolumeNIS,
            nextRate: TIERS.HIGH.rate,
            currentRate: TIERS.MID.rate
        };
    }
    return {
        nextLimit: Infinity,
        remaining: 0,
        nextRate: TIERS.HIGH.rate,
        currentRate: TIERS.HIGH.rate
    };
}
