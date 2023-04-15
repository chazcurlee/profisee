import { Card, CardContent, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import UpdateForm from "../components/UpdateForm";
import AddEmployeeForm from "../components/AddEmployeeForm";
import "../styles/SalesPeople.css";
import { useState, useEffect } from "react";

const SalesPeople = (props) => {
  const [updateTrigger, setUpdateTrigger] = useState(false);
  const [updatePerson, setUpdatePerson] = useState({});
  const [addTrigger, setAddTrigger] = useState(false);

  const handleButtonClick = (person) => {
    setUpdatePerson(person);
    setUpdateTrigger(true);
  };

  const handleAddEmployee = () => {
    setAddTrigger(true);
  };

  useEffect(() => {}, [updateTrigger]);
  return (
    <div id="salespeople-container">
      <h1>Sales Roster</h1>
      <div id="salespeople-list-container">
        <Card
          sx={{
            backgroundColor: "hsl(262, 46%, 98%)",
            height: "6rem",
            borderBottom: "1px solid #342056",
          }}
        >
          <CardContent
            sx={{ color: "#342056" }}
            id="salespeople-details-header"
          >
            <Typography variant="h5">Name</Typography>
            <Typography variant="h5">Address</Typography>
            <Typography variant="h5">Phone</Typography>
            <Typography variant="h5">Manager</Typography>
            <Typography variant="h5">Start Date</Typography>
            <Typography variant="h5">Termination Date</Typography>
          </CardContent>
        </Card>
        {props.salesPeople.map((person) => (
          <Card
            sx={{
              backgroundColor: "hsl(262, 46%, 98%)",
              height: "6rem",
              borderBottom: "1px solid #342056",
            }}
          >
            <CardContent
              sx={{ color: "#342056" }}
              className="salesperson-details-container"
            >
              <Typography className="salesperson-name">
                {person.firstName} {person.lastName}
              </Typography>
              <Typography className="col-1">{person.address}</Typography>

              <Typography className="col-1">{person.phone}</Typography>
              <Typography className="row-2 col-2">
                Manager: {person.manager}
              </Typography>

              <Typography className="col-1">{person.startDate}</Typography>
              <Typography>{person.termDate}</Typography>
              <Button
                sx={{ color: "#342056" }}
                className="button"
                onClick={() => handleButtonClick(person)}
              >
                Update
              </Button>
              <Button sx={{ color: "#342056" }} className="button">
                Terminate
              </Button>
            </CardContent>
          </Card>
        ))}
        <Button
          onClick={handleAddEmployee}
          variant="outlined"
          sx={{ color: "black", justifySelf: "left" }}
        >
          Add Employee
        </Button>
        <AddEmployeeForm
          addTrigger={addTrigger}
          setAddTrigger={setAddTrigger}
        />
        <UpdateForm
          updateTrigger={updateTrigger}
          setUpdateTrigger={setUpdateTrigger}
          updatePerson={updatePerson}
          setUpdatePerson={setUpdatePerson}
        />
      </div>
    </div>
  );
};

export default SalesPeople;
