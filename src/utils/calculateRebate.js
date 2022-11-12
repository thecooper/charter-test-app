const RebateCalculators = [
    tier1RebateCalculator,
    tier2RebateCalculator
]

/**
 * @name calculateRebate
 * @param {{id: number, amount: number, date: string}} transaction
 * @returns {number} Calculated rebate amount for the transaction
 */

export function calculateRebate(transaction) {
    const roundedTransactionAmount = Math.floor(transaction.amount);

    const rebateAmount = RebateCalculators.reduce(
        (earnedRebates, rebateProcessor) => earnedRebates + rebateProcessor(roundedTransactionAmount), 0
    );

    return rebateAmount;
}

/**
 * @name tier1RebateCalculator
 * @param {number} amount The dollar amount to calculate rebate amounts on
 * @description Calculates rebates for 1st tier: 1 point per $1 above $50 up to $100
 * @returns {number}
 */
function tier1RebateCalculator(amount) {
    if (amount > 100) {
        return 50;
    } else if (amount <= 50) {
        return 0;
    } else {
        return amount - 50;
    }
}

/**
 * @name tier2RebateCalculator
 * @param {number} amount The dollar amount to calculate rebate amounts on
 * @description Calculates rebates for 2nd tier: 2 points per $1 above $100
 * @returns {number}
 */
function tier2RebateCalculator(amount) {
    if (amount < 100) {
        return 0;
    } else {
        return (amount - 100) * 2;
    }
}
