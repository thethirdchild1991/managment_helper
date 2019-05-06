const express   = require('express')
const router    = express.Router();
const Models    = require('./db')

router.use(Models.authMiddleware);

router.get('/select/posts', (req,res,next) => {
    const id = req.query['id']

    Models.post.find(
        {postProject: id}, 
        (err,docs) => {
            if(err){
                console.log('Errors: ', err)
                res.status('404')
            }else{
                res.send(docs)
            }

        })

})

router.get('/:action/:target', (req, res, next) =>{    
    const action = req.params.action
    const target = req.params.target
    const id = req.query['id']
    
    
    if( id ){    
        Models[target].findById(req.query['id'],(err, doc) => {                    
            res.send(doc)
        });    
    }else{
        Models[target].find( {}, (err,docs) => {
            if(err){
                console.log(err)
            }else{                
                res.send(docs)
            }
        })   
    } 
});


router.post('/signin', (req, res, next) => {
    // const action = req.params.action
    const username = req.body.username
    const password = req.body.password
    
    Models.user.find(
        {   
            username : username,
            password : password
        }, 
        (err, docs) => {
            if(err){
                console.log('error: ', err)
            }else{                
                if(docs.length === 1){                    
                    res.json({loggedIn : docs[0].role,})                    
                }else{
                    res.json({
                                loggedIn : 'false', 
                                errors : ['wrong username or password']
                            })
                }
            }
    })    
})

router.post('/signup', (req, res, next) => {    
    const newUser = new Models.user(req.body);
    newUser.save(
        (error,doc) => {
            if(error){
                console.log(Object.keys(error.errors))
                res.json({'status': 'Fail',  errors : Object.keys(error.errors) })
            }else{
                console.log('saved')
                res.json({'status' : 'OK'})        
            }
        })    
})

router.post('/:action/:target', (req, res, next) => {        
    const target = req.params.target  
    console.log(req.body)  

    const newTarget = new Models[target](req.body)
    newTarget.save((error, product) => {
        if(error){
            console.log(Object.keys(error.errors))
            res.json({'status': 'Fail',  errors : Object.keys(error.errors) })
        }else{
            res.json({'status' : 'OK'})
        }
    })
})




router.put('/:action/:target', (req, res, next) => {    
    const action = req.params.action
    const target = req.params.target
    const id = req.body.id         

    if( action === 'update'){        
        Models[target].findByIdAndUpdate(
            id,
            {$set: req.body},
            {
                new : true,
                runValidators: true,
                context: 'query',
            },
            (err, doc) =>{
                if(err){
                    console.log('errors: ', err)
                    res.json({'status': 'Fail',  errors : Object.keys(err.errors) })
                }else{   
                    console.log('updated: ', doc)                 
                    res.json(doc)
                }
            }
        )
    } 
});

router.delete('/:action/:target', (req,res, next) =>{
    const action = req.params.action
    const target = req.params.target
    const id = req.body.id

    if( action === 'delete'){    
        Models[target].findByIdAndDelete(
            id,
            (err, doc) =>{
                if(err){
                    console.log(err)
                }else{            
                    res.json({'status' : 'ok'})
                }
            }
        )    
    }
});


module.exports = router;