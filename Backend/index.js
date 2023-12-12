const express=require("express")
const mongoose=require("mongoose");
const cores=require("cores");
const EmployeeModel=require("./models/employeemodel")

const app = express();
app.use(express.json())
app.use(cores())

mongoose.connect("mongodb://127.0.0.1:27017/Employee")

app.post("/register",(res,req)=>{
    EmployeeModel.create(req.body)
    .then(employees=>res.json(employees))
    .catch(err=>res.json(err))
})
app.listen(3001,()=>{
    console.log("Service listening on port 3001");
})