import "../styles/CustomerList.css";
import { Button, Card, CardContent, Typography } from "@mui/material";

const CustomerList = (props) => {
  return (
    <div id="customer-container">
      <h1>Customer List</h1>
      <div id="customer-list-container">
        <Card>
          <CardContent id="customer-details-header">
            <Typography>Name</Typography>
            <Typography>Address</Typography>
            <Typography>Phone</Typography>
            <Typography>Start Date</Typography>
          </CardContent>
        </Card>
        {props.customers.map((customer) => (
          <Card>
            <CardContent className="customer-details-container">
              <Typography className="customer-name">
                {customer.firstName} {customer.lastName}
              </Typography>
              <Typography>{customer.address}</Typography>
              <Typography>{customer.phone}</Typography>
              <Typography>{customer.startDate}</Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CustomerList;
