const {Sale, Customer, SalesPerson, Product, Sequelize} = require('../models')


//////////////// GET CONTROLLERS ////////////////

const GetAllSales = async (req, res) => {
    try{
        const allSales = await Sale.findAll({
            raw: true,
            attributes: {
                include: [[Sequelize.col('Customer.firstName'), 'customerFirstName'], [Sequelize.col('Customer.lastName'), 'customerLastName'], [Sequelize.col('SalesPerson.firstName'), 'salesPersonFirstName'], [Sequelize.col('SalesPerson.lastName'), 'salesPersonLastName'], [Sequelize.col('Product.name'), 'productName']]
            },
            include: [
                {
                model: Customer,
                required: false,
                as: 'Customer',
                attributes: []
                },
                {
                model: SalesPerson,
                required: false,
                as: 'SalesPerson',
                attributes: []
                },
                {
                model: Product,
                required: false,
                as: 'Product',
                attributes: []
                },

        ]
        })
        res.send(allSales)
    }catch(error){
        throw error
    }
}

const GetLastFiveSales = async (req, res) => {
    try{
        const fiveSales = await Sale.findAll({
            limit: 5,
            order: [['salesDate', 'DESC']],
            raw: true,
            attributes: {
                include: [[Sequelize.col('Customer.firstName'), 'customerFirstName'], [Sequelize.col('Customer.lastName'), 'customerLastName'], [Sequelize.col('SalesPerson.firstName'), 'salesPersonFirstName'], [Sequelize.col('SalesPerson.lastName'), 'salesPersonLastName'], [Sequelize.col('Product.name'), 'productName']]
            },
            include: [
                {
                model: Customer,
                required: false,
                as: 'Customer',
                attributes: []
                },
                {
                model: SalesPerson,
                required: false,
                as: 'SalesPerson',
                attributes: []
                },
                {
                model: Product,
                required: false,
                as: 'Product',
                attributes: []
                },

        ]
        })
        res.send(fiveSales)
    }catch(error) {
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

///////////// CREATE CONTROLLERS ////////////////

const CreateSale = async (req, res) => {
    try{
        const saleBody = {
            ...req.body
        }
        const newSale = await Sale.create(saleBody)
        res.send(newSale)
    }catch(error) {
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
    GetLastFiveSales,
    CreateSale,
    DeleteSale,
    UpdateSale
}