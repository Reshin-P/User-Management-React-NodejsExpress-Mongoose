import express from 'express'
const app=express()
import connectDb from './Database/MogoseConfig.js'
import userRouter from './Routers/User.js'
import adminRouter from './Routers/Admin.js'
import cors from 'cors'

const port=5000
connectDb()


const corsOptions ={
    origin:'*', 
    credentials:true,
    optionSuccessStatus:200
}




app.use(cors(corsOptions))

app.use(express.json())
app.use('/',userRouter)
app.use('/admin',adminRouter)



app.listen(port,()=>{
    console.log(`Backend Server Started in Port ${port}`);
})
