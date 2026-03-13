const express=require('express');
const connectDB=require('./config/db')
const dotenv=require('dotenv')
const app=express();
const egRouters=require('./routers/egRouter')
const userRouters=require('./routers/userRouter')
const todoRouters=require('./routers/todoRouter')
dotenv.config();
connectDB();
app.use(express.json());
app.use(egRouters);
app.use('/api/user',userRouters)
app.use('/api/todo',todoRouters)

const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server is Running on http://localhost:${PORT}`)
})