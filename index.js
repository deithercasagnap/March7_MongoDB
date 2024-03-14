const express = require('express');

const mongoose = require('mongoose');

const app = express();

const uri = "mongodb+srv://cluster0.4exlrk4.mongodb.net/RestAPIpractice";


app.use(express.json());

mongoose.connect(uri, {
    appName: 'Cluster0',
    user: 'dcasagnap1',
    pass: 'dcasagnap1'
})
.then(() => {
    console.log('MongoDB Connected Successfully...')
})
.catch((err) => {
    console.log('Error connecting to MongoDB: ',   err);
});




const EmployeeRoute = require('./Routes/Employee.route');
app.use(('/employees'), EmployeeRoute);


const UserRoute = require('./Routes/Users.route');
app.use('/user', UserRoute);

app.listen(3000, () => {
    console.log('Listening to port 3000...')

});