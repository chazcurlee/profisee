const {Discount} = require('../models')


//////////////// GET CONTROLLERS ////////////////

const GetAllDiscounts = async (req, res) => {
    try{
        const allDiscounts = await Discount.findAll()
        res.send(allDiscounts)
    }catch(error){
        throw error
    }
}

const GetSingleDiscount = async (req, res) => {
    try{
        const singleDiscount = await Discount.findByPk(parseInt(req.params.discount_id))
        res.send(singleDiscount)
    }catch(error){
        throw error
    }
}

///////////// CREATE CONTROLLERS ////////////////

const CreateDiscount = async (req, res) => {
    try{
        const discountBody = {
            ...req.body
        }
        const newDiscount = await Discount.create(discountBody)
        res.send(newDiscount)
    }catch(error) {
        throw error
    }
}

/////////////// DELETE CONTROLLERS ////////////////

const DeleteDiscount = async (req, res) => {
    try{
        const discountId = parseInt(req.params.discount_id)
        const deletedDiscount = await Discount.destroy({where: {id:discountId}})
        res.send({message: `Deleted discount with id of ${discountId}`})
    }catch(error) {
        throw error
    }
}


///////////// UPDATE CONTROLLERS ////////////////

const UpdateDiscount = async (req, res) => {
    try{
        const discountId = parseInt(req.params.discount_id)
        const updatedDiscount = await Discount.update(req.body, {
            where: {id: discountId},
            returning: true
        })
        res.send(updatedDiscount)
    }catch(error) {
        throw error
    }
}

module.exports = {
    GetAllDiscounts,
    GetSingleDiscount,
    CreateDiscount,
    DeleteDiscount,
    UpdateDiscount
}