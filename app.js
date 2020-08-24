// require('dotenv').config()
const express = require('express')
const fileUpload = require('express-fileupload')
const ejs = require('ejs')

const teamRouter = require('./routes/team')
const blogRouter = require('./routes/blog')
const adminRouter = require('./routes/admin')

const app = express()
app.set('view engine','ejs')

// midlewares
app.use(express.json())
app.use(express.urlencoded())
app.use(express.static('views'))
app.use(fileUpload())
app.use('/team',teamRouter)
app.use('/blog',blogRouter)
app.use('/pixo25webnoids',adminRouter)

// home page router
app.get('/',(req,res)=>{
    res.render('index')
})


app.get('/about',(req,res)=>{
    res.render('about')
})

app.get('/gallery',(req,res)=>{
    res.render('gallery')
})

app.get('/store',(req,res)=>{
    res.render('store')
})


// starting server
app.listen(process.env.PORT||9000,()=>console.log(`Server is started at ${process.env.PORT||9000}`))

