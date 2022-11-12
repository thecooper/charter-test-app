import moment from "moment";
import { useMemo } from "react";
import { calculateRebate } from "../utils/calculateRebate";
import { getMonthName } from "../utils/dateFormatting";

/**
 * @name useRebateTotal
 * @param {{ id: number, name: string, joinDate: "string", transactions: Array<{id: number, amount: number, date: string}>}} user
 * @returns {Array<{ month: string, rebateAmount: number }>}
 */
export function useUserRebatesByMonth(user) {
    return useMemo(() => {
        const { transactions } = user;

        const transactionsByMonth = transactions
            .reduce((lookup, transaction) => {
                const monthValue = moment(transaction.date).month();

                if (!lookup[monthValue]) {
                    lookup[monthValue] = 0;
                }

                const rebateAmount = calculateRebate(transaction);
                lookup[monthValue] += rebateAmount;

                return lookup;
            }, [])
            .map((rebateAmount, monthValue) => ({
                month: getMonthName(monthValue),
                rebateAmount
            }));

        return transactionsByMonth;
    }, [user])
}