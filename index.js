import express from "express";
import cors from "cors"
import {productRouter} from './routes/productRoute.js'
import {userRouter} from './routes/userRoute.js'

let port = process.env.PORT || 1003

const app = express()
app.use(express.json())
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}))

app.use(express.static('public'))
app.use('/products', productRouter)
app.use('/users', userRouter)

app.listen(port,(error)=>{
        if(error){
        console.log(error);
        return
    }
    console.log(`http://localhost:${port}`);
})
