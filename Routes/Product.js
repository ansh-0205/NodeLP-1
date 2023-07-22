const express=require('express')
const router=new express.Router()
const authentication=require('../Middleware/auth')
const multer=require('multer')
const upload=multer({dest:'uploads/'})
const {
    newProduct,
    products,
    seller,
    prodname,
    brand,
    category,
    updateProd,
    deleteProd,
    productImage,
    productCmp
}=require('../Controllers/Product')
router.post('/newProduct',[authentication.verifyToken],newProduct)
router.get('/products',[authentication.verifyToken],products)
router.get('/seller/:seller',seller)
router.get('/:id',prodname)
router.get('/brand/:brand',brand)
router.get('/category/:category',category)
router.patch('/:id',[authentication.verifyToken,authentication.modifyProduct],updateProd)
router.delete('/:id',[authentication.verifyToken,authentication.modifyProduct],deleteProd)
router.post('/images/:id',upload.array('product'),[authentication.verifyToken],productImage)
router.post('/compare',[authentication.verifyToken],productCmp)

module.exports=router