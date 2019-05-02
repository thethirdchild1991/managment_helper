const employeePermitions = {
    viewProjectsTable : true,    
}
const developerPermitions = Object.create(employeePermitions,{
    viewProject : {
        value : true
    },
    viewSelfProfile : {
        value : true
    },
    editSelfProfile : {
        value : true
    }
})
const managerPermitions = Object.create(developerPermitions, {
    editProject : {
        value : true
    },
    createProject : {
        value : true
    },
    viewUsersTable : {
        value : true
    },
    viewUserProfile : {
        value : true
    }
})

const adminPermitions = Object.create(managerPermitions, {
    createUser : {
        value : true
    },
    editRole : {
        value : true
    },
    deleteUser : {
        value : true
    }
})    





export const ROLES = ['employee', 'developer', 'manager', 'admin'];
export const ROLESobj = {
                            'employee'  : employeePermitions,//0, 
                            'developer' : developerPermitions, //1,
                            'manager'   : managerPermitions,//2, 
                            'admin'     : adminPermitions,//3,
                        };