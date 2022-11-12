import moment from "moment";

export const getMonthName = (value) => moment().month(value).format("MMMM");