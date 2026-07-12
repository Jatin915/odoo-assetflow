const isValidObjectId = (id) => {
    return /^[0-9a-fA-F]{24}$/.test(id);
};

const slugify = (str) => {
    return str
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');
};

const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

const sanitizeEmail = (email) => {
    return email.toLowerCase().trim();
};

const truncateString = (str, length, suffix = '...') => {
    if (str.length > length) {
        return str.slice(0, length).concat(suffix);
    }
    return str;
};

const generateRandomString = (length = 10) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
};

module.exports = {
    isValidObjectId,
    slugify,
    capitalizeFirstLetter,
    sanitizeEmail,
    truncateString,
    generateRandomString,
};
