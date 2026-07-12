const router = require('express').Router();
const { protect } = require('../middlewares/authMiddleware');
const {
    createAuditCycle,
    getAuditCycles,
    getAuditCycleById,
    updateAuditCycle,
    deleteAuditCycle,
} = require('../controllers/auditCycle.controller');

router.use(protect);

router.post('/', createAuditCycle);
router.get('/', getAuditCycles);
router.get('/:id', getAuditCycleById);
router.put('/:id', updateAuditCycle);
router.delete('/:id', deleteAuditCycle);

module.exports = router;
