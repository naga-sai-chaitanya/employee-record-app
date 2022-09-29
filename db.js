const mongoose = require('mongoose')

require('dotenv').config({path:'./config.env'})

const mongoURI = process.env.MONGO_URI


mongoose.connect(mongoURI).then((data) => console.log('Connected to MongoDB...'))
                          .catch((err) => console.log(err))
                                                                                                                      .then(data => console.log('Connected to MongoDB...'))
                                                                                                                      .catch(err => console.log('Error in Connecting to MongoDB!'))

const { Schema } = mongoose

const employeeModel = new Schema({
    id:Number,
    FirstName:String,
    LastName:String,
    Email:String,
    gender:String,
    company:String,
    country:String
})

const Employee = mongoose.model('Employee',employeeModel)

module.exports = Employee;

