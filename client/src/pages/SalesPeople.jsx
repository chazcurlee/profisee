import { Button, Card, CardContent, Typography } from "@mui/material";
import "../styles/SalesPeople.css";
import axios from "axios";
import { useState, useEffect } from "react";

const SalesPeople = (props) => {
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
              <Button className="button">Update</Button>
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
      </div>
    </div>
  );
};

export default SalesPeople;
