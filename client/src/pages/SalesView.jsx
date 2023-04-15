import "../styles/SalesView.css";
import { Button, Card, CardContent, Typography } from "@mui/material";
import { useState, useEffect } from "react";

const SalesView = (props) => {
  const [orderedSales, setOrderedSales] = useState([]);
  const [orderToggle, setOrderToggle] = useState(true);

  const commissionCalc = (comm, price) => {
    let decimal = (comm / 100).toFixed(2);
    return price * parseFloat(decimal);
  };

  useEffect(() => {
    if (orderToggle) {
      setOrderedSales(props.ascSales);
    }
  }, [orderToggle]);

  const handleSort = () => {
    if (orderToggle) {
      console.log("true");
      setOrderedSales(props.descSales);
      setOrderToggle(false);
      return;
    }
    console.log("false");
    setOrderToggle(true);
  };

  return (
    <div id="sales-container">
      <h1>Sales List </h1>
      <div id="sales-list-container">
        <Card>
          <CardContent id="sales-details-header">
            <Typography variant="h5" className="header-titles">
              Product
            </Typography>
            <Typography variant="h5" className="header-titles">
              Sales Person
            </Typography>
            <Typography variant="h5" className="header-titles">
              Sale Commission
            </Typography>
            <Typography variant="h5" className="header-titles">
              Customer
            </Typography>
            <Typography variant="h5" id="sales-sort" onClick={handleSort}>
              Sale Date
              <lord-icon
                id="sort-icon"
                src="https://cdn.lordicon.com/joihnzio.json"
                trigger="hover"
                colors="primary:#121331,secondary:#342056"
                // style={{ width: "250px", height: "250px" }}
              ></lord-icon>
            </Typography>
          </CardContent>
        </Card>
        {orderedSales.map((sale) => (
          <Card>
            <CardContent className="sales-details-container">
              <Typography>{sale.productName}</Typography>
              <Typography>
                {sale.salesPersonFirstName} {sale.salesPersonLastName}
              </Typography>
              <Typography>
                {" "}
                ${commissionCalc(sale.saleCommission, sale.salePrice)}
              </Typography>
              <Typography>
                {sale.customerFirstName} {sale.customerLastName}
              </Typography>

              <Typography>{sale.salesDate}</Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SalesView;
