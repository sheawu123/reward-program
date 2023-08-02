import { transactionsDemo } from "../constants/transactionsDemo";

export const fetchAllTransactions = () => {
  return new Promise((resolve) => resolve(transactionsDemo));
};
