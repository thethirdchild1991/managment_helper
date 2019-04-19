const express       = require('express');
const cors          = require('cors');
const bodyParser    = require("body-parser");
const Models        = require('./db')

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

app.get('/selectAllProjects', (req, res) => {
    console.log("selectAllProjects")
    // res.json( DefaultProjectsList )
    // res.send('Hello World!')
    // ProjectModel.find().lean().exec(function(err,docs){
    //     if(err){
    //         console.log(err)
    //     }else{
    //         // console.log((JSON.stringify(docs)))
    //         res.json(docs)
    //         // return res.end(JSON.stringify(docs));
    //     }
    // });
})

app.post('/signin',function(req,res){
    console.log('signIn:', req.body);

    res.end("yes");
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

    res.end("yes");
});

app.post('/createproject',function(req,res){    
    const newPro = new Models.ProjectModel(req.body);    
    newPro.save().then(
        () => {
            ProjectModel.find().lean().exec(function(err,docs){
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
    res.end("yes");
});

app.post('/createdeveloper',function(req,res){
    console.log('createDeveloper: ', req.body);
    res.end("yes");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))










