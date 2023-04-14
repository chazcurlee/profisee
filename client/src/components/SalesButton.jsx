import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const SalesButton = (props) => {
  const [open, setOpen] = useState(false);
  const [productNames, setProductNames] = useState([]);
  const [customerNames, setCustomerNames] = useState([]);
  const [salesPersonNames, setSalesPersonNames] = useState([]);

  const handleSaleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const tempProd = [];
    const tempCust = [];
    const tempSalesPerson = [];

    props.products.map((product) => {
      tempProd.push(product.name);
    });
    props.salesPeople.map((salesPerson) => {
      let fullName = salesPerson.firstName + " " + salesPerson.lastName;
      tempSalesPerson.push(fullName);
    });
    props.customers.map((customer) => {
      let fullName = customer.firstName + " " + customer.lastName;
      tempCust.push(fullName);
    });

    setProductNames(tempProd);
    setCustomerNames(tempCust);
    setSalesPersonNames(tempSalesPerson);
  }, []);

  return (
    <div>
      <Button onClick={handleSaleClick}>New Sale</Button>
      <form>
        <Dialog
          id="sales-dialog"
          style={{
            backgroundColor: "#342056",
            color: "red",
          }}
          open={open}
          onClose={handleClose}
        >
          <DialogTitle>New Sale</DialogTitle>

          <DialogContent>
            <InputLabel>Product</InputLabel>
            <Select className="select">
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {productNames.map((product) => (
                <MenuItem value={product}>{product}</MenuItem>
              ))}
            </Select>
            <InputLabel>SalesPerson Name</InputLabel>
            <Select className="select">
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {salesPersonNames.map((salesPerson) => (
                <MenuItem value={salesPerson}>{salesPerson}</MenuItem>
              ))}
            </Select>
            <InputLabel>Customer Name</InputLabel>
            <Select className="select">
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {customerNames.map((customer) => (
                <MenuItem value={customer}>{customer}</MenuItem>
              ))}
            </Select>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" onClick={handleClose}>
              Record Sale
            </Button>
          </DialogActions>
        </Dialog>
      </form>
    </div>
  );
};

export default SalesButton;
