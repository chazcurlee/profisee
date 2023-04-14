const Sale = require('../models/sale')


//////////////// GET CONTROLLERS ////////////////

const GetAllSales = async (req, res) => {
    try{
        const allSales = await Sale.findAll({})
        res.send(allSales)
    }catch(error){
        throw error
    }
}

const GetSingleSale = async (req, res) => {
    try{
        const singleSale = await Sale.findByPk(parseInt(req.params.sale_id))
        res.send(singleSale)
    }catch(error){
        throw error
    }
}

/////////////// DELETE CONTROLLERS ////////////////

const DeleteSale = async (req, res) => {
    try{
        const saleId = parseInt(req.params.sale_id)
        const deletedSale = await Sale.destroy({where: {id:saleId}})
        res.send({message: `Deleted sale with id of ${saleId}`})
    }catch(error) {
        throw error
    }
}

///////////// UPDATE CONTROLLERS ////////////////

const UpdateSale = async (req, res) => {
    try{
        const saleId = parseInt(req.params.sale_id)
        const updatedSale = await Sale.update(req.body, {
            where: {id: saleId},
            returning: true
        })
        res.send(updatedSale)
    }catch(error) {
        throw error
    }
}

module.exports = {
    GetAllSales,
    GetSingleSale,
    DeleteSale,
    UpdateSale
}