var express = require('express')
var moongose = require('mongoose')

var app = express()

app.use(express.json())

app.listen(8001, ()=> `server start in port :8001`)

moongose.connect('mongodb+srv://Manuelca:89145091779@cluster0.mut5n.mongodb.net/my_db?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(()=> console.log('connect succses'))
    .catch((err) => console.log('connect drop' + err))

const studentsSchema= new moongose.Schema({
    name:{
        type:String,
        required: true,
    },
    group:{
        type:String,
        required: true,
    },
    rating:{
        type:String,
        required: true,
    }
});
const teachSchema= new moongose.Schema({
    name:{
        type:String,
        required: true,
    },
    pass:{
        type:String,
        required: true,
    }
});
const students = moongose.model('students', studentsSchema);
const teach = moongose.model('teach', teachSchema);

app.get('/register-student', (req,res) =>{
    students.create({
        name:'Иванов Иван',
        group:'test',
    })
        res.send(students)

});

app.get('/find-students', (req, res) => {
    students.find()
        .then(students => res.send(students))
        .catch(err => res.send(err))
});



app.get('/', function (req,res) {
    res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    })
    res.send('hello')
})

app.post('/find', (req,res) =>{
    res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, json, Content-Type, Accept',
    })
    var userName = req.body.username
    var group = req.body.group
    students.findOne({name: userName, group:group}, function(err,obj){
        if (obj === null){
            res.send('false')
        }else if (obj.name === userName){
            res.send('true')
        }
    })
})
app.post('/find-teach', (req,res) =>{
    res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, json, Content-Type, Accept',
    })
    var userName = req.body.username
    var group = req.body.password
    students.findOne({name: userName, group:group}, function(err,obj){
        console.log(obj)
        if (obj === null){
            res.send('false')
        }else if (obj.name === userName){
            res.send('true')
        }
    })
})

app.post('/updateUser', (req,res) =>{
    res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, json, Content-Type, Accept',
    })
    var username = req.body.username
    var group = req.body.group
    var rating = req.body.rating
    console.log(`${username}  ${group}  ${rating}`)
    students.updateOne(
        {name: `${username}`, group:`${group}`},              // критерий выборки
        { $set: {rating : `${rating}`}},     // параметр обновления
        {                           // доп. опции обновления
            returnOriginal: false
        },
        function(err, result){
            console.log(result + err);
})    })