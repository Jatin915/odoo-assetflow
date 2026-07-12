const fs = require('fs');
const path = require('path');

const fileExists = (filePath) => {
    return fs.existsSync(filePath);
};

const createDirectory = (dirPath) => {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
        return true;
    }
    return false;
};

const readFile = (filePath, encoding = 'utf-8') => {
    try {
        return fs.readFileSync(filePath, encoding);
    } catch (err) {
        console.error(`Error reading file: ${filePath}`, err.message);
        return null;
    }
};

const writeFile = (filePath, content) => {
    try {
        fs.writeFileSync(filePath, content, 'utf-8');
        return true;
    } catch (err) {
        console.error(`Error writing file: ${filePath}`, err.message);
        return false;
    }
};

const deleteFile = (filePath) => {
    try {
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
            return true;
        }
        return false;
    } catch (err) {
        console.error(`Error deleting file: ${filePath}`, err.message);
        return false;
    }
};

const getFileExtension = (filePath) => {
    return path.extname(filePath).toLowerCase();
};

const getFileName = (filePath) => {
    return path.basename(filePath);
};

const getFileSize = (filePath) => {
    try {
        const stats = fs.statSync(filePath);
        return stats.size;
    } catch (err) {
        console.error(`Error getting file size: ${filePath}`, err.message);
        return null;
    }
};

module.exports = {
    fileExists,
    createDirectory,
    readFile,
    writeFile,
    deleteFile,
    getFileExtension,
    getFileName,
    getFileSize,
};
