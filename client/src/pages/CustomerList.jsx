import "../styles/CustomerList.css";
import { Button, Card, CardContent, Typography } from "@mui/material";

const CustomerList = (props) => {
  return (
    <div id="customer-container">
      <h1>Customer List</h1>
      <div id="customer-list-container">
        <Card
          sx={{
            backgroundColor: "hsl(262, 46%, 98%)",
            height: "6rem",
            borderBottom: "1px solid #342056",
          }}
        >
          <CardContent sx={{ color: "#342056" }} id="customer-details-header">
            <Typography variant="h5">Name</Typography>
            <Typography variant="h5">Address</Typography>
            <Typography variant="h5">Phone</Typography>
            <Typography variant="h5">Start Date</Typography>
          </CardContent>
        </Card>
        {props.customers.map((customer) => (
          <Card
            sx={{
              backgroundColor: "hsl(262, 46%, 98%)",
              height: "6rem",
              borderBottom: "1px solid #342056",
            }}
          >
            <CardContent
              sx={{ color: "#342056" }}
              className="customer-details-container"
            >
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
