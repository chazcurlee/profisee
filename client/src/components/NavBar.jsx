import "../styles/NavBar.css";
import { useNavigate } from "react-router-dom";
import SalesButton from "./SalesButton";

const NavBar = (props) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    let path = e.target.id;
    navigate(path);
  };

  return (
    <nav id="nav-container">
      <div id="/" className="nav-item" onClick={handleClick}>
        Quick View
      </div>
      <div id="sales" className="nav-item" onClick={handleClick}>
        Sales
      </div>
      <div id="salespeople" className="nav-item" onClick={handleClick}>
        Salespeople
      </div>
      <div id="products" className="nav-item" onClick={handleClick}>
        Products
      </div>
      <div id="customers" className="nav-item" onClick={handleClick}>
        Customers
      </div>
      <SalesButton
        products={props.products}
        customers={props.customers}
        salesPeople={props.salesPeople}
      />
    </nav>
  );
};

export default NavBar;
