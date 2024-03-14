const express = require('express');
const router = express.Router();


const Employee = require('../Model/Employee.model');



router.get('/', (req, res, next) =>  {
    res.send('List of all Employees');

});

router.post('/', async (req, res, next) => {
    try {
        const employee = new Employee(req.body);
        const result = await employee.save();
        res.send(result);
        
    } catch (error) {
        res.send(error.message);
        
    }
});

router.patch('/:id', (req, res, next) => {
    res.send('Update a specific employee using PATCH Method')
});

router.put('/', (req,res,next) => {
    res.send('Update one employee using PUT Method')
})


module.exports = router;