const getCurrentDate = () => {
    return new Date().toISOString().split('T')[0];
};

const getCurrentDateTime = () => {
    return new Date().toISOString();
};

const formatDate = (date, format = 'YYYY-MM-DD') => {
    if (!date) return null;
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');

    if (format === 'YYYY-MM-DD') {
        return `${year}-${month}-${day}`;
    }
    if (format === 'DD-MM-YYYY') {
        return `${day}-${month}-${year}`;
    }
    if (format === 'MM/DD/YYYY') {
        return `${month}/${day}/${year}`;
    }
    return d.toISOString();
};

const addDays = (date, days) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
};

const subtractDays = (date, days) => {
    const result = new Date(date);
    result.setDate(result.getDate() - days);
    return result;
};

const getDaysDifference = (date1, date2) => {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    const timeDiff = Math.abs(d2 - d1);
    return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
};

const isDateInPast = (date) => {
    return new Date(date) < new Date();
};

const isDateInFuture = (date) => {
    return new Date(date) > new Date();
};

const isDateToday = (date) => {
    const today = new Date();
    const d = new Date(date);
    return d.getDate() === today.getDate() &&
        d.getMonth() === today.getMonth() &&
        d.getFullYear() === today.getFullYear();
};

module.exports = {
    getCurrentDate,
    getCurrentDateTime,
    formatDate,
    addDays,
    subtractDays,
    getDaysDifference,
    isDateInPast,
    isDateInFuture,
    isDateToday,
};
