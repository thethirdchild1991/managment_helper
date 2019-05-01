const express       = require('express')
const cors          = require('cors')
const bodyParser    = require('body-parser')
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

app.listen(port, () => console.log(`Example app listening on port ${port}!`))










