const router = require('express').Router();
const { googleSignup, googleLogin } = require('../controllers/google.controller');

router.post('/google-signup', googleSignup);
router.post('/google-login', googleLogin);

module.exports = router;