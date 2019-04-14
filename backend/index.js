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
const mongoose = require('mongoose');
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
const test = new Project();

const DefaultProjectsList = [];
for( let i = 0; i < 3; i++ ){
    DefaultProjectsList.push( new Project() );
}

console.log(DefaultProjectsList);


const userSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    displayName: String,
    bio: String
    });

    
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));

app.use(cors())
app.get('/', (req, res) => {
    console.log("puts")
    res.json( DefaultProjectsList )
    // res.send('Hello World!')
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))