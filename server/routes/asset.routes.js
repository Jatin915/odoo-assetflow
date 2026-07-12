const router = require('express').Router();
const {
    createAsset,
    getAssets,
    getAssetById,
    updateAsset,
    deleteAsset,
} = require('../controllers/asset.controller');

router.post('/', createAsset);
router.get('/', getAssets);
router.get('/:id', getAssetById);
router.put('/:id', updateAsset);
router.delete('/:id', deleteAsset);

module.exports = router;
