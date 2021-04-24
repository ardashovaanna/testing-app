var express = require('express')
var moongose = require('mongoose')

var app = express()

app.use(express.json())

app.listen(8000, ()=> `server start in port :8000`)

moongose.connect('mongodb+srv://Manuelca:89145091779@cluster0.mut5n.mongodb.net/my_db?retryWrites=true&w=majori',{
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
    }
});

const students = moongose.model('students', studentsSchema);

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
