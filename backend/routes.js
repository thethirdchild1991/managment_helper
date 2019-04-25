const express   = require('express')
const router    = express.Router();
const Models    = require('./db')

router.get('/:action/:target', (req, res, next) =>{
    console.log(req.params)    
    const action = req.params.action
    const target = req.params.target
    const id = req.query['id']
    
    if( id ){    
        Models[target].findById(req.query['id'],(err, doc) => {        
            console.log(doc)
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

router.post('/:action/:target', (req, res, next) => {    
    const action = req.params.action
    const target = req.params.target
    const id = req.body.id

    if( action === 'update'){
        Models[target].findByIdAndUpdate(
            req.body.id,
            {$set:{client : 'req.body.client'}},
            {new : true},
            (err, doc) =>{
                if(err){
                    console.log(err)
                }else{                                
                    res.json(doc)
                }
            }
        )
    } 

    if( action === 'delete'){    
        Models[target].findByIdAndDelete(
            req.body.id,                
            (err, doc) =>{
                if(err){
                    console.log(err)
                }else{            
                    console.log(doc)
                    res.json({'status' : 'ok'})
                }
            }
        )    
    }
})







module.exports = router;