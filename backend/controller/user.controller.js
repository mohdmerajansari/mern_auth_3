import User from "../model/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"

export const userSignup = async (req, res) => {
  const user = req.body;
  if(!user.name || !user.email || !user.password) {
    return res.status(400).json({success: false, message: "Please provide all the required fields!"})
  }
  const userDetails = await User.findOne({email: user.email})
  if(userDetails){
    return res.status(409).json({success: false, message: "User already exists!"})
  }
  user.password = await bcrypt.hash(user.password, 10)

  const newUser = User(user)
  try {
    await newUser.save();
    res.status(200).json({success: true, data: newUser})
  } catch (error) {
    res.status(500).json({success: false, message: "Server side error"})
  }
}

export const userLogin = async (req, res) => {
  const user = req.body;
  if(!user.email || !user.password) {
    return res.status(400).json({success: false, message: "Please provide all the required fields!"})
  }
  const userDetails = await User.findOne({email: user.email})
  if(!userDetails){
    return res.status(409).json({success: false, message: "Email or password is Invalid"})
  }
  const isPassEqual = await bcrypt.compare(user.password, userDetails.password)
  if(!isPassEqual) {
    return res.status(409).json({success: false, message: "Email or password is Invalid"})
  }
  const jwtToken = jwt.sign({email: userDetails.email, id: userDetails._id}, process.env.JWT_SECRET,{expiresIn:'24h'})
  
  try {
    res.status(200).json({success: true, message: "Login successful!", jwtToken, Email:user.email, Name:userDetails.name})
  } catch (error) {
    res.status(500).json({success: false, message: "Server side error"})
  }
}