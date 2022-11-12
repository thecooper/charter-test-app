import { userTransactions } from "../data";

export function getUserTransactions() {
    return Promise.resolve(userTransactions);
}