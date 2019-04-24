const APIAddr = 'http://localhost:5000';
export const API = {
    addr : APIAddr,
    createProject : APIAddr+'/createproject',
    selectAllProjects : APIAddr+'/selectAllProjects',
    selectProject : APIAddr+'/selectProject',
    updateProject : APIAddr+'/updateProject',
    deleteProject : APIAddr+'/deleteProject',
    singIn : APIAddr+'/signin',
    singUp : APIAddr+'/singup',
    selectAllUsers :  APIAddr+'/selectAllUsers',
    selectUser : APIAddr+'/selectUser',
    updateUser : APIAddr+'/updateUser',
    deleteUser : APIAddr+'/deleteUser',
    createDeveloper: APIAddr+'/createdeveloper',
}