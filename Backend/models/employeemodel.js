const mongoose=require("mongoose")

const EmployeeSchema= new mongoose.Schema({
    username:String,
    email:String,
    password:String
})

const  EmployeeModel= new mongoose.model("Employees", EmployeeSchema)

module.exports = EmployeeModel