import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import router from "./routes.js"
dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())
app.use("/api",router)

const DB_URL = process.env.DB_URL
const PORT = process.env.PORT || 5000

app.listen(PORT,() => console.log(`Server is running on  ${PORT}`))

mongoose.connect(DB_URL,{useUnifiedTopology:true,useNewUrlParser:true})
.then(()=>console.log(`DB connected`))
.catch((err)=>console.error(err))
