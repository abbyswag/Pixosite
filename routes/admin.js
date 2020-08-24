const express = require('express')
const router = express.Router()
const env = require('')


router.get('/',(req,res)=>{
    res.sendFile('/home/abi/Desktop/Pixosite/views/admin.html')
})


router.post('/home',(req,res)=>{
    let sampleFile;
    let uploadPath;
    if (!req.files || Object.keys(req.files).length === 0) {
      res.status(400).json({Message : "No file is uploaded"});
      return;
    }
    sampleFile = req.files.sampleFile;
    uploadPath = '/home/abi/Desktop/Pixosite'+ '/views/data/home/' + sampleFile.name;
    sampleFile.mv(uploadPath, function(err) {
        if (err) {
        return res.status(500).send(err);
        }
        res.redirect('/pixo25webnoids')
        //res.send('File uploaded to ' + uploadPath);
    });
})


module.exports = router