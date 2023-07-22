const express=require('express')
const router=new express.Router()
const authentication=require('../Middleware/auth')
const {
    addCart,
    delCart
}=require('../Controllers/Cart')
router.post('/addCart',[authentication.verifyToken],addCart)
router.post('/delCart',[authentication.verifyToken],delCart)
module.exports=router