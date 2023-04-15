import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";

const AddEmployeeForm = (props) => {
  const [salesPersonAdd, setSalesPersonAdd] = useState({});
  const [buttonTrigger, setButtonTrigger] = useState(true);

  const handleClose = () => {
    setButtonTrigger(true);
    setSalesPersonAdd({});
    props.setAddTrigger(false);
  };

  const handleChange = (e) => {
    const updatedId = e.target.id;
    const value = e.target.value;
    const clonedObj = structuredClone(salesPersonAdd);
    clonedObj[updatedId] = value;
    setSalesPersonAdd(clonedObj);
  };

  const handleSubmit = async () => {
    let updatedInfo = await axios.post(`http://localhost:3001/salespeople`, {
      firstName: salesPersonAdd.firstName,
      lastName: salesPersonAdd.lastName,
      address: salesPersonAdd.address,
      phone: salesPersonAdd.phone,
      manager: salesPersonAdd.manager,
      startDate: salesPersonAdd.startDate,
    });
    setSalesPersonAdd({});
    setButtonTrigger(true);
    props.setAddTrigger(false);
    window.location.reload();
  };

  useEffect(() => {
    if (
      Object.keys(salesPersonAdd).indexOf("firstName") > -1 &&
      Object.keys(salesPersonAdd).indexOf("lastName") > -1 &&
      Object.keys(salesPersonAdd).indexOf("address") > -1 &&
      Object.keys(salesPersonAdd).indexOf("phone") > -1 &&
      Object.keys(salesPersonAdd).indexOf("manager") > -1 &&
      Object.keys(salesPersonAdd).indexOf("startDate") > -1
    ) {
      setButtonTrigger(false);
    }
  }, [salesPersonAdd]);
  return (
    <form>
      <Dialog open={props.addTrigger} onClose={handleClose}>
        <DialogTitle sx={{ fontFamily: ("Ubuntu", "sans-serif") }}>
          Update Sales Person
        </DialogTitle>
        <DialogContent>
          <InputLabel>First Name</InputLabel>
          <TextField
            className="salespeople-update-container"
            id="firstName"
            defaultValue={salesPersonAdd.firstName}
            onChange={handleChange}
          />
          <InputLabel>Last Name</InputLabel>
          <TextField
            className="salespeople-update-container"
            id="lastName"
            defaultValue={salesPersonAdd.lastName}
            onChange={handleChange}
          />
          <InputLabel>Address</InputLabel>
          <TextField
            className="salespeople-update-container"
            id="address"
            defaultValue={salesPersonAdd.address}
            onChange={handleChange}
          />
          <InputLabel>Phone</InputLabel>
          <TextField
            className="salespeople-update-container"
            id="phone"
            defaultValue={salesPersonAdd.phone}
            onChange={handleChange}
          />
          <InputLabel>Manager</InputLabel>
          <TextField
            className="salespeople-update-container"
            id="manager"
            defaultValue={salesPersonAdd.manager}
            onChange={handleChange}
          />
          <InputLabel>Start Date</InputLabel>
          <TextField
            className="salespeople-update-container"
            id="startDate"
            defaultValue={salesPersonAdd.startDate}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button disabled={buttonTrigger} onClick={handleSubmit}>
            Add Employee
          </Button>
        </DialogActions>
      </Dialog>
    </form>
  );
};

export default AddEmployeeForm;
