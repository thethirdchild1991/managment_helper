const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});

const Schema = mongoose.Schema;
const ProjectSchema = new Schema({
    agent               : {type: String, default: 'agent'},// = 'контрагент',
    client              : {type: String, default: 'client'},// = 'Заказчик',
    project             : {type: String, default: 'project'},// = 'Проект',
    technology          : {type: String, default: 'technology'},// = 'Технологии',
    status              : {type: String, default: 'status'},// = 'Статус',
    manager             : {type: String, default: 'manager'},// = 'Менеджер',
    project_engineer    : {type: String, default: 'project_engineer'},// = 'Проектный инженер',
});

const UserSchema = new Schema({
    username    : {type: String, default: 'username'},
    email       : {type: String, default: 'email'},
    password    : {type: String, default: 'password'},
    role        : {type: String, default: 'employee'}    
});



const ProjectModel = mongoose.model('Project', ProjectSchema);
const UserModel = mongoose.model('User', UserSchema);
// const TestProject_1 = new Project({ project : 'TestProject_1'});
// TestProject_1.save();

// Project.find().lean().exec(function(err,docs){
//     if(err){
//         console.log(err)
//     }else{
//         console.log((JSON.stringify(docs)))
//         // return res.end(JSON.stringify(docs));
//     }
// });
module.exports.project =  ProjectModel;
module.exports.user =  UserModel;
module.exports.ProjectModel =  ProjectModel;
module.exports.UserModel =  UserModel;

