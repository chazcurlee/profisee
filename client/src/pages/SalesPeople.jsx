import { Card, CardContent, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import UpdateForm from "../components/UpdateForm";
import "../styles/SalesPeople.css";
import { useState, useEffect } from "react";

const SalesPeople = (props) => {
  const [updateTrigger, setUpdateTrigger] = useState(false);
  const [updatePerson, setUpdatePerson] = useState({});

  const handleButtonClick = (person) => {
    setUpdatePerson(person);
    setUpdateTrigger(true);
  };

  useEffect(() => {}, [updateTrigger]);
  return (
    <div id="salespeople-container">
      <h1>Sales Roster</h1>
      <div id="salespeople-list-container">
        <Card>
          <CardContent id="salespeople-details-header">
            <Typography>Name</Typography>
            <Typography>Address</Typography>
            <Typography>Phone</Typography>
            <Typography>Manager</Typography>
            <Typography>Start Date</Typography>
            <Typography>Termination Date</Typography>
          </CardContent>
        </Card>
        {props.salesPeople.map((person) => (
          <Card>
            <CardContent className="salesperson-details-container">
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
                className="button"
                onClick={() => handleButtonClick(person)}
              >
                Update
              </Button>
              <Button className="button">Terminate</Button>
            </CardContent>
          </Card>
        ))}
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
