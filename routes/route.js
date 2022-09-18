const express = require('express')

const router  = express.Router()


const event = []

router.get('/',(req,res)=>{
    res.render('page.ejs')
})

router.post('/',(req,res)=>{
    try{
        event.push({
            name: req.body.name,
            account: req.body.account,
            amount: req.body.amount
        })
        res.redirect('/')
    }
    catch{
        console.log("err")
    }
    console.log(event[0])
})

router.get('/preview',(req,res)=>{
    res.json(event[0])
})

module.exports= router