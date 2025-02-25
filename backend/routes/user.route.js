import express from "express";
import { userLogin, userSignup } from "../controller/user.controller.js";
import { loginValidation, signupValidation } from "../validation/user.validation.js";
const userRouter = express.Router();

userRouter.post("/signup", signupValidation, userSignup);
userRouter.post("/login", loginValidation, userLogin);

export default userRouter;