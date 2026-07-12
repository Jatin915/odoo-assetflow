const router = require('express').Router();
const { protect } = require('../middlewares/authMiddleware');
const {
    createActivityLog,
    getActivityLogs,
    getActivityLogById,
    updateActivityLog,
    deleteActivityLog,
} = require('../controllers/activitylog.controller');

router.use(protect);

router.post('/', createActivityLog);
router.get('/', getActivityLogs);
router.get('/:id', getActivityLogById);
router.put('/:id', updateActivityLog);
router.delete('/:id', deleteActivityLog);

module.exports = router;
