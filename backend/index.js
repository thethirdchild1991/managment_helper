const express       = require('express');
const cors          = require('cors');
const bodyParser    = require("body-parser");
const Models        = require('./db')
const mongoose = require('mongoose');

//-------------------------------------------
const app = express();
const port = 5000;

class Project {
    constructor(){
        this.props = {};
        this.props.agent = 'контрагент';
        this.props.client = 'Заказчик';
        this.props.project = 'Проект';
        this.props.technology = 'Технологии';
        this.props.status = 'Статус';
        this.props.manager = 'Менеджер';
        this.props.project_engineer = 'Проектный инженер';
    }
};

const DefaultProjectsList = [];
for( let i = 0; i < 3; i++ ){
    DefaultProjectsList.push( new Project() );
}

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(( req, res, next) => {
    console.log(req.path)
    next()
})

app.get('/selectAllProjects', (req, res) => {    
    Models.ProjectModel.find( {}, (err,users) => {
        if(err){
            console.log(err)
        }else{
            res.send(users)
        }
    })
})
app.get('/selectProject', (req, res) => {    
    Models.ProjectModel.findById( req.query['id'],(err, doc) =>{        
        res.send(doc)
    })

});

app.get('/selectAllUsers', (req, res) => {
    Models.UserModel.find( {}, (err,users) => {
        if(err){
            console.log(err)
        }else{
            res.send(users)
        }
    })
});

app.get('/selectUser', (req, res) => {    
    Models.UserModel.findById(req.query['id'],(err, doc) => {        
        res.send(doc)
    });
});

app.post('/signin',function(req,res){    
    Models.UserModel.count({username: req.body.username}, (err,count) =>{
        console.log(`found : ${count}`)
        let status = false;
        if( count === 0){
            status = 'wrong username'
        }
        if( count === 1){
            status = true   
        }
        res.json({ 'loggedIn' :  status })
    })
});

app.post('/singup',function(req,res){    
    const newUser = new Models.UserModel(req.body);
    newUser.save().then(
        () => {
            Models.UserModel.find().lean().exec(
                (err, docs) => {
                    if(err){
                        console.log(err)
                    }else{
                        console.log(docs)
                    }                
            })
        })    
    res.json({'status' : 'OK'})
});

app.post('/createproject',function(req,res){    
    const newPro = new Models.ProjectModel(req.body);    
    newPro.save().then(
        () => {
            res.json({'status' : 'OK'})        
        })    
    
});

app.post('/updateProject', (req, res) => {    
    Models.ProjectModel.findByIdAndUpdate(
        req.body.id,
        {$set:{client : 'req.body.client'}},
        {new : true},
        (err, doc) =>{
            if(err){
                console.log(err)
            }else{            
                console.log(doc)
                res.json(doc)
            }
        })    
})

app.post('/updateUser', (req, res) => {    
    Models.UserModel.findByIdAndUpdate(
        req.body.id,
        {$set:{role : 'req.body.client'}},
        {new : true},
        (err, doc) =>{
            if(err){
                console.log(err)
            }else{            
                console.log(doc)
                res.json(doc)
            }
        })    
})

app.post('/deleteProject', (req, res) => {    
    Models.ProjectModel.findByIdAndDelete(
        req.body.id,                
        (err, doc) =>{
            if(err){
                console.log(err)
            }else{            
                console.log(doc)
                res.json({'status' : 'ok'})
            }
        })    
})

app.post('/deleteUser', (req, res) => {    
    Models.UserModel.findByIdAndDelete(
        req.body.id,                
        (err, doc) =>{
            if(err){
                console.log(err)
            }else{            
                console.log(doc)
                res.json({'status' : 'ok'})
            }
        })    
})

app.post('/createdeveloper',function(req,res){    
    const newUser = new Models.UserModel(req.body);    
    newUser.save().then(
        () => {
            res.json({'status' : 'OK'})
        })    
    
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))










