const express = require('express');
const router = express.Router();

//register
router.get('/register', (req, res, next) => {
    res.send('REGISTER');
});

//authentication
router.post('/authenticate', (req, res, next) => {
    res.send('authenticate');
});
//profile
router.get('/profile', (req, res, next) => {
    res.send('profile');
});

router.get('/validate', (req, res, next) => {
    res.send('validate');
});

module.exports = router;