//////// IMPORT ////////////
const express = require('express');
const cors = require('cors')
const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors({
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}))
app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.options('*')

///////////////  CONTROLLERS  ///////////////
const controllerCustomer = require('./controllers/CustomerController')
const controllerDiscount = require('./controllers/DiscountController')
const controllerProduct = require('./controllers/ProductController')
const controllerSale = require('./controllers/SaleController')
const controllerSalesPerson = require('./controllers/SalesPersonController')

///////////////// GET ROUTES ////////////////

app.get('/', (req, res) => res.json({ message: 'Server Works'}))

app.get('/sales', controllerSale.GetAllSales)
app.get('/fivesales', controllerSale.GetLastFiveSales)
app.get('/sales/:sale_id', controllerSale.GetSingleSale)
app.get('/customers', controllerCustomer.GetAllCustomers)
app.get('/customers/:customer_id', controllerCustomer.GetSingleCustomer)
app.get('/salespeople', controllerSalesPerson.GetAllSalesPeople)
app.get('/salespeople/:salesperson_id', controllerSalesPerson.GetSingleSalesPerson)
app.get('/discounts', controllerDiscount.GetAllDiscounts)
app.get('/discounts/:discount_id', controllerDiscount.GetSingleDiscount)
app.get('/products', controllerProduct.GetAllProducts)
app.get('/products/:product_id', controllerProduct.GetSingleProduct)

///////////////// UPDATE ROUTES ////////////////

app.put('/customers/:customer_id', controllerCustomer.UpdateCustomer)
app.put('/discounts/:discount_id', controllerDiscount.UpdateDiscount)
app.put('/products/:product_id', controllerProduct.UpdateProduct)
app.put('/sales/:sale_id', controllerSale.UpdateSale)
app.put('/salespeople/:salesperson_id', controllerSalesPerson.UpdateSalesPerson)


///////////////// CREATE ROUTES ////////////////

app.post('/customer', controllerCustomer.CreateCustomer)
app.post('/discount', controllerDiscount.CreateDiscount)
app.post('/product', controllerProduct.CreateProduct)
app.post('/sale', controllerSale.CreateSale)
app.post('/salespeople', controllerSalesPerson.CreateSalesPerson)


///////////////// DELETE ROUTES ////////////////
app.delete('/sale/:sale_id', controllerSale.DeleteSale)


/////////// EXPRESS SERVER LISTEN TO PORT ///////////////
app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))