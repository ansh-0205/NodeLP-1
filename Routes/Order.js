const express=require('express')
const router=new express.Router()
const authentication=require('../Middleware/auth')
const {order}=require('../Controllers/Order')
router.post('/order',[authentication.verifyToken],order)
module.exports=router