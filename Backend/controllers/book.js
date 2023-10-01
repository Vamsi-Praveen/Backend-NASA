import express from "express";
import Book from'../models/book.model.js'


const router = express.Router();

router.get('/',(req,res)=>{
    Book.find()
        .then((data)=>{
            res.send(data)
        })
        .catch((err)=>{
            console.log("Error occured",err)
        })
})

router.post('/',(req,res)=>{
    Book.create(req.body)
        .then((data)=>{
            res.status(201).send(data)
        })
        .catch((err)=>{
            console.log("Error occured",err)
        })
})

router.get('/:id',(req,res)=>{
    Book.findById({_id : req.params.id})
        .then((data)=>{
            if(data){
                res.send(data)
            }
            else{
                res.status(404).json({"message":"Error Data Not Found"})
            }
        })
})
router.delete('/:id',(req,res)=>{
    Book.findOneAndDelete({_id: req.params.id})
        .then(()=>{
            res.send("Deleted");
        })
})

router.put('/:id',(req,res)=>{
    Book.findByIdAndUpdate(req.params.id,req.body,{new:true})
        .then((data)=>{
            res.send(data);
        })

})
export default router