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

///////////////// ALL ROUTES ////////////////






/////////// EXPRESS SERVER LISTEN TO PORT ///////////////
app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))