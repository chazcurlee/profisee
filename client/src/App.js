import './App.css';
import { Routes, Route } from 'react-router-dom'
import { CustomerList, ProductList, QuickView, SalesView, SalesPeople } from './pages'
import NavBar from './components/NavBar';
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [sales, setSales] = useState({});
  const [recentSales, setRecentSales] = useState({});
  const [salesPeople, setSalesPeople] = useState({});
  const [customers, setCustomers] = useState({})
  const [discounts, setDiscounts] = useState({})
  const [products, setProducts] = useState({})
  const [trigger, setTrigger] = useState(true)
 

  

  useEffect(() => {
   

    
    const getInfo = async () => {
      const allSalesPeople = await axios.get(
        "http://localhost:3001/salespeople"
      );
      const allSales = await axios.get("http://localhost:3001/sales");
      const recentFiveSales = await axios.get(
        "http://localhost:3001/fivesales"
      );
      const allCustomers = await axios.get("http://localhost:3001/customers")
      const allDiscounts = await axios.get("http://localhost:3001/discounts")
      const allProducts = await axios.get("http://localhost:3001/products")
      setSalesPeople(allSalesPeople.data);
      setSales(allSales.data);
      setRecentSales(recentFiveSales.data);
      setCustomers(allCustomers.data)
      setDiscounts(allDiscounts.data)
      setProducts(allProducts.data)
      
      if(trigger) {setTrigger(false)}
    };

    getInfo();
    
   

  }, []);
  return !trigger ? (
    <div className="App">
      <div>
      <NavBar products={products} customers={customers} salesPeople={salesPeople}/>
      </div>
      <div id="routes">
      <Routes >
        <Route path="/" element={<QuickView recentSales={recentSales} sales={sales} trigger={trigger}/>}/>
        <Route path="/customers" element={<CustomerList customers={customers}/>}/>
        <Route path="/products" element={<ProductList products={products}/>}/>
        <Route path="/sales" element={<SalesView sales={sales}/>}/>
        <Route path="/salespeople" element={<SalesPeople salesPeople={salesPeople} />}/>
      </Routes>
      </div>
      
    </div>
  ) : ( <div>loading</div>);
}

export default App;
