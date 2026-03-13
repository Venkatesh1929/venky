const Todo=require('../models/todo')
exports.createTodo=(req,res)=>{
    res.json({
        message:"Todo Created Successfully"
    })
}
exports.getTodo=(req,res)=>{
    res.json({
        message:"Get All Todo"
    })
}
exports.updateTodo=(req,res)=>{
    res.json({
        message:"Edit Todo"
    })
}
exports.deleteTodo=(req,res)=>{
    res.json({
        message:"Delete Todo"
    })
}