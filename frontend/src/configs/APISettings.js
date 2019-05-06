const APIAddr = 'http://localhost:5000';
export const API = {
    addr : APIAddr,
    createProject : APIAddr+'/create/project',
    selectAllProjects : APIAddr+'/select/project',
    selectProject : APIAddr+'/select/project',
    updateProject : APIAddr+'/update/project',
    deleteProject : APIAddr+'/delete/project',
    singIn : APIAddr+'/signin',
    singUp : APIAddr+'/signup',
    selectAllUsers :  APIAddr+'/select/user',
    selectUser : APIAddr+'/select/user',
    updateUser : APIAddr+'/update/user',
    deleteUser : APIAddr+'/delete/user',
    createDeveloper: APIAddr+'/create/user',
    fetchPostsData : APIAddr+'/select/posts',
    savePostData : APIAddr+'/create/post',
}