const {Sale, Customer, SalesPerson, Product, Sequelize} = require('../models')
const {Op} = require('sequelize')

const todaysDate = new Date()
const currentYear = todaysDate.getFullYear()

const quarterDetermine = (date) => {
    return Math.floor(date.getMonth() / 3 + 1)
}

const currentQtr = quarterDetermine(todaysDate)

let quarterBegin;
let quarterEnd;

if (currentQtr === 1) {
    quarterBegin = new Date(currentYear.toString(), '01', '01')
    quarterEnd = new Date(currentYear.toString(), '03', '31')
}
if (currentQtr === 2) {
    quarterBegin = new Date(currentYear.toString(), '04', '01')
    quarterEnd = new Date(currentYear.toString(), '06', '30')
}
if (currentQtr === 3) {
    quarterBegin = new Date(currentYear.toString(), '07', '01')
    quarterEnd = new Date(currentYear.toString(), '09', '30')
}
if (currentQtr === 4) {
    quarterBegin = new Date(currentYear.toString(), '10', '01')
    quarterEnd = new Date(currentYear.toString(), '12', '31')
}


//////////////// GET CONTROLLERS ////////////////

const GetAllSales = async (req, res) => {
    try{
        const allSales = await Sale.findAll({
            raw: true,
            attributes: {
                include: [[Sequelize.col('Customer.firstName'), 'customerFirstName'], [Sequelize.col('Customer.lastName'), 'customerLastName'], [Sequelize.col('SalesPerson.firstName'), 'salesPersonFirstName'], [Sequelize.col('SalesPerson.lastName'), 'salesPersonLastName'], [Sequelize.col('Product.name'), 'productName'], [Sequelize.col("Product.commissionPercent"), "saleCommission"], [Sequelize.col("Product.salePrice"), "salePrice"]]
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

const GetDescSales = async (req, res) => {
    try{
        const allSales = await Sale.findAll({
            raw: true,
            attributes: {
                include: [[Sequelize.col('Customer.firstName'), 'customerFirstName'], [Sequelize.col('Customer.lastName'), 'customerLastName'], [Sequelize.col('SalesPerson.firstName'), 'salesPersonFirstName'], [Sequelize.col('SalesPerson.lastName'), 'salesPersonLastName'], [Sequelize.col('Product.name'), 'productName'], [Sequelize.col("Product.commissionPercent"), "saleCommission"], [Sequelize.col("Product.salePrice"), "salePrice"]]
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

            ],
            order: [['salesDate', 'DESC']]

        })
        res.send(allSales)
    }catch(error){
        throw error
    }
}

const GetAscSales = async (req, res) => {
    try{
        const allSales = await Sale.findAll({
            raw: true,
            attributes: {
                include: [[Sequelize.col('Customer.firstName'), 'customerFirstName'], [Sequelize.col('Customer.lastName'), 'customerLastName'], [Sequelize.col('SalesPerson.firstName'), 'salesPersonFirstName'], [Sequelize.col('SalesPerson.lastName'), 'salesPersonLastName'], [Sequelize.col('Product.name'), 'productName'], [Sequelize.col("Product.commissionPercent"), "saleCommission"], [Sequelize.col("Product.salePrice"), "salePrice"]]
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

            ],
            order: [['salesDate', 'ASC']]

        })
        res.send(allSales)
    }catch(error){
        throw error
    }
}

const GetQtrSales = async (req, res) => {
    try{
        const qtrSales = await Sale.findAll({
            where: {
                [Op.or] : [{
                    from: {
                        [Op.between]: [quarterBegin, quarterEnd]
                    }
                }]
            }
        })
        res.send(qtrSales)
    }catch(error) {throw error}
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
    GetDescSales,
    GetAscSales,
    GetQtrSales,
    GetSingleSale,
    GetLastFiveSales,
    CreateSale,
    DeleteSale,
    UpdateSale
}