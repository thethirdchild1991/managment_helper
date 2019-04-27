const express   = require('express')
const router    = express.Router();
const Models    = require('./db')

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
        {username : username}, 
        (err, docs) => {
            if(err){
                console.log('error: ', err)
            }else{
                console.log(docs.length)
                if(docs.length === 1){
                    res.json({loggedIn : 'true',})                    
                }else{
                    res.json({loggedIn : 'false',})
                }
            }
    })    
})

router.post('/signup', (req, res, next) => {    
    const newUser = new Models.user(req.body);
    newUser.save(
        (err,doc) => {
            if(err){
                console.log('err')
            }else{
                console.log('saved')
                res.json({'status' : 'OK'})        
            }
        })    
})

router.post('/:action/:target', (req, res, next) => {        
    const target = req.params.target    

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
            {$set:{client : 'req.body.client'}},
            {new : true},
            (err, doc) =>{
                if(err){
                    console.log(err)
                }else{   
                    console.log(doc)                 
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