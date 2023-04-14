import "../styles/CustomerList.css";
import { Button, Card, CardContent, Typography } from "@mui/material";

const CustomerList = (props) => {
  return (
    <div id="customer-container">
      <h1>Customer List</h1>
      <div id="customer-list-container">
        {props.customers.map((customer) => (
          <Card>
            <CardContent className="customer-details-container">
              <Typography className="customer-name">
                {customer.firstName} {customer.lastName}
              </Typography>
              <Typography>Address: {customer.address}</Typography>
              <Typography>Phone: {customer.phone}</Typography>
              <Typography>Start Date: {customer.startDate}</Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CustomerList;
