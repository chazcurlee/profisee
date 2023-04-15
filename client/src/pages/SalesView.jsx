import "../styles/SalesView.css";
import { Button, Card, CardContent, Typography } from "@mui/material";

const SalesView = (props) => {
  const commissionCalc = (comm, price) => {
    let decimal = (comm / 100).toFixed(2);
    return price * parseFloat(decimal);
  };
  return (
    <div id="sales-container">
      <h1>Sales List</h1>
      <div id="sales-list-container">
        <Card>
          <CardContent id="sales-details-header">
            <Typography>Product</Typography>
            <Typography>Sales Person</Typography>
            <Typography>Sale Commission</Typography>
            <Typography>Customer</Typography>
            <Typography>Sale Date</Typography>
          </CardContent>
        </Card>
        {props.sales.map((sale) => (
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
