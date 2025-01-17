const express = require('express')
const app = express()


app.use(express.static(`${__dirname}/public`))

app.get('/', (req,res,next)=>{
    res.sendFile(`${__dirname}/views/index.html`)
})

app.get('/about', (req,res,next)=>{
    res.sendFile(`${__dirname}/views/about.html`)
})

app.get('/work', (req,res,next)=>{
    res.sendFile(`${__dirname}/views/work.html`)
})


app.listen(3000, ()=> console.log("listening"))