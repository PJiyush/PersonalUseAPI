const express  = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send('<h1>Is this working</h1>')
})

const port  = process.env.PORT || 4000

app.listen(port,console.log('server is running at 4000...'))