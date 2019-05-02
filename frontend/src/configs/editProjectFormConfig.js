const editProjectFormConfig = [
    {        
        LabelText:'agent',   
        defaultValue: 'agent',            
        id: 'agent',        
        value : '',
        required: true,
    },
    {        
        LabelText:'client',   
        defaultValue: 'client',     
        id: 'client',
        value: '',
        required: true,
    },
    {
        LabelText:'project',   
        defaultValue: 'project',     
        id: 'project',
        value: '',
        required: true,
    },
    {
        LabelText:'technology',   
        defaultValue: 'technology',     
        id: 'technology',
        value: '',
        required: true,
    },
    {
        LabelText:'status',   
        defaultValue: 'status',     
        id: 'status',
        value: '',
        required: true,
    },
    {
        LabelText:'manager',   
        defaultValue: 'manager',     
        id: 'manager',
        value: '',
        required: true,
    },
    {
        LabelText:'project_engineer',   
        defaultValue: 'project_engineer',     
        id: 'project_engineer',
        value: '',
        required: true,
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
    
]
export default editProjectFormConfig;