const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});

const Schema = mongoose.Schema;
const ProjectSchema = new Schema({
    agent               : {type: String, default: 'agent'},// = 'контрагент',
    client              : {type: String, default: 'client'},// = 'Заказчик',
    project             : {type: String, default: 'project', unique : true},// = 'Проект',
    technology          : {type: String, default: 'technology'},// = 'Технологии',
    status              : {type: String, default: 'status'},// = 'Статус',
    manager             : {type: String, default: 'manager'},// = 'Менеджер',
    project_engineer    : {type: String, default: 'project_engineer'},// = 'Проектный инженер',
});
ProjectSchema.plugin(uniqueValidator)


const ROLES = ['employee', 'developer', 'manager', 'admin'];
const UserSchema = new Schema({
    username    : {type: String, default: 'username',   unique : true},
    email       : {type: String, default: 'email',      unique : true},
    password    : {type: String, default: 'password'},
    role        : {type: String, default: 'employee',   enum : ROLES}    
});
UserSchema.plugin(uniqueValidator);


const ProjectModel = mongoose.model('Project', ProjectSchema);
const UserModel = mongoose.model('User', UserSchema);

module.exports.project =  ProjectModel;
module.exports.user =  UserModel;
module.exports.ProjectModel =  ProjectModel;
module.exports.UserModel =  UserModel;

