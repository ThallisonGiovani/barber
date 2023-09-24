const express = require('express')
const path = require('path')
const router = express.Router()
const app = express()

router.get("/",(req, res)=>{
   res.sendFile(path.join(__dirname + '/pages/HOME.html'))
})

app.use(router)
app.listen(3333,()=>{
    console.log('servidor rodando')
})