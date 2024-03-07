const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) =>  {
    res.send('List of all Employees');

});

router.post('/', (req, res, next) => {
    res.send('Create an employee');
});

router.patch('/:id', (req, res, next) => {
    res.send('Update a specific employee using PATCH Method')
});

router.put('/', (req,res,next) => {
    res.send('Update one employee using PUT Method')
})


module.exports = router;