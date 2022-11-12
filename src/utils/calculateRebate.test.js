import { calculateRebate } from "./calculateRebate"

describe("calculateRebate()", () => {
    it.each([
        [0, 0],
        [0, 50],
        [1, 51],
        [25, 75],
        [49, 99],
        [50, 100],
        [90, 120]
    ])("should calculate a rebate value of %s for %s dollar value", (rebateAmount, transactionAmount) => {
        // Arrange

        // Act
        const result = calculateRebate({ id: 1, userId: 1, amount: transactionAmount, date: "" });

        // Assert
        expect(result).toBe(rebateAmount);
    })
})