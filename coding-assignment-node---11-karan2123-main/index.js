import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import router from './routes/routes.js'

const app=express()

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/api/',router)


mongoose.connect('mongodb://localhost:27017/customer')
.then(()=>console.log('db is connected'))
.catch(()=>console.log('cannot connect db'))


app.listen(2003,()=>{
    console.log("server is running on 2003")
})