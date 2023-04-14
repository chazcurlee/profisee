const {SalesPerson} = require('../models')


//////////////// GET CONTROLLERS ////////////////

const GetAllSalesPeople = async (req, res) => {
    try{
        const allSalesPeople = await SalesPerson.findAll()
        res.send(allSalesPeople)
    }catch(error){
        throw error
    }
}

const GetSingleSalesPerson = async (req, res) => {
    try{
        const singleSalesPerson = await Sale.findByPk(parseInt(req.params.salesperson_id))
        res.send(singleSalesPerson)
    }catch(error){
        throw error
    }
}

///////////// CREATE CONTROLLERS ////////////////

const CreateSalesPerson = async (req, res) => {
    try{
        const salesPersonBody = {
            ...req.body
        }
        const newSalesPerson = await SalesPerson.create(salesPersonBody)
        res.send(newSalesPerson)
    }catch(error) {
        throw error
    }
}

/////////////// DELETE CONTROLLERS ////////////////

const DeleteSalesPerson = async (req, res) => {
    try{
        const salesPersonId = parseInt(req.params.salesperson_id)
        const deletedSalesPerson = await SalesPerson.destroy({where: {id:salesPersonId}})
        res.send({message: `Deleted salesperson with id of ${saleId}`})
    }catch(error) {
        throw error
    }
}

///////////// UPDATE CONTROLLERS ////////////////

const UpdateSalesPerson = async (req, res) => {
    try{
        const salesPersonId = parseInt(req.params.salesperson_id)
        const updatedSalesPerson = await SalesPerson.update(req.body, {
            where: {id: salesPersonId},
            returning: true
        })
        res.send(updatedSalesPerson)
    }catch(error) {
        throw error
    }
}

module.exports = {
    GetAllSalesPeople,
    GetSingleSalesPerson,
    CreateSalesPerson,
    DeleteSalesPerson,
    UpdateSalesPerson
}