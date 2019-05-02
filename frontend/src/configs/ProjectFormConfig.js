const ProjectFormConfig = [
    {        
        LabelText:'agent',   
        defaultValue: 'agent',     
        id: 'agent',
        required: true
    },
    {                
        LabelText:'customer',   
        defaultValue: 'customer',     
        id: 'customer',
        required: true
    },
    {         
        LabelText:'project',   
        defaultValue: 'project',     
        id: 'project',
        required: true
    },
    {         
        LabelText:'technology',   
        defaultValue: 'technology',     
        id: 'technology',
        required: true
    },
    {         
        LabelText:'status',   
        defaultValue: 'status',     
        id: 'status',
        required: true
    },
    {         
        LabelText:'manager',   
        defaultValue: 'manager',     
        id: 'manager',
        required: true
    },
    {         
        LabelText:'engineer',   
        defaultValue: 'engineer',     
        id: 'engineer',
        required: true
    },
    {
        LabelText:'startDate',   
        defaultValue: Date.now(),     
        id: 'startDate',
        type: Date,
        required: true
    },
    {         
        LabelText:'deadLine',   
        defaultValue: Date.now(),     
        id: 'deadLine',
        type: Date,
        required: true
    },


];

export default ProjectFormConfig;