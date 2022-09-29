const express = require('express')

const app = express()


const ejs = require('ejs')

app.set('view engine',ejs)

app.get('/',(req,res) => {
    res.render('home-page.ejs')
})


const Employee = require('./db')

app.use(express.json())

const path = require('path')

app.use('/public',express.static(path.join(__dirname + '/public')))


const data = require('./MOCK_DATA.json')
const { exec } = require('child_process')
app.post('/many',async(req,res) => {
    Employee.insertMany(data,(err,saved) => {
        if(err){
            console.log(err)
        }
        res.send('saved..')
    })
})


app.get('/employees',(req,res) => {
    Employee.find({},(err,results) => {
        if(err){
            console.log(err)
        }
        res.send(results)
    })
})

app.get('/employee/:name',(req,res) => {
    const query = req.params.name;
    //console.log('query',query)
    Employee.find({FirstName:query},(err,results) => {
        if(err){
            console.log(err)
        }
        //console.log('results',results)
        res.send(results)
        
    })
})

app.get('/page',async(req,res) => {
    var value = req.query.value
    console.log('value',value)
    
    
    const results = await Employee.find().skip(value).limit(10)
    res.send(results)
    
    
                   
})

app.delete('/employees',(req,res) => {
    Employee.deleteMany({},(err,deleted) => {
        if(err){
            console.log(err)
        }
        res.send(deleted)
    })
})

app.listen(5050,(err)=> {
    if(err){
        console.log(err)
    }
    console.log('server running on port 5050');
})