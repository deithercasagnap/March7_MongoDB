const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    res.send('Get all users');
})

module.exports = router;

