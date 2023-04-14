import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import axios from "axios";

const SalesButton = (props) => {
  const [open, setOpen] = useState(false);
  const [recordSale, setRecordSale] = useState({});
  const [buttonTrigger, setButtonTrigger] = useState(true);

  const handleSaleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setRecordSale({});
    setButtonTrigger(true);
  };

  const handleClick = (e) => {
    const { myValue } = e.currentTarget.dataset;
    const target = e.target.id;
    let newSale;
    if (target === "product") {
      newSale = { ...recordSale, productId: parseInt(myValue) };
    }
    if (target === "customer") {
      newSale = { ...recordSale, customerId: parseInt(myValue) };
    }
    if (target === "salesPerson") {
      newSale = { ...recordSale, salesPersonId: parseInt(myValue) };
    }
    setRecordSale(newSale);
  };

  const handleSubmit = async () => {
    let newSale = await axios.post("http://localhost:3001/sale", {
      productId: recordSale.productId,
      customerId: recordSale.customerId,
      salesPersonId: recordSale.salesPersonId,
    });

    setRecordSale({});
    console.log(newSale);
    setOpen(false);
    setButtonTrigger(true);
  };

  useEffect(() => {
    if (
      Object.keys(recordSale).indexOf("productId") > -1 &&
      Object.keys(recordSale).indexOf("customerId") > -1 &&
      Object.keys(recordSale).indexOf("salesPersonId") > -1
    ) {
      setButtonTrigger(false);
    }
  }, [recordSale]);

  return (
    <div>
      <Button onClick={handleSaleClick}>New Sale</Button>
      <form onSubmit={handleSubmit}>
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
              {props.products.map((product) => (
                <MenuItem
                  key={product.id}
                  data-my-value={product.id}
                  value={product.name}
                  id="product"
                  onClick={handleClick}
                >
                  {product.name}
                </MenuItem>
              ))}
            </Select>
            <InputLabel>SalesPerson Name</InputLabel>
            <Select className="select">
              {props.salesPeople.map((salesPerson) => (
                <MenuItem
                  key={salesPerson.id}
                  data-my-value={salesPerson.id}
                  id="salesPerson"
                  value={salesPerson.firstName + " " + salesPerson.lastName}
                  onClick={handleClick}
                >
                  {salesPerson.firstName} {salesPerson.lastName}
                </MenuItem>
              ))}
            </Select>
            <InputLabel>Customer Name</InputLabel>
            <Select className="select">
              {props.customers.map((customer) => (
                <MenuItem
                  key={customer.id}
                  data-my-value={customer.id}
                  id="customer"
                  value={customer.firstName + " " + customer.lastName}
                  onClick={handleClick}
                >
                  {customer.firstName} {customer.lastName}
                </MenuItem>
              ))}
            </Select>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button
              disabled={buttonTrigger}
              type="submit"
              onClick={handleSubmit}
            >
              Record Sale
            </Button>
          </DialogActions>
        </Dialog>
      </form>
    </div>
  );
};

export default SalesButton;
