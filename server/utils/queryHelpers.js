const getPaginationParams = (query) => {
    const page = Math.max(1, parseInt(query.page) || 1);
    const limit = Math.min(
        100,
        Math.max(1, parseInt(query.limit) || 10)
    );
    const skip = (page - 1) * limit;

    return { page, limit, skip };
};

const getPaginationMetadata = (page, limit, total) => {
    const totalPages = Math.ceil(total / limit);
    const hasNextPage = page < totalPages;
    const hasPrevPage = page > 1;

    return {
        currentPage: page,
        totalPages,
        totalRecords: total,
        recordsPerPage: limit,
        hasNextPage,
        hasPrevPage,
    };
};

const buildFilterQuery = (query, allowedFields = []) => {
    const filter = {};

    allowedFields.forEach(field => {
        if (query[field] !== undefined && query[field] !== null && query[field] !== '') {
            filter[field] = query[field];
        }
    });

    return filter;
};

const buildSearchQuery = (searchTerm, searchableFields = []) => {
    if (!searchTerm || searchableFields.length === 0) {
        return {};
    }

    return {
        $or: searchableFields.map(field => ({
            [field]: { $regex: searchTerm.trim(), $options: 'i' }
        }))
    };
};

module.exports = {
    getPaginationParams,
    getPaginationMetadata,
    buildFilterQuery,
    buildSearchQuery,
};
