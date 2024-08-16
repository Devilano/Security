// import 

const router =require('express').Router();
const userController = require("../controllers/userControllers")

// create user api 
 router.post('/create',userController.createUser)


 //tsk 1: create login api
 router.post('/login',userController.loginUser)

//  router.post('/forgetpassowrd',userController.forgotPassword)



 //exporting
 module.exports =router;