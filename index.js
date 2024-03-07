const express = require('express');

const mongoose = require('mongoose');

const app = express();

const uri = "mongodb+srv://deithercasagnap:deithercasagnap@interactivity.5etkxwg.mongodb.net/?retryWrites=true&w=majority&appName=InterActivity";


mongoose.connect(uri)
.then(() => {
    console.log('MongoDB Connected Successfully...')
})
.catch((err) => {
    console.log('Error connecting to MongoDB: ',   err);
});




const EmployeeRoute = require('./Routes/Employee.route');
app.use(('/employee'), EmployeeRoute);


const UserRoute = require('./Routes/Users.route');
app.use('/user', UserRoute);

app.listen(3000, () => {
    console.log('Listening to port 3000...')

});