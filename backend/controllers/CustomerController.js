const {Customer} = require('../models')


//////////////// GET CONTROLLERS ////////////////

const GetAllCustomers = async (req, res) => {
    try{
        const allCustomers = await Customer.findAll()
        res.send(allCustomers)
    }catch(error){
        throw error
    }
}

const GetSingleCustomer = async (req, res) => {
    try{
        const singleCustomer = await Customer.findByPk(parseInt(req.params.customer_id))
        res.send(singleCustomer)
    }catch(error){
        throw error
    }
}

///////////// CREATE CONTROLLERS ////////////////

const CreateCustomer = async (req, res) => {
    try{
        const customerBody = {
            ...req.body
        }
        const newCustomer = await Customer.create(customerBody)
        res.send(newCustomer)
    }catch(error) {
        throw error
    }
}



///////////// UPDATE CONTROLLERS ////////////////

const UpdateCustomer = async (req, res) => {
    try{
        const customerId = parseInt(req.params.customer_id)
        const updatedCustomer = await Customer.update(req.body, {
            where: {id: customerId},
            returning: true
        })
        res.send(updatedCustomer)
    }catch(error) {
        throw error
    }
}

module.exports = {
    GetAllCustomers,
    GetSingleCustomer,
    CreateCustomer,
    UpdateCustomer
}