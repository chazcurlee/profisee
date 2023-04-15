import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";

const UpdateForm = (props) => {
  const [salesPersonUpdate, setSalesPersonUpdate] = useState({});

  const handleClose = () => {
    props.setUpdateTrigger(false);
  };

  const handleChange = (e) => {
    const updatedId = e.target.id;
    const value = e.target.value;
    const clonedObj = structuredClone(salesPersonUpdate);
    clonedObj[updatedId] = value;
    setSalesPersonUpdate(clonedObj);
  };

  const handleSubmit = async () => {
    let updatedInfo = await axios.put(
      `http://localhost:3001/salespeople/${props.updatePerson.id}`,
      {
        firstName: salesPersonUpdate.firstName,
        lastName: salesPersonUpdate.lastName,
        address: salesPersonUpdate.address,
        phone: salesPersonUpdate.phone,
        manager: salesPersonUpdate.manager,
        startDate: salesPersonUpdate.startDate,
        termDate: salesPersonUpdate.termDate,
      }
    );
    props.setUpdateTrigger(false);
    window.location.reload();
  };

  useEffect(() => {
    setSalesPersonUpdate({
      firstName: props.updatePerson.firstName,
      lastName: props.updatePerson.lastName,
      address: props.updatePerson.address,
      phone: props.updatePerson.phone,
      manager: props.updatePerson.manager,
      startDate: props.updatePerson.startDate,
      termDate: props.updatePerson.termDate,
    });
  }, []);

  return (
    <form>
      <Dialog open={props.updateTrigger} onClose={handleClose}>
        <DialogTitle>Update Sales Person</DialogTitle>
        <DialogContent>
          <InputLabel>First Name</InputLabel>
          <TextField
            id="firstName"
            defaultValue={props.updatePerson.firstName}
            onChange={handleChange}
          />
          <InputLabel>Last Name</InputLabel>
          <TextField
            id="lastName"
            defaultValue={props.updatePerson.lastName}
            onChange={handleChange}
          />
          <InputLabel>Address</InputLabel>
          <TextField
            id="address"
            defaultValue={props.updatePerson.address}
            onChange={handleChange}
          />
          <InputLabel>Phone</InputLabel>
          <TextField
            id="phone"
            defaultValue={props.updatePerson.phone}
            onChange={handleChange}
          />
          <InputLabel>Manager</InputLabel>
          <TextField
            id="manager"
            defaultValue={props.updatePerson.manager}
            onChange={handleChange}
          />
          <InputLabel>Start Date</InputLabel>
          <TextField
            id="startDate"
            defaultValue={props.updatePerson.startDate}
          />
          <InputLabel>Term Date</InputLabel>
          <TextField
            id="termDate"
            defaultValue={props.updatePerson.termDate}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Update</Button>
        </DialogActions>
      </Dialog>
    </form>
  );
};

export default UpdateForm;
