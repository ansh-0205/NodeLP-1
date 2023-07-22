const mongoose=require('mongoose')
const cartSchema=new mongoose.Schema({
    productId:{
        type:String
    },
    productName:{
        type:String,
    },
    price:{
        type:Number
    },
    image:{
        type:Buffer
    },
    quantity:{
        type:Number
    }
})
const Cart=mongoose.model('Cart',cartSchema)
module.exports=Cart