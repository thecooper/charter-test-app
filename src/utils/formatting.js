export const formatCurrency = (amount) => Intl.NumberFormat("en-us", { style: "currency", currency: "USD" }).format(amount);

export const formatNumber = (amount) => Intl.NumberFormat("en-us").format(amount);
