const mongoose=require('mongoose')
const validator=require('validator')
const prodSchema=new mongoose.Schema({
    prodId:{
        type:Number,
        required:true,
        unique:[true,'ProdId already taken']
    },
    prodName:{
        type:String,
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    model:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    specs:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    seller:{
        type:String,
        required:true
    },
    sellerEmail:{
        type:String,
        required:true,
        unique:[true,'email-id exists'],
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Invalid Email-Id')
            }
        }
    }
},{timestamps:true})
const Product=mongoose.model('Product',prodSchema)
module.exports=Product