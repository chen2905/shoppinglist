const express = require('express')
const router = express.Router()

//item model
const Item = require('../../models/Item')
//const Item = require('../../Item')

//@route GET  api/items
//@desc GET all items
//@acess Public

router.get('/',(req,res)=>{
    Item.find()
    .sort({date:-1})
    .then(items =>res.json(items))
})



//@route POST  api/items
//@desc POST a item
//@acess Public

router.post('/',(req,res)=>{
    const newItem = new Item({
        name:req.body.name
    })
console.log(`req.body.name:${req.body.name}`)
    newItem
    .save()
    .then(item=>res.json(item))
   
})



//@route delete  api/items/:id
//@desc DELETE a item
//@acess Public

router.delete('/:id',(req,res)=>{
  Item.findById(req.params.id) 
  .then(item=>item.remove().then(()=>res.json({success:true})))
  .catch(err=>res.status(404).json({error:`${err} ${req.params.id}`}))
})


module.exports = router