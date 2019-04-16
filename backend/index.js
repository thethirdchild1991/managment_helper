// const express = require('express')
// const app = express()


// app.set('json spaces', 40);

// app.get('/', (req, res) => {
//     console.log("puts")
//     res.json( { responce : 'test'} )
//     // res.send('Hello World!')
// })

// app.listen(port, () => console.log(`Example app listening on port ${port}!`))

const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const ProjectModel = require('./db')


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
app.get('/', (req, res) => {
    console.log("puts")
    // res.json( DefaultProjectsList )
    // res.send('Hello World!')
    ProjectModel.find().lean().exec(function(err,docs){
        if(err){
            console.log(err)
        }else{
            // console.log((JSON.stringify(docs)))
            res.json(docs)
            // return res.end(JSON.stringify(docs));
        }
    });
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))