const express       = require('express');
const cors          = require('cors');
const bodyParser    = require("body-parser");
const Models        = require('./db')
const mongoose      = require('mongoose');
const routes        = require('./routes')

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
app.use(routes)


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


app.post('/createdeveloper',function(req,res){    
    const newUser = new Models.UserModel(req.body);    
    newUser.save().then(
        () => {
            res.json({'status' : 'OK'})
        })    
    
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))










