import express from "express";
import { api } from "./api";

const app = express();
app.use(api)
app.get('/api',(req,res)=>res.send('hi'))
app.listen(3000,()=>console.log("Started"))

