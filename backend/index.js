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
// console.log(mongoose.ObjectId.isValid('5cbd9fe31b8f223e2cace2dd'))
// Models.ProjectModel.findOne(
//     {_id: '5cbd9fe31b8f223e2cace2dd'},
//     (err, doc) =>{
//         if(err){
//             console.log(err)
//         }else{            
//             console.log(doc)
//         }
//     })



app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/selectAllProjects', (req, res) => {
    console.log("selectAllProjects")
    // res.json( DefaultProjectsList )
    // res.send('Hello World!')
    Models.ProjectModel.find().lean().exec(function(err,docs){
        if(err){
            console.log(err)
        }else{
            // console.log((JSON.stringify(docs)))
            res.json(docs)
            // return res.end(JSON.stringify(docs));
        }
    });
})
app.get('/selectProject', (req, res) => {
    console.log('selectProject', req.query)
    Models.ProjectModel.find({_id : req.query['id']},(err, doc) =>{
        console.log('selectProject count: ', doc)
        res.send(doc)
    })

});

app.post('/signin',function(req,res){
    console.log('signIn:', req.body);
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

    // Models.UserModel.find({username : req.body.username}).lean().exec(
    //     (err,docs) => {
    //         console.log(docs)
    // })

    // res.json({ loggedIn: true })
});

app.post('/singup',function(req,res){
    console.log('singUp: ', req.body);
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

    // res.end("yes");
    res.json({'status' : 'OK'})
});

app.post('/createproject',function(req,res){    
    const newPro = new Models.ProjectModel(req.body);    
    newPro.save().then(
        () => {
            Models.ProjectModel.find().lean().exec(function(err,docs){
                if(err){
                    console.log(err)
                }else{
                    // console.log((JSON.stringify(docs)))
                    console.log(docs)
                    // res.json(docs)
                    // return res.end(JSON.stringify(docs));
                }
            })
        })
    // res.end("yes");
    res.json({'status' : 'OK'})
});

app.post('/updateProject', (req, res) => {
    console.log(req.body)
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

app.post('/deleteProject', (req, res) => {
    console.log(req.body.id)
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

app.post('/createdeveloper',function(req,res){
    console.log('createDeveloper: ', req.body);
    res.end("yes");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))










