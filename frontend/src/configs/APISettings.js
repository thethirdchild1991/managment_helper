const APIAddr = 'http://localhost:5000';
export const API = {
    addr : APIAddr,
    createProject : APIAddr+'/createproject',
    selectAllProjects : APIAddr+'/select/project',
    selectProject : APIAddr+'/select/project',
    updateProject : APIAddr+'/update/project',
    deleteProject : APIAddr+'/delete/project',
    singIn : APIAddr+'/signin',
    singUp : APIAddr+'/singup',
    selectAllUsers :  APIAddr+'/select/user',
    selectUser : APIAddr+'/select/user',
    updateUser : APIAddr+'/update/user',
    deleteUser : APIAddr+'/delete/user',
    createDeveloper: APIAddr+'/createdeveloper',
}