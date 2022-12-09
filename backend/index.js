import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.js'

const app=express()
app.use(express.json())
app.use(cors())

app.use("/api/auth",authRoutes)


app.listen(9000,()=>{
    console.log("Server is running at port 9000")
});