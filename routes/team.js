const express = require('express')
const router = express.Router()

router.get('/photography',(req,res)=>{
    res.render('teams/photography.ejs')
})

router.get('/video',(req,res)=>{
    res.send('ths is video-editing page')
})

router.get('/animation',(req,res)=>{
    res.send('ths is animation page')
})

router.get('/graphics',(req,res)=>{
    res.send('ths is graphics page')
})

router.get('/web',(req,res)=>{
    res.send('ths is web page')
})

module.exports = router