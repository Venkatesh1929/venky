const User =require('../models/user')

exports.getUsers=async  (req,res)=>{
    try{
        const users=await User.find();
        res.status(200).json(users);
    }catch(err){
        res.status(500).send(err);
    }
}
exports.getUserById=(req,res)=>{
    res.send("Get User By Id");
}
exports.createUser=async(req,res)=>{
    try{
        const {name,email,password}=req.body;
    const user=await User.findOne({email});
    if(user){
        return res.status(401).json({message:"User Already Exist"});
    }
    await User.create({
        name,email,password
    })
    res.status(200).json({message:"User Created Successfully"})
    }catch(err){
        res.status(500).send(err)
    }
}
exports.updateUser=(req,res)=>{
    res.json({
        message:"User Updated Successfully"
    })
}
exports.deleteUser=(req,res)=>{
    res.json({
        message:"User Deleted Successfully"
    })
}
