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
        {props.salesPeople.map((person) => (
          <Card>
            <CardContent className="salesperson-details-container">
              <Typography className="salesperson-name">
                {person.firstName} {person.lastName}
              </Typography>
              <Typography className="col-1">
                Address: {person.address}
              </Typography>
              <Button
                className="button"
                onClick={() => handleButtonClick(person)}
              >
                Update
              </Button>

              <Typography className="col-1">Phone: {person.phone}</Typography>
              <Typography className="row-2 col-2">
                Manager: {person.manager}
              </Typography>
              <Button className="button">Terminate</Button>
              <Typography className="col-1">
                Start Date: {person.startDate}
              </Typography>
              <Typography>Term Date: {person.termDate}</Typography>
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
