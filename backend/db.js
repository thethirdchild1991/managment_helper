const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});

const Schema = mongoose.Schema;
const ProjectSchema = new Schema({
    agent               : {type: String,    default: 'agent'},
    client              : {type: String,    default: 'client'},
    project             : {type: String,    default: 'project', unique : true},
    technology          : {type: String,    default: 'technology'},
    status              : {type: String,    default: 'status'},
    manager             : {type: String,    default: 'manager'},
    project_engineer    : {type: String,    default: 'project_engineer'},
    startDate           : {type: Date,      default: Date.now},
    deadLine            : {type: Date,      default: Date.now},
});
ProjectSchema.plugin(uniqueValidator)


const PostSchema = new Schema({
    postProject :{type: String,     required: true,},
    postSubject :{type: String,     default: ''},
    postDate    :{type: Date,       default: Date.now},
    postAuthor  :{type: String,     required: true,},
    postText    :{type: String,},
});
PostSchema.plugin(uniqueValidator)

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
const PostsModel = mongoose.model('Posts', PostSchema);

authCheck = (req,res,next) => {
    // console.log(req.body)
    next()
}

module.exports.project =  ProjectModel;
module.exports.user =  UserModel;
module.exports.post = PostsModel;
module.exports.authMiddleware =  authCheck;
module.exports.ProjectModel =  ProjectModel;
module.exports.UserModel =  UserModel;
module.exports.PostSchema = PostSchema;

