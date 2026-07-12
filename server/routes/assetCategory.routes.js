const router = require('express').Router();
const {
    createAssetCategory,
    getAssetCategories,
    getAssetCategoryById,
    updateAssetCategory,
    deleteAssetCategory,
} = require('../controllers/assetCategory.controller');

router.post('/', createAssetCategory);
router.get('/', getAssetCategories);
router.get('/:id', getAssetCategoryById);
router.put('/:id', updateAssetCategory);
router.delete('/:id', deleteAssetCategory);

module.exports = router;
