const {Product} = require('../models')

//////////////// GET CONTROLLERS ////////////////

const GetAllProducts = async (req, res) => {
    try{
        const allProducts = await Product.findAll()
        res.send(allProducts)
    }catch(error){
        throw error
    }
}

const GetSingleProduct = async (req, res) => {
    try{
        const singleProduct = await Product.findByPk(parseInt(req.params.product_id))
        res.send(singleProduct)
    }catch(error){
        throw error
    }
}

///////////// CREATE CONTROLLERS ////////////////

const CreateProduct = async (req, res) => {
    try{
        const productBody = {
            ...req.body
        }
        const newProduct = await Product.create(productBody)
        res.send(newProduct)
    }catch(error) {
        throw error
    }
}

/////////////// DELETE CONTROLLERS ////////////////

const DeleteProduct = async (req, res) => {
    try{
        const productId = parseInt(req.params.product_id)
        const deletedProduct = await Product.destroy({where: {id:productId}})
        res.send({message: `Deleted product with id of ${productId}`})
    }catch(error) {
        throw error
    }
}

///////////// UPDATE CONTROLLERS ////////////////

const UpdateProduct = async (req, res) => {
    try{
        const productId = parseInt(req.params.product_id)
        const updatedProduct = await Product.update(req.body, {
            where: {id: productId},
            returning: true
        })
        res.send(updatedProduct)
    }catch(error) {
        throw error
    }
}

module.exports = {
    GetAllProducts,
    GetSingleProduct,
    CreateProduct,
    DeleteProduct,
    UpdateProduct
}