require('dotenv').config()
const express = require('express')
const app =  express()
const port = 3000 

app.get('/', (req , res) =>{
    res.send('<h1>WellCome Backend Series</h1>')
})
app.get('/signup',(req ,res)=>{
 res.send('<h2>Sig-nUp</h2>'
 )
})
app.get('/logIn' , (req , res) => {
    res.send('login')

})
app.listen(process.env.PORT , () =>{
    console.log(`example app listening ${port}`)
})