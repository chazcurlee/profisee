import "../styles/SalesView.css";
import { Button, Card, CardContent, Typography } from "@mui/material";

const SalesView = (props) => {
  return (
    <div id="sales-container">
      <h1>Sales List</h1>
      <div id="sales-list-container">
        {props.sales.map((sale) => (
          <Card>
            <CardContent className="sales-details-container">
              <Typography>Product: {sale.productName}</Typography>
              <Typography>
                SalesPerson: {sale.salesPersonFirstName}{" "}
                {sale.salesPersonLastName}
              </Typography>
              <Typography>
                Customer: {sale.customerFirstName} {sale.customerLastName}
              </Typography>
              <Typography>Sale Date: {sale.salesDate}</Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SalesView;
